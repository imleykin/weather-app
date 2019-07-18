const initialState = {
  city: '',
  isLoading: false,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_WEATHER_START':
      return {
        ...state,
        isLoading: true,
      };
    case 'REQUEST_WEATHER_SUCCESS':
      const { city } = action.payload;
      return {
        ...state,
        isLoading: false,
        city,
      };
    default:
      return state;
  }
};

export default weatherReducer;
