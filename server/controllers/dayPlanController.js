import DayPlanModel from "../models/DayPlan.js";
import UserModel from "../models/User.js";


export const getDayPlan = async (req, res)=>{
    try{
        const { id } = req.params;
        console.log(id);
        const dayPlan = await DayPlanModel.findById(id).populate('tasksForTheDay');
        return res.status(200).send(dayPlan);

    }catch(err){
        return res.status(400).send({msg: err});
    }
}
export const addDayPlan = async (req, res)=>{
    try{
        const { user_id, name } = req.body;
        const date = new Date();
        const newDayPlan = new DayPlanModel({
            planName: name,
            dateCreated: date.toISOString().substring(0, 10),
        });
        const saved = await newDayPlan.save();

        const user = await UserModel.findById(user_id);
        user.userDayPlans.push(saved._id);
        await user.save();

        return res.status(200).send(saved);

    }catch(err){
        return res.status(400).send({msg: err});
    }
}
export const updateDayPlan = async (req, res)=>{
    try{
        const { id } = req.params;
        const { name } = req.body;
        const updateDayPlanName = await DayPlanModel.findByIdAndUpdate(id, {planName: name});
        if(!updateDayPlanName){
            res.status(200).send({msg: "plan not found"});
            return ;
        }
        return res.status(202).send({msg: "Update complete"})

    }catch(err){
        return res.status(400).send({msg: err});
    }
}
export const deleteDayPlan = async (req, res)=>{
    try{
        const { id } = req.params;
        const deleteDayPlan = await DayPlanModel.findByIdAndDelete(id);
        if(!deleteDayPlan){
            res.status(200).send({msg: "plan not found"});
            return ;
        }
        return res.status(202).send({msg: "Delete complete"})

    }catch(err){
        return res.status(400).send({msg: err});
    }
}



