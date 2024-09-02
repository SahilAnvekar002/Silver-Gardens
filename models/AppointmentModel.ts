import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
    fname : {
        type: String,
        required : true
    },
    lname : {
        type: String,
        required : true
    },
    email : {
        type: String,
        required : true
    },
    mobile : {
        type: String,
        required : true
    },
    address : {
        type: String,
        required : true
    },
    city : {
        type: String,
        required : true
    },
    state : {
        type: String,
        required : true
    },
    pincode : {
        type: String,
        required : true
    },
    status : {
        type: String,
        default : 'Pending'
    },
    updatedOn : {
        type: Date,
        default : ''
    }
}, {
    timestamps : true
});

export default mongoose.models.appointment || mongoose.model('appointment', AppointmentSchema);