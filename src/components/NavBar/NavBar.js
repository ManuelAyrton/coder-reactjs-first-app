import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './NavBar.scss'
import { CartWidget } from '../CartWidget/CartWidget.js'


export default function NavBar() {
    return (

        <>
            <Navbar className="headerContainer" expand="lg">
                <Navbar.Brand href="#home" className="brand">ALMOST</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className=" appHeader">
                    <NavDropdown title="PRODUCTOS" id="basic-nav-dropdown active">
                        <NavDropdown.Item href="#todosLosProductos">TODOS LOS PRODUCTOS</NavDropdown.Item>
                        <NavDropdown.Item href="#recienIngresados">RECIEN INGRESADOS</NavDropdown.Item>
                        <NavDropdown.Item href="#sale">SALE</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#sobreNosotros">SOBRE NOSOTROS</Nav.Link>
                    <Nav as="a" id="contactoButton" href="#contacto">CONTACTO</Nav>
                </Nav>
                <CartWidget />
            </Navbar>
        </>

    )
}

