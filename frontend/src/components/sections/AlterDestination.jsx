import React from 'react'
import {AiOutlineEdit} from 'react-icons/ai'
import { Link  } from "react-router-dom";

function ALterDestination() {
  return (
    <div className='addDest'>
        <button><Link to={`/destinationcrud`}><AiOutlineEdit/></Link></button>
    </div>
  )
}

export default ALterDestination