import * as api from "../api/index";
import { DELETE_EMPLOYEE, FETCH_EMPLOYEE } from "../constants";

export const fetchEmployee = () => async(dispatch) => {
    try {
        const response = api.fetchEmployee();
        response.then((result) => {
            console.log("data result: ", result);
            if(result.status == 200)
            {
                dispatch({
                    type: FETCH_EMPLOYEE,
                    payload: result.data,
                });
                console.log("data payload: ", result.data);
            }
        });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteEmployee = (id) => async(dispatch) => {
    try {
        const response = api.deleteEmployee(id);
        console.log("api delete: ", api.deleteEmployee(id));
        response.then((result) => {
            if(result.status === 200)
            {
                dispatch({
                    type: DELETE_EMPLOYEE,
                    payload: id,
                    
                });
                console.log("response data: ", response.data);
                console.log("response: ", response);
                console.log("id: ", id);
            }
        })
    } catch (error) {
        console.log(error.message);
    }
}

