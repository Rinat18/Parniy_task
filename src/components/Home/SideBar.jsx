import React from "react";
import "./Home.css";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";

const SideBar = () => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Paper
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "50px",
        }}
      >
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Category</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel value="All" control={<Radio />} label={"All"} />
            <FormControlLabel
              value="mishki"
              label="igrushki"
              control={<Radio />}
            />
          </RadioGroup>
        </FormControl>
      </Paper>
    </div>
  );
};

export default SideBar;
