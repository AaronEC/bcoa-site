// import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Navbar, Nav, Image, Row, Col} from "react-bootstrap"
import * as React from "react"
import banner from "../images/banner.jpg"
import { pathPrefix } from "../../gatsby-config"

const NavigatonBar = () => {
  return (
    <>
      <Container id="top-nav" fluid>
        <div class="text-center">
          <h6 class="display-6 text-white">Burnham Company of Archers</h6>
        </div>
      </Container>
      <Image src={banner} fluid />
      <div class="text-center">
      <Navbar id="bottom-nav" collapseOnSelect expand="lg" variant="dark">
        <Container class="md-auto justify-content-center">
        {/* <Navbar.Brand href="#home">Burnham Company of Archers Club Website</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-center" style={{ flex: 1}}>
              <Nav.Link eventKey={1} href={pathPrefix + "/"}>
                Home
              </Nav.Link>
              <Nav.Link eventKey={2} href={pathPrefix + "/about"}>
                About
              </Nav.Link>
              <Nav.Link eventKey={3} href={pathPrefix + "/beginners"}>
                Beginners
              </Nav.Link>
              <Nav.Link eventKey={4} href={pathPrefix + "/events"}>
                Events
              </Nav.Link>
              <Nav.Link eventKey={5} href={pathPrefix + "/location"}>
                Location
              </Nav.Link>
              <Nav.Link eventKey={6} href={pathPrefix + "/gallery"}>
                Gallery
              </Nav.Link>
              <Nav.Link eventKey={7} href={pathPrefix + "/contact"}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    </>
  )
}

export default NavigatonBar