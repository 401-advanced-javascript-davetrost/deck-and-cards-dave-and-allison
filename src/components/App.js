import React from 'react';
import { characters, gifs } from '../content.json';
import DeckOfComps from '../containers/DeckOfComps';
import Card from './Card';
import Deck from '../containers/Deck';

export default function App() {
  return (
    <>
      <DeckOfComps
        title="Characters"
        items={characters.map(character => ({ 
          ...character, 
          title: character.name, 
          content: `${character.name} has ${character._id}`
        }))}
        Component={Card}
      />
      <DeckOfComps
        title="GIFs"
        items={gifs.map(gif => ({ 
          ...gif, 
          title: gif._id
        }))}
        Component={Card}
      />


      <Deck title="Characters">
        {characters.map(({ _id, name, image }) => (
          <Card 
            key={_id} 
            title={name}
            image={image}
            content={`${name} has ${_id}`}
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
      </Deck>
    </>
  );
}
