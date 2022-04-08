import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css'

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About" />
      <ol style={{ listStyle: `none`, padding: '0px', margin: '20px'}}>
        <h3>About Us</h3>
        <p style={{ paddingTop: `20px` }}>Burnham Company of Archers was originally founded in the early seventies as "King Alfred's Bowmen".</p>
        <img class="image" width="100%" src="/aboutbanner.jpg" alt="BCOA Archers"></img>
        <p>In 1976/77 the club moved to its current location and became BCOA.</p>
        <p>We are a keen group of enthusiasts that enjoy fresh air and good company with a view to having fun along the way. The club welcomes all ages and abilities, so if you have ever thought about having a go at this fun and challenging sport then visit our beginners page for more information about giving archery a try.</p>
        <img class="image" width="100%" src="/aboutfooter.jpg" alt="Beginner Archers"></img>
      </ol>
    </Layout>
  )
}

export default About
