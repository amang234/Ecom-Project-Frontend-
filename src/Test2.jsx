import React from 'react'
import { useState } from 'react'

function Test2() {
    const [ priceFilter, SetPriceFilter] =useState()
  return (
    <>
    <h1>{priceFilter}</h1>
        <input type="radio" name="price" id="" onChange={e=>{SetPriceFilter(e.target.value)}} value="Price High to Low" /> Price High to Low
        <input type="radio" name="price" id="" onChange={e=>{SetPriceFilter(e.target.value)}} value="Price low to high" /> Price High to Low
    </>
  )
}

export default Test2
