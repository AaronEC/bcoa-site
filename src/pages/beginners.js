import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css'
import { pathPrefix } from "../../gatsby-config"

const Beginners = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Beginners" />
      <ol style={{ listStyle: `none`, padding: '0px', margin: '20px'}}>
      <h3>Beginners Courses</h3>
        <div class="content2" style={{ paddingTop: `20px` }}>
          <p><b>Thinking of Having a go?</b>
          </p><p>We are a friendly group of people so please don't be afraid to come along.</p>
          <p>The system is simple -
            Apply to go on one of our courses (See below for details and our application form), then attend the regulation six lessons
            that make you eligible to become a member. We supply all of the equipment
            for the beginners courses so just come along and have some fun.</p>
          <p><b>Who can enjoy Archery?</b></p>
          <p>Young and old alike can come and have a go, We already have a vast range
            of abilities and age groups within our club that make the most of our facilities.
            Be prepared for some rib tickling (it's what we're good at). The only sensible
            bit is safety (we do take that seriously)</p>
          <img class="image" width="100%" src={pathPrefix + "/beginnersbanner.jpg"}></img>
          <p><b>Course Details</b></p>
          <p>Courses are run throughout the year on Saturday mornings. During winter months these are held at our indoor shooting range (Puriton Sports Centre).</p>
          <p>They are made up of 6 consecutive weeks costing GBP 60 per person for the
            whole course. For details you can email us at <a href="mailto:beginners@burnhamcompanyofarchers.co.uk">beginners@burnhamcompanyofarchers.co.uk</a> or you can apply to join the course by completing the <a href="BeginnersAppForm2019.pdf" target="_blank">application form - Click Here</a></p>
          <p>Perhaps this is an ideal Christmas or Birthday present for the person with everything!</p>
        </div>
      </ol>
    </Layout>
  )
}

export default Beginners

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
