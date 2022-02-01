import React, { useEffect } from 'react';
import { useState } from 'react';
import MangaList from '../components/MangaList/MangaList';
import { getMangaTitles } from '../services/manga';

export default function Home() {
  const [mangas, setMangas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMangaTitles();
      console.log(data);
      setMangas(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <MangaList mangas={mangas} />
    </div>
  );
}
