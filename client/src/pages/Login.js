import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

function Login() {
    const [values, setValues] = useState({
        username: '',
        password: '',
    });

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    };

    const [login, { loading}] = useMutation(LOGIN_USER, {
        update(proxy, result){
            console.log(result)
        },
        variables: values
    });

    const onSubmit = (e) => {
        e.preventDefault();
        login();
    };

    return (
        <div className="form-container">
            <Form onSubmit={onSubmit} noValidate>
                <h1>Login</h1>
                <Form.Input
                    label="Username"
                    placeholder="Username..."
                    name="username"
                    type="text"
                    value={values.username}
                    onChange={onChange} 
                />
                <Form.Input
                    label="Password"
                    placeholder="Password..."
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={onChange} 
                />
                <Button type="submit" color="green">
                    Login
                </Button>
            </Form>
        </div>
    )
}

const LOGIN_USER = gql`
    mutation{
    login(username: "Moose" password:"PeanutButter"){
    id
    username
    email
    token
  }
}
`;

export default Login