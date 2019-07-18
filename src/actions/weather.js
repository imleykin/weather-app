import axios from 'axios';

// const API_KEY = '15e39f24e05f6ea0af88f89dc11e5295';
const API_KEY = 'c737b5e358ad5a3224496207d8cf23c9';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

export const requestWeather = requestedCity => async dispatch => {
  dispatch(requestWeatherStart());

  try {
    const response = await axios({
      url: `${ROOT_URL}&q=${requestedCity}`,
      method: 'get',
    });

    const { name: city } = response.data;

    dispatch(
      requestWeatherSuccess({
        city,
      })
    );
  } catch (e) {
    dispatch(requestWeatherFail("City wasn't found or other error occurred."));
    console.log(e);
  }
};

export const requestWeatherSuccess = data => ({
  type: 'REQUEST_WEATHER_SUCCESS',
  payload: data,
});

export const requestWeatherFail = message => ({
  type: 'REQUEST_WEATHER_FAIL',
  payload: message,
});

export const requestWeatherStart = () => ({
  type: 'REQUEST_WEATHER_START',
  payload: '',
});
