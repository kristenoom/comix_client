//import {Link} from "react-router-dom";

import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

const HomeChild = (props) => {
    //const { name, description, image, id, cover_date, issue_number } = props.comic;
    //breaks code -- do not use line above

    return (
        <div>
            {props.results.map(result => {
                return (
                    <div key={result.id}>

                    <Card style={{width: "300px"}}>
                            <CardBody>
                                <CardTitle tag="h5" className="text"><strong className="text-muted">Title:</strong> {result.volume.name}</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">
                                    {/* <strong>Volume:</strong> {result.volume} */}
                                </CardSubtitle>
                            </CardBody>
                            <CardImg top width="100%" src={result.image.small_url} alt={result.volume.name} />
                            <CardBody>
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

export default HomeChild