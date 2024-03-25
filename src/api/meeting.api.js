 import axios from 'axios';

//שליפת כל הפגישות
export const  getAllMeetings = (business_id) => {
    return axios.get(`http://localhost:3000/meeting?business_id=${business_id}`);
}


// הוספת פגישה חדשה
export const createMeeting = async (meetingData) => {
    console.log(meetingData);
    return await axios.post(`http://localhost:3000/meeting`, {
        business_id: "e1f80d42-0fb4-46eb-8b15-636bcf8dce79",
        start_time: new Date().toISOString(), // Send the current date as an example
        duration: "2",
        meeting: {
            name: meetingData.name,
            phone: meetingData.phone,
            typeServices: meetingData.typeService,
            start_time: new Date(meetingData.start_time).toISOString(), // Convert start_time to a valid date format
            mail: meetingData.mail,
            Note: meetingData.note
        }
    });
}

// עדכון
export const updateMeeting = (id, meeting) => {
    return axios.put(`http://localhost:3000/meeting/${id}`, {
        meeting,
    });
}

//מחיקה
export const deleteMeeting = (id) => {
    return axios.delete(`http://localhost:3000/meeting/${id}`, {
    });
}