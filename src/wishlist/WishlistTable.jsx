import React from 'react';
import { Table, Button } from 'reactstrap';
import APIURL from '../helpers/Environment';

const WishlistTable = (props) => {
    const wishlistMapper = () => {
        return props.wishlists.map((wishlist, index) => {
            console.log(wishlist);
            return (
                <tr key={index}>
                    <td>{wishlist.title}</td>
                    {/* 
                    <td>{wishlistMapper.issue_number}</td>
                    <td>{wishlistMapper.cover_date}</td>
                     */}
                    <td>
                        <Button color="warning" onClick={() => { props.editUpdateWishlist(wishlist); props.updateOn() }}>Update</Button>
                        <Button color="danger" onClick={() => { deleteWishlist(wishlist) }}>Delete</Button>
                    </td>
                </tr>
            )
        })
    };

    const deleteWishlist = (wishlist) => {
        fetch(`${APIURL}/wishlist/delete/${wishlist.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
            .then(() => props.fetchWishlist())
    };

    return (
        <>
        {/* <h3 className="heading">Wishlist</h3>
        <hr/> */}
        <Table striped>
            <thread>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    {/* 
                    <th>Description</th>
                    <th>Issue Number</th>
                    <th>Cover Date</th>
                     */}
                </tr>
            </thread>
            <tbody>
                {wishlistMapper()}
            </tbody>
        </Table>
        </>
    )
}

export default WishlistTable;