import axios from 'axios';

const getSetList = async () => {
  try {
    const result = await axios.get('http://localhost:5000/api/v1/sets');
    return result;
  } catch (error) {
    console.log(error);
  }
};

export default getSetList;
