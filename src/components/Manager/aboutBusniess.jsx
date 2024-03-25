import React, { useState, useEffect, useContext } from 'react';
import { getBusiness } from '../../api/Business.api'
import { ManagerContext } from '../../context/manager.context'
import { Link } from 'react-router-dom';


export const about = () => {

  const manager = useContext(ManagerContext)
  const [businessDetails, setBusinessDetails] = useState({});

  useEffect(() => {
    const fetchBusinessDetails = async () => {
      const response = await getBusiness("e1f80d42-0fb4-46eb-8b15-636bcf8dce79");
      console.log(response)
      setBusinessDetails(response.data);
    };

    fetchBusinessDetails();
  }, []);

  return (
    <>
      <div>
        {manager[0] &&
          (<div>
            <h1>Details about the business</h1>
            <h2>Name: {businessDetails.name}</h2>
            <p>Address: {businessDetails.adress}</p>
            <p>Number: {businessDetails.number}</p>
            <p>Email: {businessDetails.email}</p>
            
            <Link to={'/admin'}><button>Back to home page</button></Link>
          </div>)}
        {!manager[0] && <div>אינך רשאי לגשת לדף זה!!!!!!!!!</div>}
      </div>
    </>
  );
};


