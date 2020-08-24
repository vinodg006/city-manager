import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "block",
    marginTop: "25px",
    maxWidth: 160,
  },
});

export default ({ states, districts, addCity }) => {
  const classes = useStyles();
  const [modal, openModal] = useState(false);
  const [cityName, setCityName] = useState("");
  const [state, setState] = useState(states[0]);
  const [district, setDistrict] = useState(districts[0]);

  const resetForm = () => {
    setCityName("");
    setState(states[0]);
    setDistrict(districts[0]);
  };

  const handleCancel = () => {
    openModal(false);
    resetForm();
  };

  const handleSubmit = () => {
    addCity({ City: cityName, State: state, District: district });
    openModal(false);
    resetForm();
  };

  return (
    <div style={{ display: "inline", margin: " 0 40px" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => openModal(true)}
      >
        Add City
      </Button>
      <Dialog
        open={modal}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Add City</DialogTitle>
        <DialogContent>
          <form noValidate>
            <TextField
              id="city"
              label="City"
              type="text"
              onChange={(e) => setCityName(e.target.value)}
              value={cityName}
            />
            <FormControl
              classes={{
                root: classes.root,
              }}
            >
              <InputLabel
                shrink
                id="demo-simple-select-placeholder-label-label"
              >
                State
              </InputLabel>
              <Select
                labelId="demo-simple-select-placeholder-label-label"
                id="demo-simple-select-placeholder-label"
                value={state}
                onChange={(e) => setState(e.target.value)}
                displayEmpty
              >
                {states &&
                  states.map((name, index) => (
                    <MenuItem value={name} key={index}>
                      {name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
            <FormControl
              classes={{
                root: classes.root,
              }}
            >
              <InputLabel
                shrink
                id="demo-simple-select-placeholder-label-label"
              >
                District
              </InputLabel>
              <Select
                labelId="demo-simple-select-placeholder-label-label"
                id="demo-simple-select-placeholder-label"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                displayEmpty
              >
                {districts &&
                  districts.map((name, index) => (
                    <MenuItem value={name} key={index}>
                      {name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            color="primary"
            disabled={cityName.replace(/\s/g, "") === ""}
          >
            Add City
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
