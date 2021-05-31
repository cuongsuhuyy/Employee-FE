import Switch from "react-bootstrap/esm/Switch"
import { FETCH_DEPARTMENT } from "../constants";

let initialState = {
    DepartmentID: 0,
    DepartmentName: "",
}

export const departmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DEPARTMENT:
            const { DepartmentID, DepartmentName } = action.payload;
            return { ...state, DepartmentID, DepartmentName };
    
        default:
            return state;
    }
}