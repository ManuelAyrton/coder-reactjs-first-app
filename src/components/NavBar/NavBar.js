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
                        <Link className="liLinks dropdown-item" to="products/tops">Prendas Superiores</Link>
                        <Link className="liLinks dropdown-item" to="products/bottoms">Prendas Inferiores</Link>
                        <Link className="liLinks dropdown-item" to="products/accessories">Accesorios</Link>
                    </NavDropdown>
                    <Nav.Link>Sobre nosotros</Nav.Link>
                    <Button id="contactoButton">Contacto</Button>
                    <CartWidget />
                </Navbar.Collapse>
            </Navbar>
        </>

    )
}

