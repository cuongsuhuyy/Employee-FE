import { GET_TEXT, GET_TEXT_02 } from "../constants";

let initialState = {
  hello: "hello",
  hello2:"hello2"
};

export const helloReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEXT:
      return { ...state, hello: "cuong" };
    case GET_TEXT_02:
      return { ...state, hello2: "Su Huy Cuong" };
    default:
      return state;
  }
};

