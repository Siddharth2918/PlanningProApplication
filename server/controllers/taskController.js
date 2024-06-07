import TaskModel from "../models/Task.js";
import DayPlanModel from '../models/DayPlan.js';

export const AddTask = async(req, res)=>{
    try{
        const { dayPlanId, title, description } = req.body;
        const newTask = new TaskModel({
            taskTitle: title,
            taskDescription: description,
            taskStatus: false
        })
        const saved = await newTask.save();

        const dayPlan = await DayPlanModel.findById(dayPlanId);
        dayPlan.tasksForTheDay.push(saved._id);

        await dayPlan.save();
        return res.status(201).send(saved);
    }
    catch(err){
        return res.status(400).send({msg: err});
    }
}
export const UpdateTask = async(req, res)=>{
    try{
        const { id } = req.params;
        const { title , description} = req.body;
        const updated = await TaskModel.findByIdAndUpdate(id, {taskTitle: title, taskDescription: description});
        if(!updated){
            res.status(400).send({msg: "user not found"});
            return ;
        }
        return res.status(202).send({msg: "Task Updated!"});
    }
    catch(err){
        return res.status(400).send({msg: err});
    }
}
export const SetStatus = async(req, res)=>{
    try{
        const { id } = req.params;
        console.log(id);
        await TaskModel.findByIdAndUpdate(id, {taskStatus: true});
        return res.status(202).send({msg: 'Task Completed'});
    }
    catch(err){
        return res.status(400).send({msg: err});
    }
}
export const DeleteTask = async(req, res)=>{
    try{
        const { id } = req.params;
        await TaskModel.findByIdAndDelete(id);
        return res.status(203).send({msg: "Task Deleted"});
    }
    catch(err){
        return res.status(400).send({msg: err});
    }
}