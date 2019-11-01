const URL = 'https://hey-arnold-api.herokuapp.com/api/v1';

export function getCharacters(options) {
  const url = `${URL}/characters/?perPage=${options.count}`;
  return fetch(url)
    .then(response => response.json());
}

export function getGifs(options) {
  const url = `${URL}/gifs/random?count=${options.count}`;
  return fetch(url)
    .then(response => response.json());
}



