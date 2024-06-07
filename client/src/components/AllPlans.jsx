import { useState, useEffect } from "react";
import Addplan from "./AddPlan";
import Plan from "./Plan";
import axios from 'axios';


const AllPlans = ()=>{
    const id = "66111ffedb6218f1465e9baa";
    const [dayPlans, setDayPlans] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:3000/users/getUser/${id}`)
        .then((res)=>{
            setDayPlans(res.data.userDayPlans);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, []);
    return (
        <div className="grid grid-cols-6 p-6 border-black border-2 flex-col m-4 rounded-md">
           <Plans dayPlans={dayPlans}/>
           <Addplan/>
        </div>
    )
}
const Plans = ({dayPlans})=>{
    return dayPlans.map(element => <Plan key={element._id} element={element}/>);
}

export default AllPlans;