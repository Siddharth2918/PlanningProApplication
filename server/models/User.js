import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    userFirstName: String,
    userLastName: String,
    userEmailId: String,
    userDayPlans: [{ type: mongoose.Schema.Types.ObjectId, ref: 'DayPlans' }],  
});


const UserModel = mongoose.model('Users', UserSchema);

export default UserModel;