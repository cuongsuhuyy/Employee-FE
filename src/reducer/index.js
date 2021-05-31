import { combineReducers } from "redux";
import { helloReducer } from "./helloReducer";
import { employeeReducer } from "./employeeReducer";

export default combineReducers ({
    helloReducer,
    employeeReducer,
});