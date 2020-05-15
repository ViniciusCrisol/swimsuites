import React from 'react';

export default function MainPhotos({ Image, Title, Price }) {
  return (
    <div>
      <img src={Image} alt="" />
      <h1>{Title}</h1>
      <h3>{Price}</h3>
    </div>
  );
}
