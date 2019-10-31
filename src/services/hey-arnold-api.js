const URL = 'https://hey-arnold-api.herokuapp.com/api/v1';
// get 20 per page: ?perPage=20
// get a specific page with 20 per page: ?perPage=20&page=2

export function getCharacters(options) {
  const url = `${URL}/characters/?perPage=${options.count}`;
  return fetch(url)
    .then(response => response.json());
}

export function getGifs(options) {
  const url = `${URL}/gifs/random?count=10`;
  return fetch(url)
    .then(response => response.json());
}



