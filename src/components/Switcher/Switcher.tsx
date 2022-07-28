import React from 'react'
import { Route, Routes } from 'react-router'
import { HomePage, MoviePage, SearchPage } from '../../pages'
import NavBar from '../NavBar/NavBar'
import SearchResults from '../SearchResults/searchResults'

const Switcher = () => {
  return (
    <>
      <Routes>
        <Route path='*' element={<NavBar />} />
      </Routes>

      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='movie/:movieId' element={<MoviePage />} />

        <Route path='/search' element={<SearchPage />}>
          <Route path=':searchInput' element={<SearchResults />} />
        </Route>
      </Routes>
    </>
  )
}

export default Switcher