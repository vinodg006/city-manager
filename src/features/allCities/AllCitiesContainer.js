import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import ActionButtons from "./components/ActionButtons";
import {
  addCity,
  deleteCity,
  updateFlag,
} from "../../actions/allCitiesActions";
import { shortlistCity } from "../../actions/shortlistedActions";
import AddCityModal from "./components/AddCityModal";
import { getDropDownValues } from "../../common/utils/remap";
import Table from "../../common/components/Table";

class AllCitiesContainer extends Component {
  render() {
    const { cities, addCity } = this.props;
    return (
      <Table
        title={
          <Fragment>
            {"All Cities"}
            <AddCityModal
              states={getDropDownValues(cities, "State")}
              districts={getDropDownValues(cities, "District")}
              addCity={addCity}
            />
          </Fragment>
        }
        columns={[
          { title: "City", field: "City" },
          { title: "State", field: "State" },
          { title: "District", field: "District" },
          {
            title: "Action",
            field: "Action",
            filtering: false,
            render: (rowData) => (
              <ActionButtons
                deleteCity={this.props.deleteCity}
                rowData={rowData}
                shortlistCity={this.props.shortlistCity}
                updateFlag={this.props.updateFlag}
                cities={this.props.cities}
              />
            ),
          },
        ]}
        data={cities}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cities: state.allCities.data,
  };
};

export default connect(mapStateToProps, {
  addCity,
  deleteCity,
  shortlistCity,
  updateFlag,
})(AllCitiesContainer);
