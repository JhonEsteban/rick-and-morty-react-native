import { apiBase } from './apiBase';

const getCharacterById = async (characterId) => {
  try {
    const response = await fetch(`${apiBase}/${characterId}`);

    if (!response.ok) {
      const message = `Status: ${response.status} - Message: ${response.statusText}`;
      throw new Error(message);
    }

    return await response.json();
  } catch (err) {
    return err;
  }
};

export default getCharacterById;
