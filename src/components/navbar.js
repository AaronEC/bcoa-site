// import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Navbar, Nav, Image, Row, Col} from "react-bootstrap"
import * as React from "react"
import banner from "../images/banner.jpg"

const NavigatonBar = () => {
  return (
    <>
      <Container id="top-nav" fluid>
        <div class="text-center">
          <h6 class="display-6 text-white">Burnham Company of Archers Club Website</h6>
        </div>
      </Container>
      <Image src={banner} fluid />
      <Navbar id="bottom-nav" variant="dark">
        <div class="md-auto">
        <Container>
        {/* <Navbar.Brand href="#home">Burnham Company of Archers Club Website</Navbar.Brand> */}
          <Navbar.Toggle />
          <Navbar.Collapse id="responsive-navbar-nav" class="text.right">
            <Nav class="navbar-nav justify-content-center">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link eventKey={2} href="#about">
                Beginners
              </Nav.Link>
              <Nav.Link eventKey={3} href="#about">
                Events
              </Nav.Link>
              <Nav.Link eventKey={4} href="#about">
                Finding Us
              </Nav.Link>
              <Nav.Link eventKey={5} href="#about">
                Gallery
              </Nav.Link>
              <Nav.Link eventKey={6} href="#about">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        </div>
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