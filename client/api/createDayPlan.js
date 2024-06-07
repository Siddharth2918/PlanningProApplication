import axios from 'axios';

const createPlan = (planName)=>{
    axios.post('http://localhost:3000/dayPlans/addDayPlan', {
            user_id: "66111ffedb6218f1465e9baa",
            name: planName,
        }
    ).then((res)=>{
        return res;
    }).catch((err)=>{
        console.log(err);
    })
}

export default createPlan;