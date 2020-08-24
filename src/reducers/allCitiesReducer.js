import {
  LOAD_ALL_CITIES,
  ADD_CITY,
  DELETE_CITY,
  UPDATE_FLAG,
} from "../actions/types";
const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  var data;
  switch (action.type) {
    case LOAD_ALL_CITIES:
      data = [...action.payload.data];
      data.map((rowData) => (rowData.sl = false));
      return {
        ...state,
        data,
      };
    case ADD_CITY:
      data = [...state.data];
      data.push(action.payload);
      return {
        ...state,
        data,
      };
    case DELETE_CITY:
      data = [...state.data];
      data = data.filter((rowData) => rowData.City !== action.payload);
      return {
        ...state,
        data,
      };
    case UPDATE_FLAG:
      const { cityName, status } = action.payload;
      var oldData = [...state.data];
      oldData[
        oldData.findIndex((rowData) => rowData.City === cityName)
      ].sl = status;
      return {
        ...state,
        data: oldData,
      };

    default:
      return state;
  }
};
