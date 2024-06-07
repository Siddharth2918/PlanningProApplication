import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    taskTitle: String, 
    taskDescription: String,
    taskStatus: Boolean,
})
// DayPlanSchema.post('remove', async function(doc) {
//     const User = mongoose.model('User');

//     // Remove the deleted dayPlan from all users' dayPlans array
//     await User.updateMany({ dayPlans: doc._id }, { $pull: { dayPlans: doc._id } });
// });
// TaskSchema.post('remove', async function(doc){
//     const DayPlan = mongoose.model('DayPlans');

//     await DayPlan.updateMany({tasksForTheDay: doc._id}, {$pull: {tasksForTheDay: doc._id}});
// })

const TaskModel = mongoose.model('Tasks', TaskSchema);

export default TaskModel;