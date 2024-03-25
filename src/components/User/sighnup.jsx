
import React from "react";
import { createUser } from '../../api/user.api';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

//כאן עשינו שימוש בספריית בוטסטראפ לעיצוב קצת שונה ונח

export const SignUp = () => {
    const data = async (event) => {
        event.preventDefault();
        const username = event.target.elements.username.value;
        const password = event.target.elements.password.value;
        const phone = event.target.elements.phone.value;
        const email = event.target.elements.email.value;
        const newuser = {
            username: username,
            password: password,
            phone: phone,
        };
        await createUser(newuser);
        alert("ברוך הבא לקוח חדש , תודה שנרשמת לאתר שלנו")

    }

    return (
        <div>
            <h2>הרשם לאתר שלנו</h2>
            <Form onSubmit={(e) => data(e)}>
                <Form.Group controlId="username">
                    <Form.Label>Enter username</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Enter your password</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group controlId="phone">
                    <Form.Label>Enter your phone number</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Enter your email</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Button variant="primary" type="submit">Sign Up</Button>
                <Link to={'/'}>
                    <Button variant="secondary">Back to home page</Button>
                </Link>
            </Form>
        </div>
    );
}

