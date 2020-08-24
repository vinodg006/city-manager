import { SHORTLIST_CITY, REMOVE_SHORTLISTED_CITY } from "../actions/types";
const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  var data;
  switch (action.type) {
    case SHORTLIST_CITY:
      data = [...state.data];
      data.push(action.payload);
      return {
        ...state,
        data,
      };

    case REMOVE_SHORTLISTED_CITY:
      data = [...state.data];
      data = data.filter((rowData) => rowData.City !== action.payload);
      return {
        ...state,
        data,
      };

    default:
      return state;
  }
};
