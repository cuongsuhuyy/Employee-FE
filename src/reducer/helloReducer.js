import { GET_TEXT } from "../constants";

let initialState = {
  hello: "hello",
  hello2:"hello2"
};

export const helloReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEXT:
      return { ...state, hello: "cuong" };
    default:
      return state;
  }
};
