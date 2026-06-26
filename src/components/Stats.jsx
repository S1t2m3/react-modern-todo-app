import React from 'react'
import { FaTasks,FaCheckCircle,FaClock } from "react-icons/fa";

export default function Stats({tasks}) {
    const totalTasks=tasks.length;
    const completedTasks=tasks.filter((task)=>(
        task.completed===true
    )).length;
    const leftTasks=totalTasks-completedTasks;

  return (
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full border border-gray-200 shadow-sm rounded-xl p-5">
  
    <div className="flex items-center gap-3 px-10 justify-center sm:justify-start">
        <FaTasks className="text-4xl text-blue-400" />
        <div>
            <p className="text-[1.1rem] font-bold text-gray-600">Total</p>
            <p className="font-bold text-4xl text-blue-400">{totalTasks}</p>
        </div>
    </div>

    <div className="flex items-center gap-3 px-10 justify-center sm:justify-start">
        <FaCheckCircle className="text-4xl text-green-500" />
        <div>
            <p className="text-[1.1rem] font-bold text-gray-600">Done</p>
            <p className="font-bold text-4xl text-green-500">{completedTasks}</p>
        </div>
    </div>

    <div className="flex items-center gap-3 px-10 justify-center sm:justify-start">
        <FaClock className="text-4xl text-[orange]" />
        <div>
            <p className="text-[1.1rem] font-bold text-gray-600">Left</p>
            <p className="font-bold text-4xl text-[orange]">{leftTasks}</p>
        </div>
    </div>

</div>
  )
}
