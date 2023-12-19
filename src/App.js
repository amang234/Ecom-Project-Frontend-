import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Test from './Test';
import Search from './Search';
import Loader from './Loader';
import Test2 from './Test2';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/test' element={<Test/>} />
      <Route path='/search' element={<Search/>} />
      <Route path='/loader' element={<Loader/>} />
      <Route path='/letstest' element={<Test2/>} />
      
    </Routes>

    </>
  )
}

export default App
