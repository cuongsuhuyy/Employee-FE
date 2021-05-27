import * as api from "../api/index";
import { GET_TEXT, GET_TEXT_02 } from "../constants";

export const getText = () => async(dispatch) => {
    try {
        dispatch({
            type: GET_TEXT,
        });
    } catch (error) {
        console.log(error.message);
    }
}

export const getText02 = () => async(dispatch) => {
    try {
        dispatch({
            type: GET_TEXT_02
        })
    } catch (error) {
        console.log(error.message);
    }
}