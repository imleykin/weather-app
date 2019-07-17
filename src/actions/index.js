import { map, uniqBy } from 'lodash';

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
  const response = await fetch(
    `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${query}`,
    {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
        'X-RapidAPI-Key': '0616673ff2msh919caea072a8d14p1b87a7jsn28a884ecb541',
      },
    }
  ).then(data => data.json());

  const suggestions = map(uniqBy(response.data, 'city'), 'city');
  dispatch(updateSuggestions(suggestions));
};
