import React from 'react';
import { Link } from 'react-router-dom';

export default function MangaList({ mangas }) {
  return (
    <ul className="manga-list">
      {mangas.map(({ attributes: { id } }) => (
        <Link key={id} to={`/MangaList/${id}`}>
          <MangaCard key={attributes.id} {...attributes} />
        </Link>
      ))}
    </ul>
  );
}
