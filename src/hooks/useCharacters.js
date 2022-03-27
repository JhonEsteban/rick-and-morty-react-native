import { useState, useEffect } from 'react';

import getAllCharacters from '../services/getAllCharacters';

const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllCharacters().then((data) => {
      setCharacters(data);
      setLoading(false);
    });
  }, []);

  return {
    characters,
    loading,
  };
};

export default useCharacters;
