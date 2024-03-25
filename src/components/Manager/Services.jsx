
import React, { useState, useEffect, useContext } from 'react';
import { getAllServices } from '../../api/Service.api';
import { ManagerContext } from '../../context/manager.context'
import { Link } from 'react-router-dom';


export const getServices = () => {

  const manager = useContext(ManagerContext)
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const response = await getAllServices("e1f80d42-0fb4-46eb-8b15-636bcf8dce79");
      setServices(response.data);
    };

    fetchServices();
  }, []);

  return (
    <>
      <div>
        {manager[0] && <div>
          <h1>השירותים שלנו</h1>
          <ul>
            {services.map((service) => (
              <li key={service.type}>
                <h2 htmlFor="service">{service.type}</h2>
                {service.description}
                <br />
                <p>{service.price}- עלות</p>
                <p>{service.Duration}- משך הזמן</p>
              </li>
            ))}
          </ul>
          <Link to={'/admin'}><button>Back to home page</button></Link>
        </div>}
        {!manager[0] && <div>אינך רשאי לגשת לדף זה!!!!!!!!!</div>}
      </div>
    </>
  );
};