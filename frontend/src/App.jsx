import React from 'react'

const App = () => {
  return (
    <div className="bg-neutral-800 min-h-screen flex justify-center items-center">
      <div className="container w-3/4 mx-auto p-6 flex flex-col justify-center items-center space-y-10 bg-white rounded-2xl shadow-lg shadow-white">  
        <h1 className="mt-10 text-neutral-800 text-4xl font-bold text-center cursor-default">Login</h1>
        <form action="#" className='w-full flex flex-col gap-6 justify-center items-center' onSubmit={(e) => console.log(e)}>
          <label htmlFor="#" className="w-full text-neutral-800 bg-white font-semibold text-xl">Username 
          </label>
          <input type="text" placeholder="Username" className="w-full self-center rounded-2xl px-3 py-2 outline-none ring-2 ring-neutral-800 focus:border-1 focus:border-neutral-800 focus:ring-offset-3 transition-all"/>
          <label htmlFor="#" className="w-full text-neutral-800 bg-white font-semibold text-xl">Password 
          </label>
          <input type="text" placeholder="Password" className="w-full self-center rounded-2xl px-3 py-2 outline-none ring-2 ring-neutral-800 focus:border-1 focus:border-neutral-800 focus:ring-offset-3 transition-all"/>
        </form>
        <button className="w-3/4 bg-neutral-800 text-white rounded-2xl px-3 py-2 font-bold text-md transition-all active:bg-white active:text-neutral-800 active:border-2 active:border-neutral-800">Login</button>
        <p className="mb-10 text-sm text-neutral-800">Don't have an account?<a href="#"className="text-neutral-800 font-semibold ml-0.5">Register Now.</a></p>
      </div>
    </div>
  )
}

export default App