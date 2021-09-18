import React, {userState, useEffect} from 'react';
import { Container, Row, Col } from 'reactstrap';
import ComicCreate from './ComicCreate'
import ComicTable from './ComicTable'
import ComicEdit from './ComicEdit'

const ComicIndex = (props) => {
    const [comics, setComics] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [comicToUpdate, setComicToUpdate] = useState({});

    const fetchComics = () => {
        fetch('http://localhost:3000/comic', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
            .then((res) => res.json())
            .then((comicData) => {
                setComics(comicData)
                console.log(comicData)
            })
    };

    useEffect(() => {
        fetchComics();
    }, []);

    const editUpdateComic = (comic) => {
        setComicToUpdate(comic);
        console.log(comic);
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
                <Col md="3">
                    <ComicCreate fetchComics={fetchComics} token={props.token} />
                </Col>
                <Col md="9">
                    <ComicTable comics={comics} editUpdateComic={editUpdateComic} updateOn={updateOn} fetchComics={fetchComics} token={props.token} />
                </Col>
                {updateActive ? <ComicEdit comicToUpdate={comicToUpdate} updateOff={updateOff} token={props.token} fetchComics={fetchComics} /> : <></>}
            </Row>
        </Container>
    )
};

export default ComicIndex;