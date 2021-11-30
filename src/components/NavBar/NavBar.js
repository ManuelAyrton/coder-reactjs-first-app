import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './NavBar.scss'
import { CartWidget } from '../CartWidget/CartWidget.js'
import { Link } from 'react-router-dom'
import Button from '@restart/ui/esm/Button'


export default function NavBar() {
    return (

        <>
            <Navbar className="headerContainer" expand="lg">
                <div><Link to="/" className="brand">ALMOST</Link></div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <NavDropdown title="Productos" id="basic-nav-dropdown">
                        <NavDropdown.Item className="liContainer" ><Link className="liLinks" to="products/tops">Prendas Superiores</Link></NavDropdown.Item>
                        <NavDropdown.Item className="liContainer" ><Link className="liLinks" to="products/bottoms">Prendas Inferiores</Link></NavDropdown.Item>
                        <NavDropdown.Item className="liContainer" ><Link className="liLinks" to="products/accessories">Accesorios</Link></NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link>Sobre nosotros</Nav.Link>
                    <Button id="contactoButton">Contacto</Button>
                    <CartWidget />
                </Navbar.Collapse>
            </Navbar>
        </>

    )
}

