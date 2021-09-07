import {Link} from "react-router-dom";

import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

const HomeChild = (props) => {
    const {name, description, image, id, cover_date, issue_number} = props.comic;

    return (
        <div className="main">
            <Card>
                <CardImg top width="50%" src={image} alt={name} />
                <CardBody>
                    <CardTitle tag="h5">{name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{id}</CardSubtitle>
                    <CardText>
                        Issue Number: {issue_number}<br />
                        Cover Date: {cover_date}<br />
                        Description: {description}
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default Home;