import axios from 'axios';

//יצירת עסק
// export const createBusiness = async(business, userId) => {
//     return await axios.post(`http://localhost:3000/business`, {
//         business,
//         userId
//     });
// }

//לקבל עסק
export const getBusiness = (userId) => {
    return axios.get(`http://localhost:3000/business/${userId}`, {
    });
}

