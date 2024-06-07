import { useState } from "react";
import { PiPlus } from "react-icons/pi";
import { IoCloseOutline } from "react-icons/io5";
import createPlan from "../../api/createDayPlan";

const Addplan = ()=>{
    const [formOpen , setFormOpen] = useState(false);
    return(
        !formOpen?<AddPlanButton setFormOpen={setFormOpen}/>:<AddPlanForm setFormOpen={setFormOpen}/>
    )
}

const AddPlanForm = ({setFormOpen})=>{
    const [planName, setPlanName] = useState("");
    return (
        <div className="col-span-6 md:col-span-3 lg:col-span-2 border-2 border-black h-[300px] rounded-md m-4 flex justify-center">
            <IoCloseOutline className="" onClick={()=>(setFormOpen(false))}/>
            <div className="my-auto">
                <label htmlFor="planName">Enter the name of your plan: </label>
                <br />
                <input type="text" name="planName" id="planName" className="border-1 bg-gray-200" onChange={(e)=>{setPlanName(e.target.value)}}/>
                <br />
                <button onClick={()=>{createPlan(planName)}}>Create Plan</button>
            </div>
        </div>
    )
}

const AddPlanButton = ({setFormOpen})=>{
    return (
        <div className="col-span-6 md:col-span-3 lg:col-span-2 p-auto border-4 border-dashed border-gray-500 h-[300px] rounded-md m-4 flex justify-center">
            <div className="my-auto" onClick={()=>{setFormOpen(true)}}>
                <PiPlus size={60} className="mx-auto"/>
                <p>Add a plan</p>
            </div>
        </div>
    )
}

export default Addplan;