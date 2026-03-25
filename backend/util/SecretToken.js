
const jwt = require("jsonwebtoken");

const createAccessToken = (user) => {

    return jwt.sign(

        {
            id: user._id,

            email: user.email,

            type: "access",

        },

        process.env.ACCESS_TOKEN_SECRET,

        {
            expiresIn: "15m",

            issuer: "S-T-P",
        }

    );

};


const createRefreshToken = (user) => {

    return jwt.sign(

        {
            id: user._id,

            type: "refresh",
        },

        process.env.REFRESH_TOKEN_SECRET,

        {
            expiresIn: "7d",

            issuer: "S-T-P"
        }

    );

};



module.exports = { createAccessToken, createRefreshToken };