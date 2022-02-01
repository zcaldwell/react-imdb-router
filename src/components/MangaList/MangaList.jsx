import React from 'react';

export default function MangaList({ mangas }) {
  return (
    <ul className="manga-list">
      {mangas.map(({ attributes: { id, title } }) => (
        <li key={id}>
          <h1>{title.en}</h1>
        </li>
      ))}
    </ul>
  );
}
