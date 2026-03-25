
const router = require("express").Router();

const { userVerification } = require("../Middlewares/authMiddleware");


router.get( "/", userVerification, ( req, res ) => {

    res.json({

        status: true,

        message: "Welcome to home route",

        user: req.user.username,

    });

});


module.exports = router;

