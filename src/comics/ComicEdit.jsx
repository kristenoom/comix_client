import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

const ComicEdit = (props) => {
    const [editName, setEditName] = useState(props.comicToUpdate.name);
    //const [editId, setEditId] = useState(props.comicToUpdate.id);
    const [editIssue_number, setEditIssue_Number] = useState(props.comicToUpdate.issue_number);
    const [editCover_date, setEditCover_Date] = useState(props.comicToUpdate.cover_date);
    const [editRead, setEditRead] = useState(props.comicToUpdate.read);
    const [editOwned, setEditOwned] = useState(props.comicToUpdate.owned);

    console.log(props.token);

    const comicUpdate = (e, comic) => {
        e.preventDefault();
        fetch(`http://localhost:3000/comic/${props.comicToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                comic: {
                    name: editName,
                    // id: editId,
                    issue_number: editIssue_number,
                    cover_date: editCover_date,
                    read: editRead,
                    owned: editOwned
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => {
            props.fetchComic();
            props.updateOff();
        })
    }

    return (
        <Modal isOpen={true}>
            <ModalHeader>Edit Your Comic Entry</ModalHeader>
            <ModalBody>
                <Form onSubmit={comicUpdate}>
                    <FormGroup>
                        <Label htmlFor="name">Title:</Label>
                        <Input name="name" value={editName} onChange={(e) => setEditName(e.target.value)} />
                    </FormGroup>
                    {/* <FormGroup>
                        <Label htmlFor="id">Edit Id:</Label>
                        <Input name="id" value={editId} onChange={(e) => setEditId(e.target.value)}/>
                    </FormGroup> */}
                    <FormGroup>
                        <Label htmlFor="issue_number">Issue Number:</Label>
                        <Input name="issue_number" value={editIssue_number} onChange={(e) => setEditIssue_Number(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="cover_date">Cover Date:</Label>
                        <Input name="cover_date" value={editCover_date} onChange={(e) => setEditCover_Date(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="read">Have you read it?</Label>
                        <Input type="select" name="read" value={editRead} onChange={(e) => setEditRead(e.target.value)}/>
                        <option value="true">yes</option>
                        <option value="false">no</option>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="owned">Do you own it?</Label>
                        <Input type="select" name="owned" value={editOwned} onChange={(e) => setEditOwned(e.target.value)}/>
                        <option value="true">yes</option>
                        <option value="false">no</option>
                    </FormGroup>
                    <Button type="submit" color="success">Update</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default ComicEdit;