import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Overlay } from "react-bootstrap"

const Contact = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Contact" />
      <ol align="center" id="contacts">
        <h3>Contact Us</h3>
        <p>Please feel free to contact us using the email addresses below.</p>
        <h6><b>Chairman</b> - Chris Hole</h6>
        <p>Email: <a href="mailto:chairman@burnhamcompanyofarchers.co.uk">chairman@burnhamcompanyofarchers.co.uk</a></p>
        <h6><b>Secretary</b> - Adam Joyce</h6>
        <p>Email: <a href="mailto:secretary@burnhamcompanyofarchers.co.uk">secretary@burnhamcompanyofarchers.co.uk</a></p>
        <h6><b>Treasurer</b> - Pete Ruddock</h6>
        <p>Email: <a href="mailto:treasurer@burnhamcompanyofarchers.co.uk">treasurer@burnhamcompanyofarchers.co.uk</a></p>
        <h6><b>Records Officer</b> - Paul Tipper</h6>
        <p>Email: <a href="mailto:records@burnhamcompanyofarchers.co.uk">records@burnhamcompanyofarchers.co.uk</a></p>
        <h6><b>Tournament Officer</b> - Liam Goodes</h6>
        <p>Email: <a href="mailto:tournaments@burnhamcompanyofarchers.co.uk">tournaments@burnhamcompanyofarchers.co.uk</a></p>
        <h6><b>Instructor - Beginners</b> - Nigel Dives</h6>
        <p>Email: <a href="mailto:beginners@burnhamcompanyofarchers.co.uk">beginners@burnhamcompanyofarchers.co.uk</a></p>
        <h6><b>Safeguarding Officer</b> - Hayley Goodes</h6>
        <p>Email: <a href="mailto:safeguarding@burnhamcompanyofarchers.co.uk">safeguarding@burnhamcompanyofarchers.co.uk</a></p>
        <h6><b>Equipment Officer</b> - Overlin Vidal</h6>
        <p>Email: <a href="mailto:equipment@burnhamcompanyofarchers.co.uk">equipment@burnhamcompanyofarchers.co.uk</a></p>
        <h6><b>Webmaster</b> - Aaron Cardwell</h6>
        <p>Email: <a href="mailto:aaron_cardwell@hotmail.co.uk">webmaster@burnhamcompanyofarchers.co.uk</a></p>
      </ol>
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
