import React from 'react';

export default function AppCard () {
  return(
    <>
      <Card>
        <p>Card1</p>
      </Card>

      <Card>
        <p>Card2</p>
        <p>설명</p>
      </Card>

      <Card>
        <article></article>
      </Card>
    </>
  );
}

function Card( {children} ) {
  return(
    <div style={{
      backgroundColor: 'black',
      borderRadius: '20px',
      color: 'white',
      minHeight: '200px',
      maxWidth: '200px',
      margin: '1rem',
      padding: '1rem',
      textAlign: 'center'
    }}>
      {children}
    </div>
  );
}