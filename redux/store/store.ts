import { configureStore } from "@reduxjs/toolkit";
import doctorReducer from "../features/doctor/doctorSlice";
import appointmentReducer from "../features/appointment/appointmentSlice";

const store = configureStore({
    reducer :{
        doctor : doctorReducer,
        appointment : appointmentReducer
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;