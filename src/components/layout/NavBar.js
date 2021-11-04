import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'


export default function NavBar() {
    return (
        <Container>
            <Navbar className="headerContainer" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="brand">ALMOST</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Nav className=" appHeader">
                            <NavDropdown title="PRODUCTOS" id="basic-nav-dropdown active">
                                <NavDropdown.Item href="#todosLosProductos">TODOS LOS PRODUCTOS</NavDropdown.Item>
                                <NavDropdown.Item href="#recienIngresados">RECIEN INGRESADOS</NavDropdown.Item>
                                <NavDropdown.Item href="#sale">SALE</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#sobreNosotros" >SOBRE NOSOTROS</Nav.Link>
                            <Nav as="a"id="contactoButton" href="#contacto">CONTACTO</Nav>
                        </Nav>
                </Container>
            </Navbar>
        </Container>

        // <div className="headerContainer">
        //     <nav className="appHeader">
        //         <div href="#" className="brand">ALMOST</div>
        //         <ul className="Links">
        //             <a href="#">SOBRE NOSOTROS</a>
        //             <a href="#" id="contactoButton">CONTACTO</a>
        //         </ul>
        //     </nav>
        // </div>

    )
}

