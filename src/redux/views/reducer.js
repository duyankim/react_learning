import { ADD_VIEW } from "./type";

const initialView = {
  count: 0
};

const viewsReducer = (state = initialView, action) => {
  switch (action.type) {
    case ADD_VIEW:
      return {
        ...state,
        count: state.count + action.payload
      };
    default:
      return state;
  }
};

export default viewsReducer;
