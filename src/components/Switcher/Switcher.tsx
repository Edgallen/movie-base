import React from 'react'
import { Route, Routes } from 'react-router'
import { HomePage, MoviePage, SearchResultPage } from '../../pages'
import NavBar from '../NavBar/NavBar'

const Switcher = () => {
  return (
    <>
      <Routes>
        <Route path='*' element={<NavBar />} />
      </Routes>

      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='movie/:movieId' element={<MoviePage />} />
        <Route path='search/:searchInput' element={<SearchResultPage />} />
      </Routes>
    </>
  )
}

export default Switcher