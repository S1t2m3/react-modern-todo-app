import { useState,useEffect } from 'react'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import Stats from './components/Stats'
import FilterButtons from './components/FilterButtons'
import TaskList from './components/TaskList'

function App() {
  const [task, setTask]=useState("");
  const [filter, setFilter]=useState("all");
  const [editingId, setEditingId]=useState(null);
  const [editText, setEditText]=useState("");
  const [tasks, setTasks]=useState(()=>{//fetching saved tasks from LocalSto..
    const savedTasks=localStorage.getItem("tasks");
    if (savedTasks){
      return JSON.parse(savedTasks);
    }
      return [];
  });
//everychanges in tasks updates the local storage  
useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);  

//adds object of task that includes id,text,completed key and createdAt time
  const addTask=()=>{
    if(!task.trim()) return;
    const newTask={
    id: Date.now(),
    text: task,
    completed: false,
    createdAt: new Date().toISOString(),
    };
   setTasks([...tasks, newTask]); //adds the new task 
   setTask("");
  };
//delete task based on id
  function deleteTask(id){
    const updatedTasks=tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  }
//toggle complete by checkbox
  function toggleComplete(id){
    const updatedTasks=tasks.map((task)=>(
    task.id===id?{...task,completed:!task.completed}:task
    ));
    setTasks(updatedTasks);
  }

//filters the task based on filter state 
  const filteredTasks=tasks.filter((task)=>{
    switch(filter){
      case "active":
        return !task.completed;
      case "completed":
        return task.completed;
      default:
        return task;    
    }
  });
//startEditing Task
function startEditing(task) {
  setEditingId(task.id);
  setEditText(task.text);
}
//save task after editing 
function saveTask() {
  if(!editText.trim()) return;
  const updatedTasks = tasks.map(task =>
    task.id === editingId
      ? { ...task, text: editText }
      : task
  );

  setTasks(updatedTasks);
  setEditingId(null);
}

//clear completed tasks
function clearCompleted() {
  const updatedTasks = tasks.filter(task => !task.completed);
  setTasks(updatedTasks);
}

  return(
    <>
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400">
      <div className='w-full max-w-2xl mx-4 bg-white flex items-center justify-center flex-col gap-5 rounded-xl my-5 p-5 border border-white/50 bg-white/40 backdrop-blur-md shadow-xl'>
        <Header/>
        <TaskForm task={task} setTask={setTask} addTask={addTask}/>
        <Stats tasks={tasks}/>
        <FilterButtons filter={filter} setFilter={setFilter} clearCompleted={clearCompleted}/>
        {
          filteredTasks.map((task)=>(<TaskList key={task.id} task={task} deleteTask={deleteTask} toggleComplete={toggleComplete} startEditing={startEditing} editingId={editingId} editText={editText} setEditText={setEditText} saveTask={saveTask} setEditingId={setEditingId}/>))
        }
        
      </div>
    </div>
    
    </>
  )
}
export default App;