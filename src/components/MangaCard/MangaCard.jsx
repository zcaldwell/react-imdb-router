import React from 'react';

export default function MangaCard({ attributes }) {
  return (
    <div>
      <li key={attributes.id}>
        <h1>{attributes.title.en}</h1>
      </li>
    </div>
  );
}
