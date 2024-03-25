
import React, { useState, useEffect } from 'react';
import { createMeeting, getAllMeetings } from '../api/meeting.api';
import { services } from '../data/services';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/user.context'

export const CreateMeeting = () => {


  const user=useContext(UserContext)
  console.log(user[0])

    const [showServices, setShowServices] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [meetings, setMeetings] = useState([]);

    useEffect(() => {
        const fetchMeetings = async () => {
            const response = await getAllMeetings("e1f80d42-0fb4-46eb-8b15-636bcf8dce79");
            console.log(response, response.status)
            setMeetings(response.data);
        };

        fetchMeetings();
    }, []);

    const saveData = async (event) => {
      event.preventDefault();
      const name = event.target.name.value;
      const phone = event.target.phone.value;
      const typeService = selectedService ? selectedService.type : event.target.key.value;
      const start_time = new Date(event.target.startTime.value).toISOString(); 
      const mail = event.target.mail.value;
      const note = event.target.notice.value;
  
      const meetings_time= meetings.some(meeting => {
          const meetingStartTime = new Date(meeting.start_time).toISOString();
          return meetingStartTime === start_time;
      });
  
      if (meetings_time) {
          alert("הזמן תפוס, אנא בחר זמן אחר");
      } else {
          const newMeeting = {
              name: name,
              phone: phone,
              typeService: typeService,
              start_time: start_time,
              mail: mail,
              note: note
          };
  
          await createMeeting(newMeeting);
          alert("הפגישה נוספה בהצלחה");
      }
  };
     const onServiceSelection = (service) => {
        setSelectedService(service);
    };

  return (<div>
     <h1>hello to -{user[0]}</h1>
      <form onSubmit={saveData}>
        <div>
          <label htmlFor="name">Enter your name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="phone">Enter your phone number</label>
          <input type="text" id="phone" name="phone" />
        </div>
        {showServices ? (
          <div>
            <ul>
              {services.map((service) => (
                <li key={service.type} onClick={() => onServiceSelection(service)}>
                  <input type="radio" id="service" name="service" />
                  <label htmlFor="service">{service.type}- </label>
                  {service.description}
                </li>             
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <button onClick={() => setShowServices(true)}>Choose a service type</button>
          </div>
        )}
        <div>
    <label htmlFor="startTime">Enter date and start time</label>
    <input type="datetime-local" id="startTime" name="startTime" />
     </div>
        <div>
          <label htmlFor="mail">email</label>
          <input type="mail" id="mail" name="mail" />
        </div>
        <div>
          <label htmlFor="notice">Write a Note to the business owner</label>
          <input type="text" id="notice" name="notice" />
        </div>
        
        <button type="submit">add the meeting</button>
        <Link to={'/'}><button type="submit">Back to home page</button></Link>
      </form>
    </div>
  );
};

export default CreateMeeting;