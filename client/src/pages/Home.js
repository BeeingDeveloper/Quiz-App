import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='text-lg md:text-2xl font-extrabold h-full flex justify-center items-center'>
      <div className='bg-yellow-400 rounded-md p-8 '>
        <h2>Let's test your general knowledge...</h2>
        <Link to='/quiz-page'>
          <button className='bg-slate-200 mt-10 px-5 rounded-md p-2 shadow-lg shadow-red-500 transition-all duration-150 hover:scale-90'>Start
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home