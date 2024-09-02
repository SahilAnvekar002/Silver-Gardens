import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    address : {
        type: String,
        required : true
    },
    mobile : {
        type: String,
        required : true
    },
    qualification : {
        type: String,
        required : true
    }
}, {
    timestamps : true
});

export default mongoose.models.doctor || mongoose.model('doctor', DoctorSchema);