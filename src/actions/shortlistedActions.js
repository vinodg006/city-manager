import { SHORTLIST_CITY, REMOVE_SHORTLISTED_CITY, UPDATE_FLAG } from "./types";

export const shortlistCity = (citydetails) => (dispatch) => {
  dispatch({ type: SHORTLIST_CITY, payload: citydetails });
};

export const removeShortlistedCity = (cityName) => (dispatch) => {
  dispatch({ type: REMOVE_SHORTLISTED_CITY, payload: cityName });
  dispatch({ type: UPDATE_FLAG, payload: { cityName, status: false } });
};
