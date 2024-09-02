import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

interface AppointmentType {
    _id : string,
    fname : string,
    lname : string,
    email : string,
    mobile : string,
    address : string,
    city : string,
    state : string,
    pincode : string,
    status : string,
    createdAt : string,
    updatedAt : string,
    updatedOn : string,
    __v : number,
}

interface initialStateType {
    loading : boolean,
    appointments : AppointmentType[],
    error : string
}

const initialState : initialStateType = {
    loading : true,
    appointments : [],
    error : ""
}

const appointmentSlice = createSlice({
    name : 'appointment',
    initialState,
    reducers : {
        "setAppointments": (state, action)=>{
            state.loading = false
            state.appointments = action.payload;
        },
        "bookAppointment": (state, action)=>{
            state.appointments.push(action.payload);
        },
        "updateAppointment": (state, action)=>{
            state.appointments = state.appointments.filter((appointment)=> appointment._id != action.payload._id);
            const newTime = new Date(action.payload.updatedOn).getTime();
            let position = state.appointments.findIndex(app => new Date(app.updatedOn).getTime() <= newTime);
            if (position == -1) {
                position = state.appointments.length;
            }
            state.appointments.splice(position, 0, action.payload);
        }
    },
    
});

export default appointmentSlice.reducer;
export const { bookAppointment, updateAppointment, setAppointments } = appointmentSlice.actions;


