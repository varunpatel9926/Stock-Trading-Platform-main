
import React, {useEffect, useState} from "react";

import axios from "axios";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {

  const [ user, setUser ] = useState("");

  useEffect( () => {

    const fetchProtectedData = async () => {

      try{

        const token = sessionStorage.getItem("token");

        const { data } = await axios.get(

          "http://localhost:4000/home",

          {

            headers: {

              Authorization: `Bearer ${token}`,
            },

            withCredentials: true,

          },

        );

        setUser( data.user );

        console.log(data);

      } catch(err){

        console.log(err);

      }

    }; 
    
    fetchProtectedData();

  }, [] )

  return (
    <>
      <TopBar />
      <h2>Welcome {user}</h2>
      <Dashboard />
    </>
  );
};

export default Home;
