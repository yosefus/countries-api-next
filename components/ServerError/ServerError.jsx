import React from 'react';

export default function ServerError() {
  return (
    <div
      style={{
        height: '100vh',
        background: 'url(/images/error.jpg)',
        color: '#fff',
      }}
    >
      <span
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#00000080',
        }}
      >
        <span>
          <h1 style={{ fontSize: '8rem' }}>oops...</h1>
          <h2 style={{ fontWeight: 400 }}>
            something went wrong! <br /> please try again later
          </h2>
        </span>
      </span>
    </div>
  );
}
