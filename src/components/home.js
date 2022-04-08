import * as React from "react"
import { Link } from "gatsby"
import Navbar from "./navbar"
import Sidebar from "./sidebar"
import SideGallery from "./side_gallery"
import {Container, Col, Row} from "react-bootstrap"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  // if (isRootPath) {
  //   header = (
  //     <h1 className="main-heading">
        
  //     </h1>
  //   )
  // } else {
  //   header = (
  //     <Link className="header-link-home" to="/">
        
  //     </Link>
  //   )
  // }

  

  return (
    // <div id="global-wrapper" className="global-wrapper" data-is-root-path={isRootPath}>
    <>
    <Container id="nav-container">
      <Navbar />
    </Container>
    <Container id="main-container">
      <Row id="fix-row">
        <Col sm id="sidebar-col" style={{ paddingRight: `10px` }}>
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
              © BCOA {new Date().getFullYear()}
            </footer>
          </Container>
        </Col>
        <Col sm id="sidebar-col" style={{ paddingLeft: `10px` }}>
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
