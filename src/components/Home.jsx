import {useState, useEffect} from 'react';
import HomeChild from './HomeChild';
import {CardColumns} from 'reactstrap';

const Home = (props) => {
    const [results, setResults] = useState([]);

    const resource = `issues`;
    const api_key = `fd2fa4883d09424b39194fa5540f7f8ce9bac4e0`;
    const url = `https://efa-cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/${resource}/?api_key=${api_key}&format=json&filter=image:original_url&sort=cover_date:asc`;

    const fetchResults = async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.results);
        setResults(data.results);
    };

    useEffect(() => {
        fetchResults();
    }, []);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchResults();
    };

    return (
        <div className="main">
            <div className="mainDiv">
                <h1 className="heading">What will you discover?</h1>
                <br />
                <br />
                <CardColumns>
                    {results.length > 0 ? <HomeChild results={results} /> : null}
                </CardColumns>
            </div>
        </div>
    )
};

export default Home;