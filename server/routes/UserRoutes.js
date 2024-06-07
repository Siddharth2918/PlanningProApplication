import express from "express";
import { GetUser, AddUser, UpdateUser, DeleteUser } from "../controllers/userControllers.js";

const userRoutes = new express.Router();

userRoutes.get('/getUser/:id', GetUser);
userRoutes.post('/addUser', AddUser);
userRoutes.put('/updateUser/:id', UpdateUser);
userRoutes.delete('/deleteUser/:id', DeleteUser);

export default userRoutes;