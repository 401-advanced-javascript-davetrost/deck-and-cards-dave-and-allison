import React from 'react';
import { characters, gifs } from '../content.json';
import Deck from '../containers/Deck';

export default function App() {
  return (
    <>
      <Deck title="Characters">
        {characters.map(({ _id, name, image }) => (
          <div key={_id}>
            <header><h3>{name}</h3></header>
            <figure>
              <img src={image} alt={name} />
            </figure>
            <p>{name} has {_id}</p>
          </div>
        ))}
      </Deck>

      <Deck title="GIFs">
        {gifs.map(({ _id, image }) => (
          <div key={_id}>
            <header><h3>{_id}</h3></header>
            <figure>
              <img src={image} alt={_id} />
            </figure>
          </div>
        ))}
      </Deck>
    </>
  );
}
