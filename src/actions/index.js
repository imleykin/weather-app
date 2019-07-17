// import parser from 'xml2json';

export const typeSearchQuery = query => async dispatch => {
  // const responseXML = await fetch(
  //   `https://andruxnet-world-cities-v1.p.rapidapi.com/?query=${query}&searchby=city`,
  //   {
  //     method: 'GET', // или 'PUT'
  //     // body: JSON.stringify(data), // data может быть типа `string` или {object}!
  //     headers: {
  //       'X-RapidAPI-Host': 'andruxnet-world-cities-v1.p.rapidapi.com',
  //       'X-RapidAPI-Key': '0616673ff2msh919caea072a8d14p1b87a7jsn28a884ecb541',
  //     },
  //   }
  // )

  const responseXML = await fetch(
    `http://autocomplete.travelpayouts.com/places2?term=${query}&types[]=city`
  ).then(result => console.log(result.text));

  // const responseJSON = parser(responseXML);
  //   .then(str => new window.DOMParser().parseFromString(str, 'text/xml'));
  //
  // // console.log(response);
  // const suggestions = response.getElementsByTagName('toponymName');
  // console.log(suggestions);
};
