import React from 'react'
import { Link } from 'react-router-dom'
import {GrStatusWarning} from 'react-icons/gr'


const Home = () => {


  const score = window.localStorage.getItem('score');

  return (
    <div className='text-lg md:text-2xl font-extrabold h-auto my-44 flex justify-center items-center flex-col gap-10'>
      
      <div className='bg-yellow-400 h-44 w-[85%] lg:w-[60%] rounded-md shadow-xl shadow-slate-500'>
        <h2 className='bg-white p-2 rounded-t-md'>REMEMBER</h2>
        <p>You will have <span className='text-red-600'>1 Minute</span> and <span className='text-red-600'>30 Seconds</span> to complete the Quiz</p>
        <h2 className=' p-2 rounded-t-md mt-5'>BEST OF LUCK</h2>

      </div>
      
      
      <div className='bg-yellow-400 rounded-md p-8 w-[85%] lg:w-[60%]  shadow-xl shadow-slate-500'>
        <h2>Let's test your general knowledge...</h2>
        <Link to='/quiz-page'>
          <button className='bg-slate-200 mt-10 px-5 rounded-md p-2 shadow-lg shadow-red-500 transition-all duration-150 hover:scale-90'>Start
          </button>
        </Link>
      </div>

      {
        score == 0 ? <> </>
        : <div className='bg-yellow-400 w-[85%] lg:w-[60%] mx-5 rounded-md'>
           <h2>Your last score: <span className='text-red-600'> {score}</span> </h2>
          </div>
      }

    </div>
  )
}

export default Home