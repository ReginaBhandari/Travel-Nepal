import React from 'react';
import {BsLinkedin,BsFacebook} from 'react-icons/bs' 
import {AiFillInstagram} from 'react-icons/ai'

export default function Footer() {
  return (
    <div className='footer'>
        <span>Copyright &copy; 2022 Travel Nepal. All rights reserved</span>
        <ul className='links'>
            <li><a href="#hero">Home</a></li>
            <li><a href="#recommend">Places</a></li>
            
        </ul>
        <ul className="social_links">
            <li><BsFacebook/></li>
            <li><BsLinkedin/></li>
            <li><AiFillInstagram/></li>
        </ul>
    </div>
  )
}

