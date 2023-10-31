import React from 'react';

export default function Avartar({image, stateNew}) {
  return (
    <div className="avartar">
      {stateNew ? <span className='new'>new</span> : null}
      <img className="photo" src={image} alt="avatar" />
    </div>
  );
}

