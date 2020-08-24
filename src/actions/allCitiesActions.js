import {
  LOAD_ALL_CITIES,
  DELETE_CITY,
  REMOVE_SHORTLISTED_CITY,
  UPDATE_FLAG,
  ADD_CITY,
} from "./types";
import axios from "axios";
import appConstants from "../common/constants/appConstants";

export const loadAllCities = () => (dispatch) => {
  axios
    .get(appConstants.DATA_URL)
    .then((res) => dispatch({ type: LOAD_ALL_CITIES, payload: res.data }));
};

export const addCity = (cityDetails) => (dispatch) => {
  dispatch({
    type: ADD_CITY,
    payload: Object.assign(cityDetails, { sl: false }),
  });
};

export const deleteCity = (cityName) => (dispatch) => {
  dispatch({ type: DELETE_CITY, payload: cityName });
  dispatch({ type: REMOVE_SHORTLISTED_CITY, payload: cityName });
};

export const updateFlag = (cityName, status) => (dispatch) => {
  dispatch({ type: UPDATE_FLAG, payload: { cityName, status } });
};
