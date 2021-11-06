import { Box, Card, CardContent, Typography } from "@material-ui/core";
import CardHeaderRaw from "@material-ui/core/CardHeader";

import { makeStyles, withStyles } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import { getForecast } from "../../store/api/Weather";
import CitySelect from "./CitySelect";
import CityData from "./CityData";
const cardStyles = (theme) => ({
  root: {
    background: theme.palette.primary.main,
  },
  title: {
    color: "white",
  },
});
const CardHeader = withStyles(cardStyles)(CardHeaderRaw);

const useStyles = makeStyles(() => ({
  card: {
    margin: "5% 25%",
  },
}));

const Home = () => {
  const classes = useStyles();
  const [city, setCity] = useState("Houston");
  const [data, setData] = useState({});
  const _change = (e) => {
    setCity(e.target.value);
  };
  useEffect(() => {
    async function getData() {
      const d = await getForecast(city);
      d && setData(d);
    }
    getData();
  }, [city]);
  const { observation_time, weather_icons, weather_descriptions } =
    data?.current || {};
  return (
    <Card className={classes.card}>
      <CardHeader title={`The Weather in ${city} as at ${observation_time}`} />
      <CardContent>
        <CitySelect city={city} setCity={_change} />
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <CityData data={data} />
          <Box>
            {weather_icons?.map((item) => (
              <img
                width={64}
                height={64}
                key={item}
                src={`${item}`}
                srcSet={`${item}`}
                alt="Weather Icon"
                loading="lazy"
              />
            ))}
            {weather_descriptions?.map((w) => (
              <Typography key={w}>{w}</Typography>
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Home;
