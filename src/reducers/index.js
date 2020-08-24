import { combineReducers } from "redux";
import allCities from "./allCitiesReducer";
import shortlistedCities from "./shortlistedCitiesReducer";

export default combineReducers({
  allCities,
  shortlistedCities,
});
