import { FaPlus } from "react-icons/fa";
import React from 'react'

export default function TaskForm({task,setTask,addTask}) {

    function handleTask(e){
        setTask(e.target.value);
    }
  return (
    <div className="flex items-center flex-wrap gap-3 w-full">
        <input type="text" 
        placeholder="✏️ Enter a task..."
        className="h-15 px-4 border rounded-lg flex-1 text-[1.5rem] font-bold border border-gray-200 shadow-md  focus:outline-none focus:ring-2 focus:ring-blue-500
        max-[600px]:w-1/3"
        value={task}
        onChange={handleTask}
        onKeyDown={(e)=>{
          if (e.key === "Enter") {
          addTask();
        }}}
        />
        <button className="h-15 px-6 flex items-center gap-2 bg-blue-500 text-white rounded-lg font-bold" onClick={addTask}><FaPlus/>ADD</button>
    </div>
  )
}
