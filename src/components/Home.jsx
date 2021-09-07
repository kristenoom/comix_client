import {Link} from "react-router-dom";

import React, {useState, useEffect} from 'react';

const Home = () => {
    const [results, setResults] = useState([]);

    const api_key = `fd2fa4883d09424b39194fa5540f7f8ce9bac4e0`;
    const url = `http://comicvine.gamespot.com/api/issues/?api_key=${api_key}&format=json&sort=cover_date:asc`;

    const fetchURL = async() => {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data.results);
        
        setResults(data.results);
    };

    useEffect(() => {
        fetchURL();
    });

    const displayComics = () => results.map((comic) => <HomeChild key={comic.id} comic={comic} />);

    return (
        <div className="main">
            <h1>What will you discover?</h1>

            <CardColumns>
                {displayComics()}
            </CardColumns>

        </div>
    )
};

export default Home;