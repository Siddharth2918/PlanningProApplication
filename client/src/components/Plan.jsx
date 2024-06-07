import { useEffect, useState } from "react";
import axios from 'axios';
import { PiPlus } from "react-icons/pi";
import { IoCloseOutline } from "react-icons/io5";
const Plan = ({element})=>{
    const id = element._id;
    const [tasks, setTasks] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:3000/dayPlans/getDayPlan/${id}`)
        .then((res)=>{
            setTasks(res.data.tasksForTheDay);
        })
        .catch((err)=>{
            console.log(err);
        })
    })
    return (
        <div className="col-span-6 md:col-span-3 lg:col-span-2 border-2 border-black rounded-md m-4 p-4 h-[300px] overflow-y-scroll">
            <div>{element.planName}</div>
            <Tasks tasks={tasks}/>
            <AddTask id={element._id}/>
        </div>
    )
}

const Tasks = ({tasks})=>{
    return (tasks.map(element=> <Task key={element._id} element={element}/>));
}

const Task = ({element})=>{
    return(
        <div className="m-2">
            <h3>{element.taskTitle}</h3>
            <p>{element.taskDescription}</p>
            <p>Status: {element.taskStatus?"Complete":"Incomplete"}</p>
        </div>
    )
}


const AddTask = ({id})=>{
    const [openForm, setOpenForm] = useState(false); 
    return !openForm?<AddTaskButton setOpenForm={setOpenForm}/>:<AddTaskForm setOpenForm={setOpenForm} id={id}/>
}
const AddTaskForm = ({setOpenForm, id})=>{
    const [TaskTitle, setTaskTitle] = useState("");
    const [TaskDescription, setTaskDescription] = useState("");

    const createTask = ()=>{
        axios.post(`http://localhost:3000/tasks/addTask`, {
            dayPlanId: id,
            title: TaskTitle,
            description: TaskDescription,
        })
        .then((res)=>{
            return res;
        })
    }
    return (
        <div className="col-span-3 border-2 border-black min-h-[50px] rounded-md m-4 flex justify-center p-3">
            <div className="my-auto">
                <label htmlFor="TaskTitle">Enter the title: </label>
                <br />
                <input type="text" name="TaskTitle" id="TaskTitle" className="border-1 bg-gray-200" onChange={(e)=>{setTaskTitle(e.target.value)}}/>
                <br/>
                <label htmlFor="TaskName">Enter the description: </label>
                <br />
                <input type="text" name="TaskName" id="TaskName" className="border-1 bg-gray-200" onChange={(e)=>{setTaskDescription(e.target.value)}}/>
                <br />
                <div className="flex flex-row justify-between">
                    <button onClick={()=>{createTask()}}>Create Task</button>
                    <button className="" onClick={()=>(setOpenForm(false))}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

const AddTaskButton = ({setOpenForm})=>{
    return (
        <div className="col-span-3 p-auto border-4 border-dashed border-gray-200 h-[50px] rounded-md m-4 flex justify-center">
            <div className="my-auto" onClick={()=>{setOpenForm(true)}}>
                <PiPlus size={20} className="mx-auto"/>
                <p>Add a Task</p>
            </div>
        </div>
    )
}
export default Plan;