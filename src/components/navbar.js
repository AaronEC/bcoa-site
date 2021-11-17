// import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Navbar, Nav, Image, Row, Col} from "react-bootstrap"
import * as React from "react"
import banner from "../images/banner.jpg"

const NavigatonBar = () => {
  return (
    <>
      <Image src={banner} fluid />
      <Navbar id="top-nav" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Burnham Company of Archers Club Website</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse id="responsive-navbar-nav" class="text.right">
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavigatonBar
          // <Breadcrumb>
          //   <Breadcrumb.Item>TEST</Breadcrumb.Item>
          //   <Breadcrumb.Item>TEST</Breadcrumb.Item>
          //   <Breadcrumb.Item>TEST</Breadcrumb.Item>
          // </Breadcrumb>