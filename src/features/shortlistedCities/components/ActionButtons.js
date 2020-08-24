import React from "react";
import { IconButton } from "@material-ui/core";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";

export default ({ rowData, removeShortlistedCity }) => {
  const handleClick = () => {
    removeShortlistedCity(rowData.City);
  };
  return (
    <IconButton aria-label="remove" onClick={handleClick}>
      <RemoveCircleIcon />
    </IconButton>
  );
};
