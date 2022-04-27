import * as React from "react"
import Navbar from "./navbar"
import Sidebar from "./sidebar"
import SideGallery from "./side_gallery"
import {Container, Col, Row} from "react-bootstrap"

const Layout = ({ location, title, children }) => {

  return (
    // <div id="global-wrapper" className="global-wrapper">
    <>
    <Container id="nav-container">
      <Navbar />
    </Container>
    <Container id="main-container">
      <Row id="fix-row">
        <Col sm id="sidebar-col">
          <Container id="sidebar-container">
            <Sidebar />
          </Container>
        </Col>        
        <Col sm fluid id="news-col">
          <Container id="news-container">
            <Row>
              <main>{children}</main>
            </Row>
          </Container>
          <Container id="footer-container">
            <footer class="text-center">
              © BCOA {new Date().getFullYear()} Website designed and created by <a href="mailto:aaron_cardwell@hotmail.com">Aaron Cardwell</a> 
            </footer>
          </Container>
        </Col>
        <Col sm id="sidebar-col">
          <Container id="sidebar-container">
            <SideGallery />
          </Container>
        </Col>  
      </Row>
    </Container>
    </>
    // </div>

  )
}

export default Layout
