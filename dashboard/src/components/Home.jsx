
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

          "http://localhost:4000/",

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
      <TopBar user={user} />

      <Dashboard user={user} />
    </>
  );
};

export default Home;
