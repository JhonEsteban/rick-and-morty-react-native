import { useState, useEffect } from 'react';
import getCharacterById from '../services/getCharacterById';

const useSingleCharacter = (characterId) => {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCharacterById(characterId).then((data) => {
      setCharacter(data);
      setLoading(false);
    });
  }, [characterId]);

  return {
    character,
    loading,
  };
};

export default useSingleCharacter;
