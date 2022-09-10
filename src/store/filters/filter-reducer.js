import { ADD_FILTER, REMOVE_FILTER, CLEAR_FILTER } from "./filter-actions";

export const filterReducer = (state = [], action) => {
  switch (action.type) {
    case CLEAR_FILTER: {
      return [];
    }
    case REMOVE_FILTER: {
      return state.filter((item) => item != action.filter);
    }
    case ADD_FILTER: {
      if (!state.includes(action.filter)) {
        return [...state, action.filter];
      }
      return state;
    }
    default: {
      return state;
    }
  }
};
