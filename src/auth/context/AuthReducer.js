import { type } from "../types/types";

export const authReducer = (state = {}, action) => {

  switch (action.type) {
    case type.login:
      return {
        ...state,
        logged: true,
        user: action.payload
      };

    case type.logout:
      return {
        logged: false
      };
  
    default:
     return state;
  }
  
}