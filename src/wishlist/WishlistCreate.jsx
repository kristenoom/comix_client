import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import APIURL from '../helpers/Environment';

const WishlistCreate = (props) => {
    const [name, setName] = useState('');
    // const [description, setDescription] = useState('');
    // const [id, setId] = useState('');
    // const [issue_number, setIssue_Number] = useState('');
    // const [cover_date, setCover_Date] = useState('');
    // const [read, setRead] = useState('');
    // const [owned, setOwned] = useState('');
    // const [image, setImage] = useState(''); not needed right now

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${APIURL}/wishlist/`, {
            method: 'POST',
            body: JSON.stringify({
                wishlist: {
                    name: name,
                    // description: description,
                    // id: id,
                    // cover_date: cover_date,
                    // issue_number: issue_number
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setName('');
            // setDescription('');
            // setId('');
            // setIssue_Number('');
            // setCover_Date('');
            // setRead('');
            // setOwned('');
            props.fetchWishlist();
        })
    }

    return (
        <>
            {/* <h3>Add a Wishlist</h3> */}
            <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="name" />
                        <Input name="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </FormGroup>
                    {/* <FormGroup>
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
                        <Input type="select" name="read" value={read} onChange={(e) => setRead(e.target.value)}/>
                        <option></option>
                        <option value="Read">Read</option>
                        <option value="Unread">Unread</option>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="owned" />
                        <Input type="select" name="owned" value={owned} onChange={(e) => setOwned(e.target.value)}/>
                        <option></option>
                        <option value="Owned">Owned</option>
                        <option value="Unowned">Unowned</option>
                    </FormGroup> */}
                    {/* <FormGroup>
                        <Label htmlFor="image" />
                        <Input name="image" value={image} onChange={(e) => setImage(e.target.value)}/>
                    </FormGroup> */}
                    <Button type="submit" color="success">Add +</Button>
                </Form>
            </>
    )
}

export default WishlistCreate;