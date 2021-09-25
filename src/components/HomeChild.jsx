//import {Link} from "react-router-dom";

import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

const HomeChild = (props) => {
    //const { name, description, image, id, cover_date, issue_number } = props.comic;

    return (
        <div>
            {props.results.map(result => {
                return (
                    <div key={result.id}>
                    <Card>
                        <CardImg top width="50%" src={result.image.small_url} alt={result.name} />
                        <CardBody>
                            <CardTitle tag="h5">{result.name}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">{result.volume.name}</CardSubtitle>
                            <CardText>
                                Issue Number: {result.issue_number}<br />
                                Cover Date: {result.cover_date}<br />
                                Description: {result.description}
                            </CardText>
                        </CardBody>
                    </Card>
                    </div>
                )
            })}
        </div>
    );
};

export default HomeChild;