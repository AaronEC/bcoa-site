import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css'

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About" />
      <ol style={{ listStyle: `none` }}>
        <p style={{ paddingTop: `20px` }}>Burnham Company of Archers was originally founded in the early seventies as "King Alfred's Bowmen".</p>
        <p>In 1976/77 the club moved to its current location and became BCOA.</p>
        <p>We are a keen group of enthusiasts that enjoy fresh air and good company with a view to having fun along the way. The club welcomes all ages and abilities, so if you have ever thought about having a go at this fun and challenging sport then visit our beginners page for more information about giving archery a try.</p>
        
      </ol>
    </Layout>
  )
}

export default About

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
