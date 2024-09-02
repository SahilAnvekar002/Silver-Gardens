import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

interface DoctorType {
    _id : string,
    name : string,
    address : string,
    mobile : string,
    qualification : string,
    createdAt : string,
    updatedAt : string,
    __v : number,
}

interface initialStateType {
    loading : boolean,
    doctors : DoctorType[],
    error : string
}

const initialState : initialStateType = {
    loading : true,
    doctors : [],
    error : ""
}

/*export const fetchDoctors = createAsyncThunk('doctor/fetchDoctors', async()=>{
    const res = await fetch('http://localhost:3000/api/fetch-doctors', {cache : 'no-store'});
    const json = await res.json();
    const doctors = json.doctors;
    return doctors;
});*/

const doctorSlice = createSlice({
    name : 'doctor',
    initialState,
    reducers : {
        "setDoctors": (state, action)=>{
            state.loading = false
            state.doctors = action.payload;
        },
        "addDoctor": (state, action)=>{
            state.doctors.push(action.payload);
        },
        "deleteDoctor": (state, action)=>{
            state.doctors = state.doctors.filter((doctor)=> doctor._id != action.payload);
        },
        "updateDoctor": (state, action)=>{
            state.doctors = state.doctors.map((doctor)=> doctor._id == action.payload._id ? action.payload : doctor);
        }
    },
    /*extraReducers : (builder)=>{
        builder.addCase(fetchDoctors.pending, (state)=>{
            state.loading = true
        }),
        builder.addCase(fetchDoctors.fulfilled, (state, action)=>{
            state.loading = false,
            state.doctors = action.payload,
            state.error = ""
        }),
        builder.addCase(fetchDoctors.rejected, (state)=>{
            state.loading = false,
            state.doctors = [],
            state.error = "Internal server error"
        })
    }*/
});

export default doctorSlice.reducer;
export const { addDoctor, deleteDoctor, updateDoctor, setDoctors } = doctorSlice.actions;


