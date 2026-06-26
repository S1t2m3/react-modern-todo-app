import React from 'react'
import { FaClipboardList } from "react-icons/fa";

export default function Header() {
  return (
    <div className=' flex items-center justify-center gap-5 text-[2.5rem]'>
        <FaClipboardList  className='text-purple-400'/> 
        <span className='font-bold'>TO DO APP</span>
    </div>
  )
}
