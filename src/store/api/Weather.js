export const getForecast = async (city) => {
  // https://api.weather.gov/points/{latitude},{longitude}
  const result = await fetch(
    `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_APIKEY}&query=${city}`
  );
  if (!result.ok) {
    const msg = `Error occured: ${result.status} - ${result.statusText}`;
    throw new Error(msg);
  }
  const data = result.json();
  return data;
};
