import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/UserRoutes.js';
import taskRoutes from './routes/TaskRoutes.js';
import dayPlanRoutes from './routes/DayPlanRoutes.js';
import cors from 'cors';

const URI=`mongodb+srv://siddharth0295:NuTIkiYo4sfxDcUT@cluster0.efzfuyl.mongodb.net/PlanningPro`
mongoose.connect(URI);


const app=express();
const PORT=3000;
app.use(express.json());
app.use(cors());
app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);
app.use('/dayPlans', dayPlanRoutes);

app.get('/', (req, res)=>{
    res.send('hello');
})

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})
