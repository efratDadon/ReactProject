import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { ManagerContext } from '../../context/manager.context'


export const Admin = () => {

    const manager = useContext(ManagerContext)

    return (

        <div>
            {manager[0] && <div>
                <h1>my business</h1>
                <li>
                    <Link to={'/aboutAs'}>Details about the business</Link>
                </li>
                <li>
                    <Link to={'/Services'}>show the services of the business</Link>
                </li>
                <li>
                    <Link to={'/ordersManager'}>Management of meetings</Link>
                </li>
                <li>
                    <Link to={'/customersBusiness'}>the customers of the business</Link>
                </li>
            </div>}
            {!manager[0] && <div>אינך רשאי לגשת לדף זה!!!!!!!!!</div>}
        </div>
    )
}


