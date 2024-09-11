import config from '../utils/config';
const baseUrl = config.BACKEND_URL + '/notes';

const getAllNotes = async () => {
  try {
    const response = await fetch(baseUrl);
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

export default { getAllNotes };
