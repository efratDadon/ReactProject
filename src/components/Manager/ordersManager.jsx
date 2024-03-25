
import React, { useState, useEffect, useContext } from 'react';
import { getAllMeetings, deleteMeeting, updateMeeting } from '../../api/meeting.api';
import { ManagerContext } from '../../context/manager.context'
import { services } from '../../data/services';
import { Link } from 'react-router-dom';


export const Meet = () => {

  const manager = useContext(ManagerContext)
  const [meetings, setMeetings] = useState(null);

  useEffect(() => {
    getAllMeetings("e1f80d42-0fb4-46eb-8b15-636bcf8dce79").then(response => {
      setMeetings(response.data);
    }).catch(error => {
      console.error("Error fetching meetings:", error);
    });
  }, []);

  const AllMeetings = () => {
    getAllMeetings("e1f80d42-0fb4-46eb-8b15-636bcf8dce79").then(response => {
      setMeetings(response.data);
    }).catch(error => {
      console.error(error);
    });
  };

  const DeleteMeeting = (id) => {
    deleteMeeting(id).then(() => {
      setMeetings(meetings.filter(meeting => meeting.id !== id));
    }).catch(error => {
      console.error(error);
    });
  };



  const sortMeetingsByDate = () => {
    const sortedMeetings = [...meetings].sort((a, b) => new Date(a.start_time) - new Date(b.start_time));
    setMeetings(sortedMeetings);
  };

  const sortMeetingsByCutomerName = () => {
    const sortedMeetings = [...meetings].sort((a, b) => a.name.localeCompare(b.name));
    setMeetings(sortedMeetings);
  };

  const [update, setUpdate] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [meetings1, setMeetings1] = useState([]);

  const serviceSelection = (service) => {
    setSelectedService(service);
  };

  const saveData = async (id, event) => {
    console.log(id)
    event.preventDefault();
    const name = event.target.name.value;
    const phone = event.target.phone.value;
    const typeService = selectedService ? selectedService.type : event.target.key.value;
    const start_time = new Date(event.target.startTime.value).toISOString();
    const mail = event.target.mail.value;
    const note = event.target.notice.value;

    const meetings_time = meetings1.some(meeting1 => {
      const meetingStartTime = new Date(meeting1.start_time).toISOString();
      return meetingStartTime === start_time;
    });


    if (meetings_time) {
      alert("The time is busy, please choose another time");
    } else {


      const newMeeting = {
        name: name,
        phone: phone,
        typeService: typeService,
        start_time: start_time,
        mail: mail,
        note: note
      };
      console.log(newMeeting)
      await updateMeeting(id, newMeeting);
      alert("Session updated successfully");
      setMeetings(meetings.map(meeting => (meeting.id === id ? newMeeting : meeting)));
    }
  }

  return (
    <div>
      <>
        {manager[0] && <div>
          {meetings ? (
            <div>
              <button onClick={sortMeetingsByDate}>Sort by date </button>
              <button onClick={sortMeetingsByCutomerName}>Sort by customer name</button>
              <ul>
                {meetings.map(meeting => (
                  <li key={meeting.id}>
                    {meeting.name} - {meeting.start_time}-{meeting.Note}
                    <button onClick={() => DeleteMeeting(meeting.id)}>delete</button>
                    {update ? (
                      <div>
                        <form onSubmit={(event) => saveData(meeting.id, event)}>
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
                                  <li key={service.type} onClick={() => serviceSelection(service)}>
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
                          <button onClick={() => saveData(meeting.id)}>Update</button>

                        </form>

                        <button onClick={() => setUpdate(false)}>close</button>

                      </div>
                    ) : (
                      <div>
                        <button onClick={() => setUpdate(true)}>update</button>
                      </div>
                    )}

                  </li>
                ))}
              </ul>
              <button onClick={() => setMeetings(null)}>close</button>
              <Link to={'/addMetting'}><button type="submit">add a new meeting</button></Link>
            </div>
          ) : (
            <div>
              <button onClick={AllMeetings}>To display all meetings</button>
            </div>
          )}
          <br />
          <Link to={'/admin'}><button>Back to home page</button></Link>
        </div>}
        {!manager[0] && <div>אינך רשאי לגשת לדף זה!!!!!!!!!</div>}
      </>
    </div>
  );
};