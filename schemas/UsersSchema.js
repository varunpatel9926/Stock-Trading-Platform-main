
const { Schema } = require("mongoose");

const { hashPassword, comparePassword } = require("../util/hash");


const UsersSchema = new Schema({

    email: {

        type: String,

        required: [true, "Your email address is required"],
        
        unique: true,

        lowercase: true,

        match: [/\S+@\S+\.\S+/, "Please use valid eamil address"],

    },

    username: {

        type: String,

        required: [true, "Your username is required"],

    },

    password: {

        type: String,

        required: [true, "Your password is required"],

    },

    createdAt: {

        type: Date,

        default: Date.now,

    }

});


//Hash password before saving
UsersSchema.pre( "save", async function(){

    if( !this.isModified( "password" ) ) return;

    this.password = await hashPassword( this.password, 12 );

} )


//Compare password method
UsersSchema.methods.comparePassword = async function( candidatePassword ){

    return await comparePassword( candidatePassword, this.password );

}


module.exports = { UsersSchema };