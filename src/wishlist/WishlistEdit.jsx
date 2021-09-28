import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from "reactstrap";
import APIURL from '../helpers/Environment';

const WishlistEdit = (props) => {
    const [editName, setEditName] = useState(props.wishlistToUpdate.title);
    // const [editIssue_number, setEditIssue_Number] = useState(props.wishlistToUpdate.issue_number);
    // const [editCover_date, setEditCover_Date] = useState(props.wishlistToUpdate.cover_date);
  
  console.log(props.token);

    const wishlistUpdate = (e, wishlist) => {
        e.preventDefault();
        fetch(`https://comixroll-server.herokuapp.com/wishlist/${props.wishlistToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                wishlist: {
                    title: editName,
                    // issue_number: editIssue_number,
                    // cover_date: editCover_date,
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => {
            props.fetchWishlists();
            props.updateOff();
        })
    }

    return (
        <Modal isOpen={true}>
            <ModalHeader>Update Wishlist</ModalHeader>
            <ModalBody>
                <Form onSubmit={wishlistUpdate}>
                    <FormGroup>
                        <Label htmlFor="name">Title:</Label>
                        <Input name="name" value={editName} onChange={(e) => setEditName(e.target.value)} />
                    </FormGroup>
                    {/* 
                    <FormGroup>
                        <Label htmlFor="issue_number">Edit Issue Number:</Label>
                        <Input name="issue_number" value={editIssue_number} onChange={(e) => setEditIssue_Number(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="cover_date">Edit Cover Date:</Label>
                        <Input name="cover_date" value={editCover_date} onChange={(e) => setEditCover_Date(e.target.value)}/>
                    </FormGroup>
                    */}
          <Button type="submit">Update</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};
export default WishlistEdit;