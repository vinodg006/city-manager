import React, { Component } from "react";
import { connect } from "react-redux";
import ActionButtons from "./components/ActionButtons";
import { removeShortlistedCity } from "../../actions/shortlistedActions";
import Table from "../../common/components/Table";

class ShortistedCitiesContainer extends Component {
  render() {
    const { cities, removeShortlistedCity } = this.props;
    return (
      <Table
        title="Shortlisted Cities"
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
                rowData={rowData}
                removeShortlistedCity={removeShortlistedCity}
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
    cities: state.shortlistedCities.data,
  };
};

export default connect(mapStateToProps, {
  removeShortlistedCity,
})(ShortistedCitiesContainer);
