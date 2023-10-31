import React from 'react';
import Avartar from './Avartar';

export default function Profile({image, name, title, stateNew}) {
  return (
    <div className="profile">
      <Avartar image={image} stateNew={stateNew}></Avartar>
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}

