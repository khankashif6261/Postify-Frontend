"use client"
import React, { useState } from 'react'

const Register = () => {
  const [name, setname] = useState("");
  const [pass, setpass] = useState("")
  const [pass2, setpass2] = useState("")
  const [mail, setmail] = useState("");

  const handleName = (event) => {
    setname(event.target.value);
  }

  const handlepassword = (event) => {
    setpass(event.target.value);
  }

  const handlepassword2 = (event) => {
    setpass2(event.target.value);
  }

  const handlemail = (event) => {
    setmail(event.target.value);
  }

  const HandleApi = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, pass, mail })
    });

    setname("");
    setmail("");
    setpass("");
    setpass2("");
    routetoLogin();
  }

  const routetoLogin = () => {
    window.location.href = "/login";
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    let pass_error = document.getElementById("pass-error");

    if (pass != pass2) {
      pass_error.textContent = "Both values should match";
      return -1
    }
    else {
      pass_error.textContent = "";
      HandleApi()
    }
  }

  return (

    <div className='min-h-screen w-full bg-[#eff2f1] flex justify-center items-center px-4'>

      <div className='main bg-[#3ab299] flex flex-col lg:flex-row justify-between w-full max-w-5xl rounded-3xl overflow-hidden'>

        <div className='flex flex-col justify-center items-center text-center p-8 lg:w-[40%]'>

          <h1 className='text-white text-3xl sm:text-4xl font-bold'>
            Welcome Back!
          </h1>

          <div className='mt-5 max-w-[250px]'>
            <span className='text-white tracking-tighter text-sm sm:text-base'>
              to stay in touch please login with your personal info.
            </span>
          </div>

          <button
            onClick={routetoLogin}
            className='cursor-pointer mt-10 bg-white py-2 px-10 text-[#3ab299] rounded-full font-bold'
          >
            Login
          </button>

        </div>

        <div className='bg-white w-full lg:w-[60%] p-6 sm:p-10'>

          <h1 className='text-[#3ab299] font-bold text-2xl sm:text-3xl text-center mt-2'>
            Create Account
          </h1>

          <span className='text-red-500 block text-center mt-2' id='pass-error'></span>

          <form onSubmit={handleSubmit}>

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
                type="email"
                onChange={handlemail}
                name='mail'
                required
                placeholder='Email'
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

              <input
                type="password"
                onChange={handlepassword2}
                name='pass2'
                required
                placeholder='Confirm Password'
                className='bg-[#eff2f1] rounded-md outline-none px-3 py-2 h-12 w-full sm:w-[80%]'
              />

            </div>

            <div className='flex justify-center'>
              <button
                type='submit'
                className='cursor-pointer mt-10 bg-[#3ab299] py-2 px-10 text-white rounded-full'
              >
                Sign Up
              </button>
            </div>

          </form>

        </div>

      </div>

    </div>
  )
}

export default Register
