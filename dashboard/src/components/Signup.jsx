
import React, {useState} from 'react';

import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";



function Signup() {

    const navigate = useNavigate();

    const [ inputValue, setInputValue ] = useState({

        email: "",

        username: "",

        password: "",

    })

    const [ loading, setLoading ] = useState(false);

    const { email, username, password } = inputValue;



    const handleOnChange = (e) => {

        const { name, value } = e.target;

        setInputValue( (prev) => ({

            ...prev, [name]: value,

        }));

    };


    const handleError = ( msg ) => toast.error( msg, { position: "bottom-left" } );

  
    const handleSuccess = ( msg ) => toast.success( msg, { position: "bottom-right" } );


    const handleSubmit = async (e) => {

        e.preventDefault();

        if( !email || !username || !password ){

            return handleError("All fields are required");

        }

        if(password.length < 6){

            return handleError("Password must be at least 6 characters");

        }

        try{

            setLoading(true);

            const API_URL = "http://localhost:4000";

            const { data } = await axios.post(

                `${API_URL}/signup`,

                { email, username, password },

                { withCredentials: true }

            );


            const { success, message, accessToken } = data;

            if( success ){

                handleSuccess(message);

                sessionStorage.setItem("token", accessToken);

                setInputValue({
                    email: "",
                    username: "",
                    password: "",
                });

                setTimeout(() => navigate("/"), 1000 );

            }

            else{

                handleError(message);

            }
        }

        catch( err ){

            handleError(

                err.response?.data?.message || "Something went wrong"
            );

        }
        finally{

            setLoading(false);

        }

    }



    return ( 

        <div className="form_container">

            <h2>Signup Account</h2>

            <form onSubmit={handleSubmit}>

                <div>

                    <label htmlFor="email">Email</label>

                    <input type="email" name="email" value={email} placeholder="Enter your email" onChange={handleOnChange} required />

                </div>

                <div>

                    <label htmlFor="username">Username</label>

                    <input type="text" name="username" value={username} placeholder="Enter your username" onChange={handleOnChange} required />

                </div>

                <div>

                    <label htmlFor="password">Password</label>

                    <input type="password" name="password" value={password} placeholder="Enter your password" onChange={handleOnChange} required />

                </div>

                <button type="submit" disabled={loading} >

                    { loading ? "Signing up..." : "Submit" }

                </button>


                <span>

                    Already have an account? <Link to="/login">Login</Link>

                </span>

            </form>

            <ToastContainer />

        </div>

    );
};

export default Signup;
