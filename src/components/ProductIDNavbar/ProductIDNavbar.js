import React from 'react';
import { Component } from 'react';
import './ProductIDNavbar.css'
import { Nav, Navbar } from 'react-bootstrap';

class ProductIDNavbar extends Component {

    render() {
        return (
            <>

                <Navbar bg="light" variant="light">
                   
                    <Nav className="mr-auto">
                        <Nav.Link href="#pSummary">Product Summary</Nav.Link>
                        <Nav.Link href="#pDetails">Product Details</Nav.Link>
                        <Nav.Link href="#pDocumentation">Product Documentation</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                   
                </Navbar>
            </>
        )

    }

}

export { ProductIDNavbar };
