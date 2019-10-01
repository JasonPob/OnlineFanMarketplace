import React from 'react';
import { Component } from 'react';
import './Header.css'
import { Navbar, NavDropdown, Form, FormControl, Container } from 'react-bootstrap';

class Header extends Component {

    render() {
        return (
            <>
                <Navbar bg="light" variant="light" fixed="top">
                    <Container>
                        <Navbar.Text>
                            Joole
                        </Navbar.Text>
                        <NavDropdown title="HVAC Fans" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Form inline >
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        </Form>
                        <Navbar.Text>
                            UserIDComponent
                    </Navbar.Text>

                    </Container>
                </Navbar>
            </>

        )
    }
}

export { Header };
