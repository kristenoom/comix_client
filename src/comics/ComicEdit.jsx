import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
import APIURL from './helpers/environment';

const ComicEdit = (props) => {

    const [editName, setEditName] = useState(props.comicToUpdate.title);
    // const [editId, setEditId] = useState(props.comicToUpdate.id);
    const [editIssue_number, setEditIssue_Number] = useState(props.comicToUpdate.issue_date);
    const [editCover_date, setEditCover_Date] = useState(props.comicToUpdate.status);
    const [editDescription, setEditDescription] = useState(props.comicToUpdate.read_status);
    // const [editOwned, setEditOwned] = useState(props.comicToUpdate.owned);


    console.log(props.token);

    const comicUpdate = (e, comic) => {
        e.preventDefault();
        fetch(`${APIURL}/comic/${props.comicToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({

                
                    title: editName,
                    // id: editId,
                    issue_date: editDescription,
                    // cover_date: editCover_date,
                    read_status: editIssue_number,
                    status: editCover_date
                

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
                        <Label htmlFor="name">Edit Name:</Label>
                        <Input name="name" value={editName} onChange={(e) => setEditName(e.target.value)} />
                    </FormGroup>
                    {/* <FormGroup>
                        <Label htmlFor="id">Edit Id:</Label>
                        <Input name="id" value={editId} onChange={(e) => setEditId(e.target.value)}/>
                    </FormGroup> */}
                    <FormGroup>

                        <Label htmlFor="issue_number">Edit Issue Number:</Label>
                        <Input name="issue_number" value={editDescription} onChange={(e) => setEditDescription(e.target.value)}/>
                    </FormGroup>
                    
                             
                    <FormGroup>

                        <Label htmlFor="read">Edit Read Status:</Label>
                        <Input type="select" name="read" value={editIssue_number} onChange={(e) => setEditIssue_Number(e.target.value)}>
                        <option value="" disable>Select a Option</option>
                        <option value="Yes">Read</option>
                        <option value="No">Unread</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="owned">Edit Owned Status:</Label>
                        <Input type="select" name="owned" value={editCover_date} onChange={(e) => setEditCover_Date(e.target.value)}>
                        <option value="" disable>Select a Option</option>
                        <option value="Yes">Owned</option>
                        <option value="No">Unowned</option>

                        </Input>
                    </FormGroup>
                    <Button type="submit" color="success">Update</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default ComicEdit;