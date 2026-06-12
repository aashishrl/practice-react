import {useState} from 'react';
import { FaTrashAlt } from "react-icons/fa";

const Dashboard = () => {
    // const [task, setTask] = useState("")
    // let data = {
    //     id: Date.now(),
    //     name: task,
    //     status: false
    // }
    
    const [task, setTask] = useState("")
    const [taskList, setTaskList] = useState([])
    const [taskDone, setTaskDone] = useState(false)
    
    const handleTask = () =>{
        const newTask = {
            id: Date.now(),
            status: false,
            name: task
        }
        
        setTaskList(prev=>(
            [newTask,...prev]
        ))
        setTask("")
    }

    const handleTaskChange = (e) => {
        setTask({
            id: Date.now(),
            name: e.target.value
        })
    }

    const handleTaskDelete = (e) => {
        
    }

    const handleKeyDown = (e) => {
        if(e.key==="enter"){
            handleTask()
        }
    }

    return (
        <>
            <div className="flex items-center gap-3">
                <input value={task.name} onChange={handleTaskChange} type="text" placeholder="Type Text" className="p-1 px-2 h-8 rounded-sm"/>
                <button onKeyDown={handleKeyDown} onClick={handleTask} className="h-8 p-1 px-4 text-white text-sm bg-emerald-800 rounded-sm border-0 cursor-pointer">
                    Add Task
                </button>
            </div>
            <div className="w-3xl mt-4 p-3 py-1.5 border border-emerald-400">
                <h1 className='text-gray-400 text-sm'>Task List</h1>
                {taskList.length===0?(
                    <p className='my-4'>No Task At the Moment</p>
                ):(
                    taskList.map((i, index)=>(
                        <div key={index} className='flex justify-between gap-2'>
                            <div className='flex gap-2'>
                                <input required={taskDone} onChange={()=>setTaskDone(prev=>!prev)} type="checkbox" /> 
                                <p className={`${taskDone?"line-through":""}`}>{i.name}</p>
                            </div>
                            <button onClick={handleTaskDelete} className='border-0!' title="Delete Task">
                                <FaTrashAlt/>
                            </button>
                        </div>
                    ))
                )}
            </div>
            <div className='mt-4 px-4 py-2 bg-amber-200'>
                <p>Total Tasks: <span className='font-bold'>{taskList.length}</span></p>
            </div>
        </>
    )
}

export default Dashboard;