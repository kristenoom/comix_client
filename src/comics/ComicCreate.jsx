import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const ComicCreate = (props) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    // const [id, setId] = useState('');
    const [issue_number, setIssue_Number] = useState('');
    const [cover_date, setCover_Date] = useState('');
    // const [read, setRead] = useState('');
    // const [owned, setOwned] = useState('');
    // const [image, setImage] = useState(''); not needed right now

    const handleSubmit = (e) => {
        e.preventDefault();
        let sessionToken = localStorage.getItem('token')
        console.log(sessionToken)
        fetch('https://comicsroll.herokuapp.com/comic/create', {
            method: 'POST',
            body: JSON.stringify({
                 
                    title: name,
                    issue_date: description,
                    // id: id,
                    read_status: issue_number,
                    status: cover_date,
                
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': sessionToken
            })
        }) .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setName('');
            setDescription('');
            // setId('');
            setIssue_Number('');
            setCover_Date('');
            // setRead('');
            // setOwned('');
            // props.fetchComix();
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
                    {/* <FormGroup>
                        <Label htmlForm="cover_date" >Status</Label>
                        <Input name="cover_date" type="date" value={cover_date} onChange={(e) => setCover_Date(e.target.value)}/>
                    </FormGroup> */}
                    <FormGroup>
                        <Label htmlForm="read" >Have you read it?</Label>
                        <Input type="select" name="read" value={issue_number} onChange={(e) => setIssue_Number(e.target.value)}>
                        <option value="" disable>Select a Option</option>
                        <option value="Yes">yes</option>
                        <option value="No">no</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlForm="owned" >Do You Own It?</Label>
                        <Input type="select" name="owned" value={cover_date} onChange={(e) => setCover_Date(e.target.value)}>
                        <option value="" disable>Select a Option</option>
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