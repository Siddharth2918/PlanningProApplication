import express from 'express';
import { getDayPlan, addDayPlan, updateDayPlan, deleteDayPlan } from '../controllers/dayPlanController.js';
const dayPlanRoutes = express.Router();


dayPlanRoutes.get('/getDayPlan/:id', getDayPlan);
dayPlanRoutes.post('/addDayPlan', addDayPlan);
dayPlanRoutes.put('/updateDayPlanName/:id', updateDayPlan);
dayPlanRoutes.delete('/deleteDayPlan/:id', deleteDayPlan);

export default dayPlanRoutes;