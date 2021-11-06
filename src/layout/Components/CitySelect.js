import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { texasCities } from "../../util/texas";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "100%",
    backgroundColor: "#ffffff",
    padding: 5,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const CitySelect = (props) => {
  const classes = useStyles();
  const { city, setCity } = props;
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label" style={{ padding: 5 }}>
        Select a city
      </InputLabel>
      <Select
        labelId="city"
        id="demo-simple-select"
        value={city}
        onChange={setCity}
        fullWidth
      >
        {texasCities?.map((t) => (
          <MenuItem key={t.code} value={t?.name}>
            {t?.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CitySelect;
