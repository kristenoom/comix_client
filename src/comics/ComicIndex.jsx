import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'reactstrap';
import ComicCreate from './ComicCreate';
import ComicTable from './ComicTable';
import ComicEdit from './ComicEdit';
import APIURL from '../helpers/Environment';

const ComicIndex = (props) => {
    const [comics, setComics] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [comicToUpdate, setComicToUpdate] = useState({});

    const fetchComics = () => {
        let sessionToken = localStorage.getItem('token');
        console.log(sessionToken);
        
        fetch(`${APIURL}/comic/comixLog`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': sessionToken
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
                <Col md="12">
                    <h1 className="heading">Comic Book Log</h1>
                    <p className="text">Add a comic book/graphic novel to your log here.</p>
                </Col>
            </Row>
            <Row>
                <Col md="3">
                    <ComicCreate fetchComics={fetchComics} token={props.token} />
                </Col>
                <Col md="1">&nbsp;</Col>
                <Col md="8">
                    <ComicTable comics={comics} editUpdateComic={editUpdateComic} updateOn={updateOn} fetchComics={fetchComics} token={props.token} />
                </Col>
                {updateActive ? <ComicEdit comicToUpdate={comicToUpdate} updateOff={updateOff} token={props.token} fetchComics={fetchComics} /> : <></>}
            </Row>
        </Container>
    )
};

export default ComicIndex;