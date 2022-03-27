import { apiBase } from './apiBase';

const getAllCharacters = async () => {
  try {
    const response = await fetch(apiBase);

    if (!response.ok) {
      const message = `Status: ${response.status} - Message: ${response.statusText}`;
      throw new Error(message);
    }

    const { results } = await response.json();

    return results;
  } catch (err) {
    return err;
  }
};

export default getAllCharacters;
