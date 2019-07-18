import { map, uniqBy } from 'lodash';
import axios from 'axios';

export const updateSearchQuery = query => ({
  type: 'SEARCH_QUERY_UPDATE',
  payload: query,
});

export const clearSuggestions = () => ({
  type: 'SUGGESTIONS_CLEAR',
  payload: [],
});

export const updateSuggestions = suggestions => ({
  type: 'SUGGESTIONS_UPDATE',
  payload: suggestions,
});

export const requstSuggestions = query => async dispatch => {
  const response = await axios.get(
    `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${query}`,
    {
      headers: {
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
        'X-RapidAPI-Key': '0616673ff2msh919caea072a8d14p1b87a7jsn28a884ecb541',
      },
    }
  );

  const suggestions = map(uniqBy(response.data.data, 'city'), 'city');
  dispatch(updateSuggestions(suggestions));
};
