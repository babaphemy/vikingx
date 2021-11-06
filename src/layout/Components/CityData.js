import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { pink } from "@material-ui/core/colors";
import OpacityIcon from "@material-ui/icons/Opacity";
import SpeedIcon from "@material-ui/icons/Speed";
import CachedIcon from "@material-ui/icons/Cached";
import CompareIcon from "@material-ui/icons/Compare";
import ToysIcon from "@material-ui/icons/Toys";
import AvatarRaw from "@material-ui/core/Avatar";

const avatarStyles = (theme) => ({
  root: {
    background: theme.palette.primary.main,
  },
  title: {
    color: "white",
  },
});
const Avatar = withStyles(avatarStyles)(AvatarRaw);

const CityData = (props) => {
  const { temperature, wind_speed, wind_dir, pressure, humidity, feelslike } =
    props?.data?.current || {};
  return (
    <Box>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: pink[500] }}>T</Avatar>
          </ListItemAvatar>
          <ListItemText primary="Temperature" secondary={temperature} />
        </ListItem>

        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ToysIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Wind Speed" secondary={wind_speed} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <CachedIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Wind Direction" secondary={wind_dir} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <SpeedIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Pressure" secondary={pressure} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <OpacityIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Humidity" secondary={humidity} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <CompareIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Feels like" secondary={feelslike} />
        </ListItem>
      </List>
    </Box>
  );
};

export default CityData;
