import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'reactstrap';
import ComicCreate from './ComicCreate';
import ComicTable from './ComicTable';
import ComicEdit from './ComicEdit'

const ComicIndex = (props) => {
    const [comics, setComics] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [comicToUpdate, setComicToUpdate] = useState({});

    const fetchComics = () => {
        fetch('http://localhost/3000/comic', {
            method: 'GET', 
            headers: new Headers ({
                'COntent-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then((res) => res.json())
        .then((comicData) => {
            setComics(comicData)
        })
    }

        const editUpdateComic = (comic) => {
            setComicToUpdate(comic);
            console.log(comic);
        }

     useEffect(() => {
         fetchComics()
     }, [])



     return (
         <Container>
             <Row>
                 <Col md="4">
                     {/* <ComicCreate fetchComics={fetchComics} token={props.token}/> */}
                 </Col>
                 <Col md="9">
                     {/* <ComicTable comics={comics} editUpdateComic={editUpdateComic}/> */}
                 </Col>
             </Row>
         </Container>
     )
}

export default ComicIndex;
