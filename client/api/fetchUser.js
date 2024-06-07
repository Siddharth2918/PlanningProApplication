import axios from 'axios';


const fetchUser = (id, setDayPlans)=>{
    axios.get(`http://localhost:3000/users/getUser/${id}`)
    .then((res)=>{
        console.log(res.data.userDayPlans)
        // setDayPlans(res.data.userDayPlans);
    })
    .catch((err)=>{
        console.log(err);
    })
}

export default fetchUser;