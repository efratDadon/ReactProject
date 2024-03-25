
import React, { useContext, useState } from "react";
import { SigninUser } from '../../api/user.api';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/user.context'

export const SignIn = () => {

  const user = useContext(UserContext)

  let user1;
  const data = async (event) => {
    event.preventDefault();
    const password = event.target.elements.password.value;
    const username = event.target.elements.username.value;
    user1 = { password: password, username: username };
    try {
      const res = await SigninUser(password);
      user[0] = username
      console.log(res, "status" + res.status)
      alert("שלום לך לקוח יקר" +" " +user[0]);

    } catch (error) {
      console.error("Error in sign in: ", error);
      alert("אינך קיים במערכת");
    }

  }

  return (
    <div>
      <form onSubmit={(e) => data(e)}>
        <label htmlFor="password">Enter your password:</label>
        <input type="text" id="password" />
        <label htmlFor="username">Enter username</label>
        <input type="text" id="username" />
        <button type="submit">Sign In</button>
        <Link to={'/'}><button type="submit">Back to home page</button></Link>
      </form>
    </div>
  )
}
