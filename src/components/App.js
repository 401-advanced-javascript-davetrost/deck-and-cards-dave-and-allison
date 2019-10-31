import React from 'react';
import { characters, gifs } from '../content.json';
import DeckOfComps from '../containers/DeckOfComps';
import Card from './Card';

export default function App() {
  return (
    <>
      <DeckOfComps
        title="Characters"
        items={characters}
        Component={Card}
      />
      {/* <Deck title="Characters">
        {characters.map(({ _id, name, image }) => (
          <Card 
            key={_id} 
            title={name}
            image={image}
            content={<p>{name} has {_id}</p>}
          />
        ))}
      </Deck>

      <Deck title="GIFs">
        {gifs.map(({ _id, image }) => (
          <Card 
            key={_id} 
            title={_id}
            image={image}
          />
        ))}
      </Deck> */}
    </>
  );
}
