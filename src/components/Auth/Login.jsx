import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    setEmail("");
    setPassword("");
  }
  return (
    <div className='flex h-screen w-screen items-center justify-center '>
      <div className='border-2 rounded-xl p-10 md:p-20 py-10 md:py-32 border-emerald-500'>
        <form onSubmit={(e) => {
          submitHandler(e);
        }}
          className='flex flex-col items-center justify-center gap-2'>
          <h1 className='text-white justify-self-start mb-20 font-bold'>
            LOGIN FORM
          </h1>
          <input value={email}
          onChange={(e) => setEmail(e.target.value)}
            required
            className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email'
          />
          <input value={password}
          onChange={(e) => setPassword(e.target.value)}
            required
            className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder='Enter password' />
          <button className='mt-7 text-white border-none outline-none hover:bg-purple-700 font-semibold bg-purple-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>Log in</button>

        </form>
      </div>
    </div>
  )
}

export default Login