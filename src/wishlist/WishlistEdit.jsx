import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from "reactstrap";
import APIURL from './helpers/Environment';

const WishlistEdit = (props) => {

  const [editName, setEditName] = useState(props.wishlistToUpdate.name);
  // const [editId, setEditId] = useState(props.wishlistToUpdate.id);
  // const [editIssue_number, setEditIssue_Number] = useState(props.wishlistToUpdate.issue_number);
  // const [editCover_date, setEditCover_Date] = useState(props.wishlistToUpdate.cover_date);
  // const [editRead, setEditRead] = useState(props.wishlistToUpdate.read);
  // const [editOwned, setEditOwned] = useState(props.wishlistToUpdate.owned);
  console.log(props.token);
  const wishlistUpdate = (event, wishlist) => {
    event.preventDefault();
    fetch(`${APIURL}/wishlist/wishlistLog/${props.wishlistToUpdate.id}`, {
      method: "PUT",
      body: JSON.stringify({
        wishlist: {
          name: editName,
          //id: editId,
          // issue_number: editIssue_number,
          // cover_date: editCover_date,
          // read: editRead,
          // owned: editOwned
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then((res) => {
      props.fetchWishlist();
      props.updateOff();
    });
  };
  return (
    <Modal isOpen={true}>
      <ModalHeader>Wishlist Log</ModalHeader>
      <ModalBody>
        <Form onSubmit={wishlistUpdate}>
          <FormGroup>
            <Label htmlFor="name">Edit Name:</Label>
            <Input
              name="name"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
          </FormGroup>

          <Button type="submit">Update</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};
export default WishlistEdit;