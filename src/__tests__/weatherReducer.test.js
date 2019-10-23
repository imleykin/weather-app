import weatherReducer, { initialState } from '../reducers/weather';

describe('weather reducer', () => {
  it('REQUEST_WEATHER_START after situation without errorMsg', () => {
    const action = {
      type: 'REQUEST_WEATHER_START',
    }

    expect(weatherReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: true,
      error: '',
    })
  });

  it('REQUEST_WEATHER_START after error', () => {
    const initialStateWithError = {
      data: {},
      isLoading: false,
      error: 'Unknown error',
    }

    const action = {
      type: 'REQUEST_WEATHER_START',
    }

    expect(weatherReducer(initialStateWithError, action)).toEqual({
      ...initialStateWithError,
      isLoading: true,
      error: '',
    })
  });

  it('REQUEST_WEATHER_SUCCESS', () => {
    const initialState = {
      data: null,
      isLoading: true,
      error: '',
    }

    const action = {
      type: 'REQUEST_WEATHER_SUCCESS',
      payload: [1, 2, 3],
    }

    expect(weatherReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      data: action.payload,
    })
  })
});
