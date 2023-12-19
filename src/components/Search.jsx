import React from 'react'
import '../App.css'
const Search = (props) => {
  return (
    <div>
      <div className='search'>
        <h2 className='h2'>Search</h2>
        <input type="search" className='searchbox'  onChange={e=>{props.handleSearch(e)} }  />
      </div>
    </div>
  )
}

export default Search