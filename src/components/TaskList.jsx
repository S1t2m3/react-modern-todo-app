import { FaTrash } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import React from 'react'

export default function TaskList({task,deleteTask,toggleComplete,startEditing,editingId,setEditingId,editText,setEditText,saveTask}) {
  
  return (
    <div className="flex items-center justify-between w-full px-5 py-3 border-1 border-gray-300 rounded-xl shadow-sm">
        <div className="flex items-start gap-5 flex-1 min-w-0"> 
            <input type="checkbox" 
            className="w-6 h-6
            accent-green-400
            rounded-md
            border-2 border-gray-300
            cursor-pointer
            transition-all duration-200
            hover:scale-110
            "
            checked={task.completed}
            onChange={()=>toggleComplete(task.id)}
            />
            {editingId===task.id?(
              <input
              autoFocus
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={(e) => {
                if(e.key==="Enter")
                  saveTask();
                else if(e.key==="Escape"){
                  setEditingId(null);
                  setEditText("");
                }
              }}
              onBlur={saveTask}
              className="w-full px-2 rounded-lg border-2 border-purple-300 bg-white text-gray-800 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 caret-purple-600 text-[1.4rem] font-bold text-gray-700"
              />):(<div className="flex-1 min-w-0">
                <p className="text-[1.4rem] font-bold break-words whitespace-normal">
                {task.text}</p>
                <p className="text-xs text-gray-500 mt-1">
                📅{new Date(task.createdAt).toLocaleString()}
                </p>
              </div>)}
          </div>
        <div>
          <button className="border-2 border-gray-300 rounded-xl p-3 bg-gray-100 text-red-500 mr-2" onClick={()=>deleteTask(task.id)}><FaTrash/></button>
          <button 
          className="border-2 border-gray-300 rounded-xl p-3 bg-gray-100 text-blue-500"
          onClick={()=>startEditing(task)}><LuPencil/></button>
        </div>
    </div>
  )
}
