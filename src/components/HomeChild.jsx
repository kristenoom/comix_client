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
                        <CardImg top width="25%" src={result.image.small_url} alt={result.name} />
                        <CardBody>
                            <CardTitle tag="h5"><strong className="text-muted">Title:</strong> {result.name}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted"><strong>Volume:</strong> {result.volume}</CardSubtitle>
                            <CardText className="text">
                                <strong>Issue Number:</strong> {result.issue_number}<br />
                                <strong>Cover Date:</strong> {result.cover_date}<br />
                                <strong>Description:</strong> {result.description}                                    
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