import axios from 'axios';

//שליפת כל סוגי השרות
export const  getAllServices = async (business_id) => {
    return await axios.get(`http://localhost:3000/service?business_id=${business_id}`);
}

