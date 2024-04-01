import React from 'react'
import ExiBnItem from './ExiBnItem'
import { Link } from "react-router-dom";

export default function ExiBn() {
  return (
    <>
    <div className="container">
        <h1 className='my-3'>Existing Business</h1> 

        Will continue after database
        <Link to='/ExiBnDt' style={{textDecoration: 'none', color: 'white'}}>
        <ExiBnItem/>
        </Link>
               
    </div> 
    </>
  )
}
