import React from "react";
import MaterialTable from "material-table";

export default ({ title, columns, data }) => {
  return (
    <MaterialTable
      title={title}
      columns={columns}
      data={data}
      options={{
        filtering: true,
        headerStyle: {
          backgroundColor: "#01579b",
          color: "#FFF",
        },
        rowStyle: {
          backgroundColor: "#EEE",
        },
      }}
      style={{
        position: "relative",
        width: "80%",
        margin: "30px auto",
        padding: "15px",
        borderRadius: "15px",
        opacity: 0.9,
      }}
    />
  );
};
