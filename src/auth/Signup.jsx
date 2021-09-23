import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'

const Signup = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

 
    let handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3000/user/register`, {
            method: "POST",
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password,
                },
            }),
            headers: new Headers({
                "Content-Type": "application/json",
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                props.updateToken(data.sessionToken);
            });
    };

    return(
        <div>
            <h1 className="heading">Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(event) => setUsername(event.target.value)} name="username" value={username}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(event) => setPassword(event.target.value)} name="password" value={password}/>
                </FormGroup>
                <Button type="submit" color="success">Welcome</Button>
            </Form>
        </div>
    )
}

export default Signup