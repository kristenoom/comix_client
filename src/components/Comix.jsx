//import {Link} from "react-router-dom";
import React, { useState } from 'react';
import {Table, Button, Form, FormGroup, Label, Input} from 'reactstrap'; //added Button, Form, FormGroup, Label, Input - korrina

const Comix = (props) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [id, setId] = useState('');
    const [issue_number, setIssue_Number] = useState('');
    const [cover_date, setCover_Date] = useState('');
    const [read, setRead] = useState('');
    const [owned, setOwned] = useState('');
    // const [image, setImage] = useState(''); not needed right now

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/comic/', {
            method: 'POST',
            body: JSON.stringify({comic: {name: name, description: description, id: id, cover_date: cover_date, issue_number: issue_number}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setName('');
            setDescription('');
            setId('');
            setIssue_Number('');
            setCover_Date('');
            setRead('');
            setOwned('');
            props.fetchComix();
        })
    }

    return (
        <div className="main">
            <div className="mainDiv">
                <h1 className="heading">Comic Book Log</h1>
                <p className="text">Add a comic book to your reading list here.</p>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="name" />
                        <Input name="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="description" />
                        <Input name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="id" />
                        <Input name="id" value={id} onChange={(e) => setId(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="issue_number" />
                        <Input name="issue_number" value={issue_number} onChange={(e) => setIssue_Number(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="cover_date" />
                        <Input name="cover_date" value={cover_date} onChange={(e) => setCover_Date(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="read" />
                        <Input name="read" value={read} onChange={(e) => setRead(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="owned" />
                        <Input name="owned" value={owned} onChange={(e) => setOwned(e.target.value)}/>
                    </FormGroup>
                    {/* <FormGroup>
                        <Label htmlFor="image" />
                        <Input name="image" value={image} onChange={(e) => setImage(e.target.value)}/>
                    </FormGroup> */}
                    <Button type="submit">Click to Add Comic</Button>
                </Form>
                <br />
                <Table className="text" width="600px" maxWidth="1000px" striped>
                    <thead>
                        <tr>
                            {/* <td width="10%" align="center">Cover Art</td> */}
                            <th width="60%">Title</th>
                            <th width="30%" align="center">Issue Date</th>
                            <th width="10%" align="center">Have Read</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/* <td width="10%" align="center">IMAGE HERE</td> */}<td width="60%">Lorem Ipsum</td>
                            <td width="30%" align="center">Date 2021</td>
                            <td width="10%" align="center">✔️</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
};

export default Comix;