import * as React from "react"
import { Link } from "gatsby"
import Navbar from "./navbar"
import {Container} from "react-bootstrap"

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
    <Container id="nav-container">
    <div>
      <Navbar />
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header"></header>
      
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
    </div>
    </Container>
  )
}

export default Layout
