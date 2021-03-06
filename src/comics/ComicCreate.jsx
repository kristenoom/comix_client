import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import APIURL from '../helpers/Environment';

const ComicCreate = (props) => {
    const [name, setName] = useState('');
    const [issue_number, setIssue_Number] = useState('');  //Comic Book ISSUE #
    const [cover_date, setCover_Date] = useState(''); // Comic Book COVER DATE
    const [read, setRead] = useState('');
    const [owned, setOwned] = useState('');
    //const [description, setDescription] = useState('');
    //const [id, setId] = useState('');
    // const [image, setImage] = useState(''); not needed right now

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://comixroll-server.herokuapp.com/comic/create`, {
            method: 'POST',
            body: JSON.stringify({
                    title: name,
                    issue_number: issue_number, //ISSUE #
                    issue_date: cover_date, //COVER DATE
                    read_status: read,
                    status: owned
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': sessionToken
            })
        }) .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setName('');
            //setDescription('');
            // setId('');
            setIssue_Number('');
            setCover_Date('');
            setRead('');
            setOwned('');
            props.fetchComics();
        })
    }

    return (
        <>
            {/* <h3>Add a Comic</h3> */}
            <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlForm="name" >Title</Label>
                        <Input name="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </FormGroup>
                    {/* <FormGroup>
                        <Label htmlForm="id" />
                        <Input name="id" value={id} onChange={(e) => setId(e.target.value)}/>
                    </FormGroup> */}
                    <FormGroup>
                        <Label htmlForm="issue_number" >Issue date:</Label>
                        <Input name="issue_number"onChange={(e) => setDescription(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlForm="cover_date" >Cover Date</Label>
                        <Input name="cover_date" value={cover_date} onChange={(e) => setCover_Date(e.target.value)}/>
                        {/* <Input name="cover_date" type="date" value={cover_date} onChange={(e) => setCover_Date(e.target.value)}/> */}
                    </FormGroup>
                    <FormGroup>
                        <Label htmlForm="read" >Have you read it?</Label>
                        <Input type="select" name="read" value={read} onChange={(e) => setRead(e.target.value)}>
                        <option value="Yes">yes</option>
                        <option value="No">no</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlForm="owned" >Do You Own It?</Label>
                        <Input type="select" name="owned" value={owned} onChange={(e) => setOwned(e.target.value)}>
                        <option value="Yes">yes</option>
                        <option value="No">no</option>
                        </Input>
                    </FormGroup>
                    {/* <FormGroup>
                        <Label htmlForm="image" />
                        <Input name="image" value={image} onChange={(e) => setImage(e.target.value)}/>
                    </FormGroup> */}
                    <Button type="submit">Add +</Button>
                </Form>
            </>
    )
}

export default ComicCreate;