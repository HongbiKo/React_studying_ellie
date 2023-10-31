import React from 'react';

export default function Profile({image, name, title, stateNew}) {
  return (
    <div className="profile">
      {stateNew ? <span className='new'>new</span> : null}
      <img className="photo" src={image} alt="avatar" />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}

