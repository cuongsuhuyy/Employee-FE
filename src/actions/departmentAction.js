import * as api from "../api/index";
import { FETCH_DEPARTMENT } from "../constants";

export const fetchDepartment = () => async(dispatch) => {
    try {
        const response = api.fetchDepartments();
        response.then((result) => {
            if(result.status == 200)
            {
                dispatch({
                    type: FETCH_DEPARTMENT,
                    payload: response.data,
                })
            }
        })
    } catch (error) {
        console.log(error.message);
    }
}