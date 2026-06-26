import React from 'react'
import { FaList,FaClock,FaCheckCircle,FaBroom  } from "react-icons/fa";

export default function FilterButtons({filter,setFilter,clearCompleted}) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4
        gap-3 w-full  text-xl font-bold text-gray-600'>
        <button className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-gray-300 shadow-sm
        ${filter === "all"?"bg-purple-50 text-purple-500 border-purple-500": 
        "border-gray-300 text-gray-600"}`}
        onClick={()=>setFilter("all")}><FaList className="text-xl flex-shrink-0"/>All</button>
        <button className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-gray-300 shadow-sm
        ${filter === "active"? 
        "bg-red-50 text-red-400 border-red-400": "border-gray-300 text-gray-600"}`} 
        onClick={()=>setFilter("active")}><FaClock className="text-xl flex-shrink-0"/>Active</button>
        <button className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-gray-300 shadow-sm
        ${filter === "completed"? 
        "bg-green-50 text-green-500 border-green-500": "border-gray-300 text-gray-600"}`} 
        onClick={()=>setFilter("completed")}><FaCheckCircle className="text-xl flex-shrink-0"/>Completed</button>
        <button onClick={clearCompleted} className="w-full flex justify-center items-center gap-2
        border-2 border-red-400 text-red-500
        px-4 py-3 rounded-xl
        hover:bg-red-400 hover:text-white
        transition-all"><FaBroom  className="text-xl flex-shrink-0" />Completed</button>
    </div>
  )
}
