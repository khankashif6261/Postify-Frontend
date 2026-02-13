"use client"
import React, { useState } from 'react'
const Login = () => {

  const [name, setname] = useState("");
  const [pass, setpass] = useState("")

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
    console.log(`${process.env.NEXT_PUBLIC_API_URL}/login`);
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
    else if (!data.userAuth) {
      let pass_error = document.querySelector("#pass-error");
      pass_error.textContent = "either username or password is wrong";
    }

    setname("");
    setpass("");
  }

  return (

    <div className='min-h-screen w-full bg-[#eff2f1] flex justify-center items-center px-4'>

      <div className='main bg-[#3ab299] flex flex-col lg:flex-row justify-between w-full max-w-5xl rounded-3xl overflow-hidden'>

        {/* LEFT PANEL */}
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

        {/* RIGHT PANEL */}
        <div className='bg-white w-full min-h-120 lg:w-[60%] p-6 sm:p-10'>

          <h1 className='text-[#3ab299] font-bold text-2xl sm:text-4xl text-center mt-6 sm:mt-10'>
            Login To Your Account
          </h1>

          <span className='text-red-500 block text-center mt-2' id='pass-error'></span>

          <form onSubmit={handleLogin}>

            <div className='flex flex-col items-center mt-10 gap-4 w-full'>

              <input
                type="text"
                onChange={handleName}
                name='name'
                required
                placeholder='Name'
                className='bg-[#eff2f1] rounded-md outline-none px-3 py-2 h-12 w-full sm:w-[80%]'
              />

              <input
                type="password"
                onChange={handlepassword}
                name='pass'
                required
                placeholder='Password'
                className='bg-[#eff2f1] rounded-md outline-none px-3 py-2 h-12 w-full sm:w-[80%]'
              />

            </div>

            <div className='flex justify-center'>
              <button
                type='submit'
                className='cursor-pointer mt-8 bg-[#3ab299] py-2 px-10 text-white rounded-full'
              >
                Login
              </button>
            </div>

          </form>

        </div>

      </div>

    </div>
  )
}

export default Login
