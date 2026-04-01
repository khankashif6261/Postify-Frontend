"use client"
import React, { useState, useEffect } from 'react'
import FullScreenLoader from '../components/FullScreenLoader';

const Login = () => {

  const [name, setname] = useState("");
  const [loading, setloading] = useState(false)
  const [backendReady,setBackendReady] = useState(false)
  const [pass, setpass] = useState("")


  useEffect(()=>{

    const checkBackend = async()=>{

      try{

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/`,
          {
            method:"GET",
            credentials:"include"
          }
        );

        const data = await res.json();

        if(data.isDefault){
          setBackendReady(true);
        }

      }
      catch{
        console.log("Backend sleeping...");
      }

    }

    const interval = setInterval(checkBackend,3000);

    checkBackend();

    return ()=> clearInterval(interval);

  },[])

  const handleName = (event) => {
    setname(event.target.value);
  }

  const handlepassword = (event) => {
    setpass(event.target.value);
  }

  const routetoRegister = () => {
    window.location.href = "/register";
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setloading(true);

    try {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ name, pass })
    });

    const data = await res.json();

    if (data.userAuth) {
      window.location.href = "/home";
    }

    else {

      let pass_error = document.querySelector("#pass-error");
      pass_error.textContent =
      "either username or password is wrong";

    }

    }

    catch(err){
      console.log(err);
    }

    finally{
      setloading(false);
    }

    setname("");
    setpass("");
  }


  if(loading || !backendReady){
    return <FullScreenLoader/>
  }

  return (

    <div className='min-h-screen w-full bg-[#eff2f1] flex justify-center items-center px-4'>

      {/* YOUR UI UNCHANGED */}

      <div className='main bg-[#3ab299] flex flex-col lg:flex-row justify-between w-full max-w-5xl rounded-3xl overflow-hidden'>

        <div className='flex flex-col justify-center items-center text-center p-8 lg:w-[40%]'>

          <h1 className='text-white text-3xl sm:text-4xl font-bold'>
            New User?
          </h1>

          <div className='max-w-[250px] mt-5'>
            <span className='text-white tracking-tighter text-sm sm:text-base'>
              Sign Up and Discover great amount of new Opportunities.
            </span>
          </div>

          <button
            onClick={routetoRegister}
            className='cursor-pointer mt-10 bg-white py-2 px-10 text-[#3ab299] rounded-full font-bold'
          >
            Sign Up
          </button>

        </div>

        {/* rest unchanged */}

      </div>

    </div>

  )

}

export default Login