import React from 'react'
import {MdOutlineCircle} from 'react-icons/md'



const Score = ({score}) => {



  return (
    <div className=' h-72 w-64 bg-yellow-400 m-auto my-44 rounded-md shadow-xl shadow-slate-50'>
        <h2 className='bg-white text-2xl font-semibold p-2'>Your Score</h2>
        <MdOutlineCircle className='text-red-500 text-[15rem] w-fit m-auto' />
        <div className='relative bottom-[11rem]'>
            <h2 className='text-5xl font-extrabold'>{score}</h2>
            <div className='w-44 h-4 bg-red-500  m-auto'></div>
            <h2 className='text-5xl font-extrabold'>100</h2>
        </div>
    </div>
  )
}

export default Score