import React from 'react'
import {FaUserCircle} from 'react-icons/fa'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <div className='h-14 w-screen bg-yellow-500 text-left'>
        <div className='h-14 px-10 bg-yellow-400 text-left flex justify-between'>
            <Link to='/' className='my-auto transition-all duration-150 hover:scale-75'>
              <h2 className='text-2xl font-bold py-2'>Quiz Time</h2>
            </Link>
            
            
            <Link to='/admin' className='my-auto transition-all duration-150 hover:scale-75'>
              <FaUserCircle className='text-4xl ' />
            </Link>
        </div>
    </div>
  )
}

export default Navbar