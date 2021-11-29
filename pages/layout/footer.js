import React from 'react'
import {Row, Col, Container } from 'react-bootstrap'

export default function Footer() {
    return(
        <footer>
            <Container>
                <Row>
                    <Col>História</Col>
                    <Col>Menu 1</Col>
                    <Col>Menu 2</Col>
                    <Col>Social</Col>
                </Row>
                <Row className="footer__copy">
                    <Col>COPYRIGHT © 1991 - 2021, Igreja Evangélica Fluminense.</Col>
                </Row>
            </Container>
        </footer>
    )
}
