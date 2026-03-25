
const jwt = require("jsonwebtoken");

const { UsersModel } = require("../model/UsersModel");


module.exports.userVerification = async ( req, res, next ) => {

    const authHeader = req.headers.authorization;


    if( !authHeader || !authHeader.startsWith("Bearer ") ){

        return res.status(401).json({ status: false, message: "No token" });

    }


    const token = authHeader.split(" ")[1];


    try{

        const decoded = jwt.verify( token, process.env.ACCESS_TOKEN_SECRET );

        const user = await UsersModel.findById( decoded.id );


        if( !user ){

            return res.status(401).json({ status: false, message: "User not found" });

        }


        req.user = user;

        next();

    } catch( e ){

        return res.status(403).json({ status: false, message: "Invalid Token" });

    }
    
}