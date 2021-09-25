import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
import APIURL from '../helpers/Environment';

const ComicEdit = (props) => {
    const [editName, setEditName] = useState(props.comicToUpdate.title);
    //const [editId, setEditId] = useState(props.comicToUpdate.id);
    const [editIssue_number, setEditIssue_Number] = useState(props.comicToUpdate.issue_number);
    const [editCover_date, setEditCover_Date] = useState(props.comicToUpdate.cover_date);
    const [editRead, setEditRead] = useState(props.comicToUpdate.read);
    const [editOwned, setEditOwned] = useState(props.comicToUpdate.owned);

    console.log(props.token);

    const comicUpdate = (e, comic) => {
        e.preventDefault();
        fetch(`${APIURL}/comic/${props.comicToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                comic: {
                    title: editName,
                    // id: editId,
                    issue_number: editIssue_number,
                    cover_date: editCover_date,
                    read_status: editRead,
                    status: editOwned
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => {
            props.fetchComics();
            props.updateOff();
        })
    }

    return (
        <Modal isOpen={true}>
            <ModalHeader>Edit Your Comic Entry</ModalHeader>
            <ModalBody>
                <Form onSubmit={comicUpdate}>
                    <FormGroup>
                        <Label htmlForm="name">Title:</Label>
                        <Input name="name" value={editName} onChange={(e) => setEditName(e.target.value)} />
                    </FormGroup>
                    {/* <FormGroup>
                        <Label htmlFor="id">Edit Id:</Label>
                        <Input name="id" value={editId} onChange={(e) => setEditId(e.target.value)}/>
                    </FormGroup> */}
                    <FormGroup>
                        <Label htmlForm="issue_number">Issue Number:</Label>
                        <Input name="issue_number" value={editIssue_number} onChange={(e) => setEditIssue_Number(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlForm="cover_date">Cover Date:</Label>
                        <Input name="cover_date" value={editCover_date} onChange={(e) => setEditCover_Date(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlForm="read_status">Have you read it?</Label>
                        <Input type="select" name="read_status" value={editRead} onChange={(e) => setEditRead(e.target.value)}>
                        <option value="Yes">yes</option>
                        <option value="No">no</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlForm="owned">Do you own it?</Label>
                        <Input type="select" name="owned" value={editOwned} onChange={(e) => setEditOwned(e.target.value)}>
                        <option value="Yes">yes</option>
                        <option value="No">no</option>
                        </Input>
                    </FormGroup>
                    <Button type="submit" color="success">Update</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default ComicEdit;