import React from 'react'
import "./Notes.css"
import { MdDelete } from "react-icons/md";
export default function Notes(props) {
    
  return (
   <div className='contain'>
    <div className='notes' onClick={()=>{
        props.reverse(props.head,props.lower,props.id)
    }} >
      <h3>{props.head}</h3>
      <p>{props.lower}
      </p>
    </div>
   <div className='button'> <MdDelete className='btn'  
onClick={()=>{
props.select(props.id)
      }} 
      />
</div>
    </div>
    
  )
}
