import React from 'react'
import SearchBar from './SearchBar'
import Menu from './Menu'
import MainHero from './MainHero'

function Home() {
  return (
    <>

    <div className='home-main' >
      
      <Menu/>
      <SearchBar/>
      <MainHero/>
    </div>
    </>
  )
}

export default Home
