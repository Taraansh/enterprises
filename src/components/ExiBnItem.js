import React from 'react'
import ExiBnDt from './ExiBnDt';


export default function ExiBnItem() {
  return (
    <div>
        <div className="card my-2 card-body text-black" onClick={()=>{<ExiBnDt/>}}>
            {/* Sr.no and name passed as prop*/} Name of business
        </div>
    </div>
  )
}
