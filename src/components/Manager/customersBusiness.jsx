import React, { useState, useEffect, useContext } from 'react';
import { getUsers } from '../../api/user.api';
import { ManagerContext } from '../../context/manager.context';
import { Link } from 'react-router-dom';


export const Customers = () => {
    const manager = useContext(ManagerContext);
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await getUsers();
                setCustomers(response.data);
                console.log(response, response.data)
            } catch (error) {
                console.error("Error fetching customers:", error);
            }
        };

        fetchCustomers();
    }, []);

    return (
        <>
            <div>
                {manager[0] &&
                    <div>
                        <h1>Our customers</h1>
                        <ul>
                            {customers.map((customer) => (
                                <li key={customer.id}>
                                    <p><strong>Name:</strong> {customer.username} , <strong>Phone:</strong> {customer.phone} , <strong>Email:</strong> {customer.email}</p>
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