import React from 'react'
import { Card } from 'react-bootstrap';

const CustomCard = props => {
    return (
        <div>
            <Card className="text-center mr-2">
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.children}
                    </Card.Text>
                    <Card.Text>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CustomCard;