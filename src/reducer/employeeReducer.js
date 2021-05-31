import { DELETE_EMPLOYEE, FETCH_EMPLOYEE } from "../constants";

let initialState = {
    Employee: [],

}

export const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EMPLOYEE:
            // console.log(action.payload);
            const data = {Employee: action.payload}
            console.log("state: ", state);
            console.log("data: ", data);
            return {...state, Employee: action.payload};
        
        case DELETE_EMPLOYEE:
            let items = state.Employee.filter((emp) => emp.EmployeeID !== action.payload);
            console.log("items: ", items);
            console.log("DCM");
            return {
                ...state, Employee: items
            }

        default:
            return state;
    }
}