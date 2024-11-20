import React from 'react';

import { Fragment } from "react";
import { Link } from "react-router-dom"
import "./jobCareer.css"
import { Card } from "react-bootstrap";

const CareerPage = () => {
    return (
        <Fragment>
            <div className="career">
                <div className="car-ind">
                    {/* <Link to="/bdeCareerForm">Business Development Executive</Link> */}
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title><Link to="/bdeCareerForm">Business Development Executive</Link></Card.Title>
                            {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                            <Card.Text>
                                The Business Development Executive will be responsible for new business development and overall business growth.
                            </Card.Text>
                            {/* <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link> */}
                        </Card.Body>
                    </Card>
                </div>
                <div className="car-ind">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title><Link to="/bdeIntern">BDE Intern</Link></Card.Title>
                            {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                            <Card.Text>
                                The internship program For Business Development Executive is set for a period of 3 months where in the interns will be trained.
                            </Card.Text>
                            {/* <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link> */}
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </Fragment>
    )
}

export default CareerPage;