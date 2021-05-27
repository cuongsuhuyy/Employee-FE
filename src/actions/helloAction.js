import * as api from "../api/index";
import { GET_TEXT } from "../constants";

export const getText = () => async(dispatch) => {
    try {
        dispatch({
            type: GET_TEXT,
        });
    } catch (error) {
        console.log(error.message);
    }
}