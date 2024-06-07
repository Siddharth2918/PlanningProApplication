import UserModel from "../models/User.js";

export const GetUser = async (req, res)=>{
    try{
        const { id } = req.params;
        const userData = await UserModel.findById(id).populate('userDayPlans');
        if(!userData){
            res.status(404).send({msg: "User not found."});
            return;
        }
        return res.status(200).send(userData);
    }
    catch(err){
        res.status(400).send({msg: err});
    }
}
export const AddUser = async (req, res) => {
    try {
        const { firstName, lastName, emailId } = req.body;
        const exists = await UserModel.findOne({userEmailId: emailId});
        if(exists){
            res.status(200).send({msg: "user exists"});
            return;
        }
        const newUser = new UserModel({
            userFirstName: firstName,
            userLastName: lastName,
            userEmailId: emailId,
        })
        const saved = await newUser.save();
        return res.status(200).send(saved);
    }
    catch(err){
        return res.status(300).send(err);
    }
};

export const UpdateUser = async (req, res)=>{
    try{
        const { id } = req.params;
        const { firstName, lastName, emailId } = req.body;
        console.log(id);
        console.log(req.body);
        await UserModel.findByIdAndUpdate(id, {
            userFirstName: firstName,
            userLastName: lastName,
            userEmailId: emailId,
        })
        return res.status(201).send({msg: "User data updated."});
    }
    catch(err){
        return res.status(300).send({msg: err});
    }
}

export const DeleteUser = async(req, res)=>{
    try{
        const { id } = req.params;
        await UserModel.findByIdAndDelete(id);
        return res.status(203).send({msg: "User deleted sucessfully"})
    }
    catch(err){
        return res.status(404).send({msg: err});
    }
}
