import React, {useState, useEffect} from 'react';
import HomeChild from './HomeChild';
import {CardColumns} from 'reactstrap';

const Home = (props) => {
    const [results, setResults] = useState([]);

    const resource = `issues`;
    const api_key = `13c206af9980bdd5498672497394fae658afdaec`;
    const url = `http://comicvine.gamespot.com/api/${resource}/?api_key=${api_key}&format=json&sort=cover_date:asc`;

    const fetchURL = async() => {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data.results);
        
        setResults(data.results);
    };

    useEffect(() => {
        fetchURL();
    },[]);

    const displayComics = () => results.map((comic) => <HomeChild key={comic.id} comic={comic} />);

    return (
        <div className="main">
            <div className="mainDiv">
            <h1 className="heading">What will you discover?</h1>

            <CardColumns>
                {displayComics()}
            </CardColumns>
            </div>
        </div>
    )
};

export default Home;