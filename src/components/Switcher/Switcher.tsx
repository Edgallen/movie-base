import React from 'react'
import { Route, Routes } from 'react-router'
import { HomePage } from '../../pages'
import NavBar from '../NavBar/NavBar'

const Switcher = () => {
  return (
    <>
      <Routes>
        <Route path='*' element={<NavBar />} />
      </Routes>

      <Routes>
        <Route path='/' element={<HomePage />}/>
      </Routes>
    </>
  )
}

export default Switcher