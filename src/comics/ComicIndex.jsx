import React, {userState, useEffect} from 'react';
import { Container, Row, Col } from 'reactstrap';
// import ComicCreate from './ComicCreate'
// import ComicTable from './ComicTable'
// import ComicEdit from './ComicEdit'

const ComicIndex = (props) => {
    const [comics, setComics] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [comicToUpdate, setComicToUpdate] = useState({});

    const fetchComics = () => {
        fetch('http://localhost')
    }
}