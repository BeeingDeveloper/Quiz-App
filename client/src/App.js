import React, { useContext, useEffect, useState } from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import QuizPage from './pages/QuizPage'
import AdminPage from './pages/AdminPage'



const App = () => {




  return (
    <div className='text-center font-default h-screen bg-slate-900'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quiz-page' element={<QuizPage />} />
        <Route path='/admin' element={<AdminPage />} />
      </Routes>
    </div>
  )
}

export default App