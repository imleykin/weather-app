const initialState = {
  city: '',
  isLoading: false,
  error: '',
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_WEATHER_START':
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case 'REQUEST_WEATHER_SUCCESS':
      const { city } = action.payload;
      return {
        ...state,
        isLoading: false,
        error: '',
        city,
      };
    case 'REQUEST_WEATHER_FAIL':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;
