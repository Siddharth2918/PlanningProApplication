import mongoose from 'mongoose';



const DayPlanSchema = new mongoose.Schema({
    planName: String,
    dateCreated: String,
    tasksForTheDay: [{type: mongoose.Schema.Types.ObjectId, ref: 'Tasks'}],
})


const DayPlanModel = mongoose.model("DayPlans", DayPlanSchema);

export default DayPlanModel;