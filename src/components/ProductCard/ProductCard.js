import React from 'react';
import { Component } from 'react';
import { Card, CardGroup, DropdownButton, ButtonGroup, Dropdown } from 'react-bootstrap';



class ProductCard extends Component {
    render() {
        return (
            <>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src="images.js/100px160" />
                        <Card.Body>
                            <Card.Title>Emerson Luray Eco Series CF860</Card.Title>
                            <Card.Text>
                                8,500 CFM
                                33 W at max speed
                                40 dBA at max speed
                                60" fan sweep diameter
                                Past specifications: 10 firm / 1492 global
                                </Card.Text>
                            <Card.Text>
                                <DropdownButton as={ButtonGroup} title="Add to" id="bg-nested-dropdown">
                                    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                                </DropdownButton>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src="images.js/100px160" />
                        <Card.Body>
                            <Card.Title>Emerson Luray Eco Series CF860</Card.Title>
                            <Card.Text>
                                8,500 CFM
                                33 W at max speed
                                40 dBA at max speed
                                60" fan sweep diameter
                                Past specifications: 10 firm / 1492 global
                                </Card.Text>
                            <Card.Text>
                                <DropdownButton as={ButtonGroup} title="Add to" id="bg-nested-dropdown">
                                    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                                </DropdownButton>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src="images.js/100px160" />
                        <Card.Body>
                            <Card.Title>Emerson Luray Eco Series CF860</Card.Title>
                            <Card.Text>
                                8,500 CFM
                                33 W at max speed
                                40 dBA at max speed
                                60" fan sweep diameter
                                Past specifications: 10 firm / 1492 global
                                </Card.Text>
                                <Card.Text>
                                <DropdownButton as={ButtonGroup} title="Add to" id="bg-nested-dropdown">
                                    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                                </DropdownButton>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src="images.js/100px160" />
                        <Card.Body>
                            <Card.Title>Emerson Luray Eco Series CF860</Card.Title>
                            <Card.Text>
                                8,500 CFM
                                33 W at max speed
                                40 dBA at max speed
                                60" fan sweep diameter
                                Past specifications: 10 firm / 1492 global
                                </Card.Text>
                                <Card.Text>
                                <DropdownButton as={ButtonGroup} title="Add to" id="bg-nested-dropdown">
                                    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                                </DropdownButton>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </>
        )
    }
}

export { ProductCard };