import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css'

const Location = ({ data, location }) => {
  
  return (
    <Layout location={location} title={'BCOA'}>
      <Seo title="Location" />
      <ol style={{ listStyle: `none`, padding: '0px', margin: '20px' }}>
        <h3>How to Find us</h3>
        <p style={{ paddingTop: `20px` }}>MAP ETC TO GO HERE.</p>


        <p>From junction 22 of the M5, follow signs for Burhnam-On-Sea where you will
          cross the A38 at the Edithmead Roundabout.
          As you head into Burnham-On-Sea you will pass over a railway bridge. Take
          the third exit at the roundabout into Love Lane (following signs for BASC
          campsite).
          Follow the road through a sharp left hand bend and turn right into the BASC
          ground.</p>
        <p>For details on how to reach our field once in the BASC ground, please see
          map below. Please remember to observe the 5mph speed limit that is there
          for everyone's safety.
        </p>
        <p>Please also note that BASC have a No Dogs policy anywhere on the site (except guide dogs)
        </p>


      </ol>
    </Layout>
  )
}

export default Location