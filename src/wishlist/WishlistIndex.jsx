import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'reactstrap';
import WishlistCreate from './WishlistCreate';
import WishlistTable from './WishlistTable';
import WishlistEdit from './WishlistEdit';
import APIURL from '../helpers/Environment';

const WishlistIndex = (props) => {
    const [wishlists, setWishlists] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [wishlistToUpdate, setWishlistToUpdate] = useState({});

    const fetchWishlists = () => {
        let sessionToken = localStorage.getItem('token');
        console.log(sessionToken);

        fetch(`https://comixroll-server.herokuapp.com/wishlist/wishlistLog`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': sessionToken
            })
        })
            .then((res) => res.json())
            .then((wishlistData) => {
                setWishlists(wishlistData)
                console.log(wishlistData)
            })
    };
    useEffect(() => {
        fetchWishlists();
    }, []);

    const editUpdateWishlist = (wishlist) => {
        setWishlistToUpdate(wishlist);
        console.log(wishlist);
    };
    const updateOn = () => {
        setUpdateActive(true);
    };
    const updateOff = () => {
        setUpdateActive(false);
    };

    return (
        <Container>
            <Row>
                <Col md="12">
                    <h1 className="heading">Wishlist</h1>
                    <p className="text">Add a comic book/graphic novel to your wishlist here.</p>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <WishlistCreate fetchWishlists={fetchWishlists} token={props.token} />
                </Col>
                <Col md="8">
                    <WishlistTable wishlists={wishlists} editUpdateWishlist={editUpdateWishlist} updateOn={updateOn} fetchWishlists={fetchWishlists} token={props.token} />
                </Col>
                {updateActive ? <WishlistEdit wishlistToUpdate={wishlistToUpdate} updateOff={updateOff} token={props.token} fetchWishlists={fetchWishlists} /> : <></>}
            </Row>
        </Container>
    )
};

export default WishlistIndex;