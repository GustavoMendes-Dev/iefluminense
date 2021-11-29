import React from 'react'
import Image from 'next/image'
import { Row, Col, Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';

import ImgLogo from '../../assets/images/logo.jpeg'

export default function Header() {
    return (
        <>
            <div className="headerTop">
                <Container>
                    <Row>
                        <Col><h6 className="headerTop__text">Seja bem vindo(a) à Igreja Evengélica Fluminense.</h6></Col>
                        <Col><h6 className="headerTop__text">Site | Secretaria Virtual</h6></Col>

                    </Row>
                </Container>
            </div>
            <Navbar
            className="header"
            // sticky="top"
            >
                <Container>
                <Navbar.Brand href="#home">
                    <img src="/assets/images/logo.jpeg" alt="sadas" />
                    {/* <Image
                        src="../../assets/images/logo.jpeg"
                        alt="Picture of the author"
                    /> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="header__menu">
                    <Nav.Link href="#">A Igreja</Nav.Link>
                    <Nav.Link href="#">História</Nav.Link>
                    <Nav.Link href="#">Departamentos</Nav.Link>
                    <Nav.Link href="#">Culto ao Vivo</Nav.Link>
                    <Nav.Link href="#">Notícias</Nav.Link>
                    <Nav.Link href="#">Contato</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    )
}
