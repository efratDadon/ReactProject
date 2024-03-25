
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ManagerContext } from '../../context/manager.context'

export const Connect = () => {

    const [enterManger, setenterManger] = useState(false);
    const [password, setpassword] = useState("");
    const manager = useContext(ManagerContext)


    const onLogin = () => {

        if (password) {
            if (password == "12345678") {
                setenterManger(true);
                manager[0] = true
                console.log(manager[0]);

            }
            else {

                alert("הסיסמא שגויה, נסה שוב")
                manager[0] = false
                console.log(manager[0]);
            }
        }

    }

    return (
        <div>
            <h1>hello manager</h1>
            <input onBlur={onLogin}
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
            />
            {enterManger && <Link to={'/admin'}><button >Login</button></Link>}
        </div>
    );
}
