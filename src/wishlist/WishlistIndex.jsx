import React, {userState, useEffect} from 'react';
import { Container, Row, Col } from 'reactstrap';
import WishlistCreate from './WishlistCreate'
import WishlistTable from './WishlistTable'
import WishlistEdit from './WishlistEdit'

const WishlistIndex = (props) => {
    const [wishlists, setWishlists] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [wishlistToUpdate, setWishlistToUpdate] = useState({});

    const fetchWishlists = () => {
        fetch('http://localhost:3000/wishlist', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
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
                <h1 className="heading">Wishlist</h1>
                <p className="text">Add a comic book to your wishlist here.</p>
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