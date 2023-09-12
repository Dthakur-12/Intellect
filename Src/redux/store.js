import { configureStore } from "@reduxjs/toolkit";
import rootreducer from "./reducers";
export default configureStore({
   reducer:rootreducer
})