import React, {useState, useEffect} from 'react';
import HomeChild from './HomeChild';
import {CardColumns} from 'reactstrap';

const resource = `issues`;
const api_key = `13c206af9980bdd5498672497394fae658afdaec`;
const baseURL = `http://comicvine.gamespot.com/api`
//const url = `http://comicvine.gamespot.com/api/${resource}/?api_key=${api_key}&format=json&sort=cover_date:asc`;
//const full_url = `http://comicvine.gamespot.com/api/issues/?api_key=13c206af9980bdd5498672497394fae658afdaec&format=json&sort=cover_date:asc`;

const Home = (props) => {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);

    const fetchResults = async () => {
        let url = `${baseURL}/${resource}/?api_key=${api_key}&format=json&sort=cover_date:asc`;

        const response = await fetch(url);
        const data = await response.json();

        console.log(data.results);
        
        setResults(data.results);
    };

    useEffect(() => {
        fetchResults();
    }, []);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        fetchResults();
    }

    const displayComics = () => results.map((comic) => <HomeChild key={comic.id} comic={comic} />);

    return (
        <div className="main">
            <div className="mainDiv">
            <h1 className="heading">What will you discover?</h1>
            <br />
                <form onSubmit={(e) => handleSubmit(e)}>
                    <span>Enter search term (required):</span>
                    <input type="text" name="search" onChange={(e) => setSearch(e.target.value)} required />
                    <button className="submit">Submit</button>
            </form>
            <br />
            <CardColumns>
                    {results.length > 0 ? <HomeChild displayComics={displayComics} /> : null}
            </CardColumns>
            </div>
        </div>
    )
};

export default Home;