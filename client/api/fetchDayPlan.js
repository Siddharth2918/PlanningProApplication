import axios from 'axios';

const fetchPlan = (id, setTasks)=>{
    axios.get(`http://localhost:3000/dayPlans/getDayPlan/${id}`)
    .then((res)=>{
        // console.log(res.data.tasksForTheDay);
        setTasks(res.data.tasksForTheDay);
    })
    .catch((err)=>{
        console.log(err);
    })
}


export default fetchPlan;