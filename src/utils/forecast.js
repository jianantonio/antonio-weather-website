const request = require("request");

const forecast = (lat, long, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=329d91ec1cf6d9c71b1841c045fde424&query=" +
    lat +
    "," +
    long;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather services.", undefined);
    } else if (body.error) {
      callback("Unable to find location.", undefined);
    } else {
      callback(
        undefined,
        `Captured at ${body.current.observation_time}. The weather is ${body.current.weather_descriptions[0]}. With a temperature of ${body.current.temperature} degrees out but feels like ${body.current.feelslike} degrees out.`
      );
    }
  });
};

module.exports = forecast;
