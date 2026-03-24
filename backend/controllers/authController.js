
const { UsersModel } = require("../model/UsersModel");

const { createAccessToken, createRefreshToken } = require("../util/SecretToken");

// const { comparePassword } = require("../util/hash");



module.exports.signup = async ( req, res ) => {

    console.log("Signup hit");

    try{

        const { email, username, password } = req.body;


        const existingUser = await UsersModel.findOne( { email } );

        if( existingUser ){

            return res.status(400).json({

                success: false,

                message: "User already exists",
            });

        }


        const user = await UsersModel.create( { email, username, password } );


        const accessToken = createAccessToken( user );

        const refreshToken = createRefreshToken( user );



        res.cookie( "refreshToken", refreshToken, {

            httpOnly: true,

            secure: false,

            sameSite: "Strict",

            maxAge: 7 * 24 * 60 * 60 * 1000,

        } );



        res.status(201).json({

            success: true,

            message: "User registered successfully",

            accessToken,

            user: {

                id: user._id,

                email: user.email,

                username: user.username,

            },

        });


    } catch(e){

        console.error(e);

        res.status(500).json({

            success: false,

            message: "Server error",

        });

    }

};



module.exports.login = async ( req, res ) => {

    try{

        const { email, password } = req.body;

        if( !email || !password ){

            return res.status(400).json({

                success: false,

                message: "Email and password are required",

            });

        }


        const user = await UsersModel.findOne({ email });

        if( !user ){

            return res.status(404).json({

                success: false,

                message: "User not found",

            });

        }


        const isMatch = await user.comparePassword( password );

        if( !isMatch ){

            return res.status(401).json({

                success: false,

                message: "Invalid Credentials",

            });

        }



        const accessToken = createAccessToken(user);

        const refreshToken = createRefreshToken(user);



        res.cookie( "refreshToken", refreshToken, {

            httpOnly: true,

            secure: false,

            sameSite: "Strict",

            maxAge: 7 * 24 * 60 * 60 * 1000,

        } );


        res.status(200).json({

            success: true,

            message: "Login Successful",

            accessToken,

            user: {

                id: user._id,

                email: user.email,

                username: user.username,

            }

        });


    } catch(e){

        console.error(e);

        res.status(500).json({

            success: false,

            message: "Server error",

        });

    }

};