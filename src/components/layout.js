import * as React from "react"
import { Link } from "gatsby"
import Navbar from "./navbar"
import Sidebar from "./sidebar"
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
    <div id="global-wrapper" className="global-wrapper" data-is-root-path={isRootPath}>
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
            <main>{children}</main>
          </Container>
        </Col>
      </Row>
    </Container>
    <Container id="footer-container">
      <footer class="text-center">
        © BCOA {new Date().getFullYear()}
      </footer>
    </Container>
    
</div>
  )
}

export default Layout
