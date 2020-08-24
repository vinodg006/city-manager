import React, { Fragment } from "react";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";

export default ({ rowData, deleteCity, shortlistCity, updateFlag, cities }) => {
  const shortlisted =
    cities[cities.findIndex((data) => rowData.City === data.City)] &&
    cities[cities.findIndex((data) => rowData.City === data.City)].sl;

  const handleShortList = () => {
    shortlistCity(rowData);
    updateFlag(rowData.City, true);
  };

  const handleDelete = () => {
    deleteCity(rowData.City);
  };

  return (
    <Fragment>
      <IconButton
        aria-label="shortlist"
        disabled={shortlisted}
        onClick={handleShortList}
      >
        {shortlisted ? <PlaylistAddCheckIcon /> : <PlaylistAddIcon />}
      </IconButton>
      <IconButton aria-label="delete" onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </Fragment>
  );
};
