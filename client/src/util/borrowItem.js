import axios from 'axios';

const borrowItem = async ({ uid, sid, name, no }) => {
  try {
    const result = await axios.put('http://localhost:5000/api/v1/items/', {
      uid,
      sid,
      name,
      no
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default borrowItem;
