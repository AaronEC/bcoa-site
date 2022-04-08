import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css'

const Events = ({ data, location }) => {
  const siteTitle = 'title'

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About" />
      <ol style={{ listStyle: `none`, padding: '0px', paddingLeft: '30px', margin: '20px' }}>
        <h3 style={{ paddingBottom: `20px` }}>Event Schedule</h3>
        <div class="tablestyle" id="eventstab">
          <table width="600">
            <tbody><tr bordercolor="#336633">
              <td width="250"><h5>Tournaments 2022</h5></td>
              <td width="130"><h5>Date</h5></td>
              <td width="101"><h5>Entry Form</h5></td>
              <td width="89"><h5>Results</h5></td>
            </tr>
              <tr bordercolor="#336633">
                <td>May Open</td>
                <td>29th May 2022</td>
                <td><a href="tournaments/EF2022MayOpen.pdf" target="_blank">Click Here</a></td>
                <td></td>
              </tr>
              <tr bordercolor="#336633">
                <td width="250"><h5>Tournaments 2020</h5></td>
                <td width="130"><h5>Date</h5></td>
                <td width="101"><h5>Entry Form</h5></td>
                <td width="89"><h5>Results</h5></td>
              </tr>
              <tr bordercolor="#336633">
                <td>May Open York/Hereford/Bristols</td>
                <td>24th May 2020</td>
                <td><a href="tournaments/EF2020MayOpen.pdf" target="_blank">Click Here</a></td>
                <td></td>
              </tr>
              <tr bordercolor="#336633">
                <td>Novice Warwicks</td>
                <td>TBA</td>
                <td></td>
                <td></td>
              </tr>
              <tr bordercolor="#336633">
                <td>Halloween 'Chilli' Frostbite</td>
                <td>TBA</td>
                <td></td>
                <td></td>
              </tr>
              <tr bordercolor="#336633">
                <td width="250"><h5>Tournaments 2019</h5></td>
                <td width="130"><h5>Date</h5></td>
                <td width="101"><h5>Entry Form</h5></td>
                <td width="89"><h5>Results</h5></td>
              </tr>
              <tr bordercolor="#336633">
                <td>Winter 'Chilli' Frostbite</td>
                <td>3rd February 2019</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R 2019 Frostbite.pdf" target="_blank">Click Here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td>May York/Hereford/Bristols</td>
                <td>26th May 2019</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R2019MayOpen.pdf" target="_blank">Click Here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td>Novice Warwicks</td>
                <td>TBA</td>
                <td></td>
                <td></td>
              </tr>
              <tr bordercolor="#336633">
                <td>Halloween 'Chilli' Frostbite</td>
                <td>26th October 2019</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R2019DoubleFrostbite.pdf" target="_blank">Click Here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td width="250"><h5>Tournaments 2018</h5></td>
                <td width="130"><h5>Date</h5></td>
                <td width="101"><h5>Entry Form</h5></td>
                <td width="89"><h5>Results</h5></td>
              </tr>
              <tr bordercolor="#336633">
                <td>Spring h5H</td>
                <td>15th Apr 2018</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R2018_720h5H.pdf" target="_blank">Click Here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td>May Open</td>
                <td>20th May 2018</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R2018MayOpen.pdf" target="_blank">Click Here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td>Autumn Mixed</td>
                <td>7th October 2018</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R2018Albion.pdf" target="_blank">Click Here</a></td>
              </tr>

              <tr bordercolor="#336633">
                <td width="250"><h5>Tournaments 2017</h5></td>
                <td width="130"><h5>Date</h5></td>
                <td width="101"><h5>Entry Form</h5></td>
                <td width="89"><h5>Results</h5></td>
              </tr>
              <tr bordercolor="#336633">
                <td>Spring Longbow</td>
                <td>23rd Apr 2017</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R 2017 Spring Longbow.pdf" target="_blank">Click Here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td>May York/Hereford/Bristols</td>
                <td>21st May 2017</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R 2017 May Open.pdf" target="_blank">Click Here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td>Novice Warwicks</td>
                <td>16th July 2017</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R 2017 Novice Warwicks.pdf" target="_blank">Click Here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td>Autumn Mixed Albion/Windsor</td>
                <td>1st Oct 2017</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R 2017 Albion.pdf" target="_blank">Click Here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td width="250"><h5>Tournaments 2016</h5></td>
                <td width="130"><h5>Date</h5></td>
                <td width="101"><h5>Entry Form</h5></td>
                <td width="89"><h5>Results</h5></td>
              </tr>
              <tr bordercolor="#336633">
                <td>Spring Longbow</td>
                <td>17th Apr 2016</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R 2016 Spring Longbow.pdf" target="_blank">Click Here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td>May York/Hereford/Bristols</td>
                <td>22th May 2016</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R 2016 May Open.pdf" target="_blank">Click Here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td>Autumn Mixed Albion/Windsor</td>
                <td>2nd Oct 2016</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R 2016 Albion.pdf" target="_blank">Click Here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td width="250"><h5>Tournaments 2015</h5></td>
                <td width="130"><h5>Date</h5></td>
                <td width="101"><h5>Entry Form</h5></td>
                <td width="89"><h5>Results</h5></td>
              </tr>
              <tr bordercolor="#336633">
                <td>May York/Hereford/National</td>
                <td>24th May 2015</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R 2015 May Open.pdf" target="_blank">Click Here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td>Autumn Mixed Albion/Windsor</td>
                <td>11th Oct 2015</td>
                <td>Now Closed</td>
                <td></td>
              </tr>
              <tr bordercolor="#336633">
                <td width="250"><h5>Tournaments 2014</h5></td>
                <td width="130"><h5>Date</h5></td>
                <td width="101"><h5>Entry Form</h5></td>
                <td width="89"><h5>Results</h5></td>
              </tr>
              <tr bordercolor="#336633">
                <td>Spring Longbow</td>
                <td>27th Apr 2014</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R 2014 Spring Longbow.pdf" target="_blank">Click Here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td>May York/Hereford/National</td>
                <td>25th May 2014</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R 2014 May Open.pdf" target="_blank">Click Here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td>Autumn Longbow</td>
                <td>28th Sep 2014</td>
                <td>Now Closed</td>
                <td></td>
              </tr>
              <tr bordercolor="#336633">
                <td>Autumn Mixed Albion/Windsor</td>
                <td>12th Oct 2014</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R2014Albion.pdf" target="_blank">Click Here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td width="250"><h5>Tournaments 2013</h5></td>
                <td width="130"><h5>Date</h5></td>
                <td width="101"><h5>Entry Form</h5></td>
                <td width="89"><h5>Results</h5></td>
              </tr>
              <tr bordercolor="#336633">
                <td>Spring Longbow</td>
                <td>21st Apr 2013</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R 2013 Spring Longbow.pdf" target="_blank">Click Here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td>May York/Hereford/National</td>
                <td>26th May 2013</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R 2013 May Shoot.pdf" target="_blank">Click Here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td>Autumn Longbow</td>
                <td>29th Sep 2013</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R 2013 Autumn Longbow.pdf" target="_blank">Click Here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td>Autumn Mixed Albion/Windsor</td>
                <td>13th Oct 2013</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R 2013 Albion.pdf" target="_blank">Click Here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td width="250"><h5>Tournaments 2012</h5></td>
                <td width="130"><h5>Date</h5></td>
                <td width="101"><h5>Entry Form</h5></td>
                <td width="89"><h5>Results</h5></td>
              </tr>
              <tr bordercolor="#336633">
                <td>Spring Longbow</td>
                <td>22nd Apr 2012</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R%202012%20Spring%20Longbow.pdf" target="_blank">Click
                  Here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td>May York/Hereford/National</td>
                <td>27th May 2012</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R%202012%20May%20Shoot.pdf" target="_blank">Click
                  Here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td>Autumn Longbow</td>
                <td>30th Sep 2012</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R%202012%20Autumn%20Longbow.pdf" target="_blank">Click Here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td>Autumn Mixed Albion/Windsor</td>
                <td>14th Oct 2012</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R%202012%20Albion.pdf" target="_blank">Click here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td width="250"><h5>Tournaments 2011</h5></td>
                <td width="130"><h5>Date</h5></td>
                <td width="101"><h5>Entry Form</h5></td>
                <td width="89"><h5>Results</h5></td>
              </tr>
              <tr bordercolor="#336633">
                <td>Spring Longbow</td>
                <td>17th Apr 2011</td>
                <td>Now Closed </td>
                <td><a href="tournaments/R%202011%20Spring%20Longbow.pdf" target="_blank">Click
                  Here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td>May York/Hereford/National</td>
                <td>29th May 2011</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R%202011%20May%20Shoot.pdf" target="_blank">Click
                  Here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td>Autumn Longbow</td>
                <td>25th Sep 2011</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R%202011%20Autumn%20Longbow.pdf" target="_blank">Click
                  Here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td>Autumn Mixed Albion/Windsor</td>
                <td>9th Oct 2011</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R 2011 Albion.pdf" target="_blank">Click Here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td><h5>Tournaments 2010</h5></td>
                <td><h5>Date</h5></td>
                <td><h5>Entry Form</h5></td>
                <td><h5>Results</h5></td>
              </tr>
              <tr bordercolor="#336633">
                <td>Spring Longbow</td>
                <td>18th Apr 2010</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R%202010%20Spring%20Longbow.pdf" target="_blank">Click
                  Here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td>May York/Hereford/National</td>
                <td>30th May 2010</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R%202010%20May%20Shoot.pdf" target="_blank">Click
                  Here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td>Autumn Longbow</td>
                <td>26th Sep 2010</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R%202010%20Autumn%20Longbow.pdf" target="_blank">Click
                  Here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td>Autumn Mixed Albion/Windsor</td>
                <td>10th Oct 2010</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R%202010%20Albion.pdf" target="_blank">Click
                  Here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td><h5>Tournaments 2009</h5></td>
                <td><h5>Date</h5></td>
                <td><h5>Entry Form</h5></td>
                <td><h5>Results</h5></td>
              </tr>
              <tr bordercolor="#336633">
                <td>Spring Longbow</td>
                <td>19th Apr 2009</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R%202009%20Spring%20Longbow.pdf" target="_blank">Click
                  Here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td>May York/Hereford/National</td>
                <td>24th May 2009</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R%202009%20May%20Open.pdf" target="_blank">Click
                  Here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td>Autumn Longbow</td>
                <td>27th Sep 2009</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R%202009%20Autumn%20Longbow.pdf" target="_blank">Click
                  Here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td>Autumn Mixed Albion/Windsor</td>
                <td>11th Oct 2009</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R%202009%20Albion.pdf" target="_blank">Click
                  Here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td><h5>Tournaments 2008</h5></td>
                <td><h5>Date</h5></td>
                <td><h5>Entry Form</h5></td>
                <td><h5>Results</h5></td>
              </tr>
              <tr bordercolor="#336633">
                <td>Spring Longbow</td>
                <td>20th Apr 2008</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R%202008%20Spring%20Longbow.pdf" target="_blank">Click
                  Here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td>May York/Hereford/National</td>
                <td>25th May 2008</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R%202008%20May%20Open.pdf" target="_blank">Click
                  Here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td>Autumn Longbow</td>
                <td>28th Sep 2008</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R%202008%20Autumn%20Longbow.pdf" target="_blank">Click
                  Here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td>Autumn Albion</td>
                <td>12th Oct 2008</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R%202008%20Albion.pdf" target="_blank">Click
                  Here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td><h5>Tournaments 2007</h5></td>
                <td><h5>Date</h5></td>
                <td><h5>Entry Form</h5></td>
                <td><h5>Results</h5></td>
              </tr>
              <tr bordercolor="#336633">
                <td>Spring Longbow</td>
                <td>29th Apr 2007</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R%202007%20Spring%20Longbow.pdf" target="_blank">Click
                  Here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td>May York/Hereford/National</td>
                <td>27th May 2007</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R%202007%20May%20Open.pdf" target="_blank">Click
                  Here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td>Autumn Longbow</td>
                <td>23rd Sep 2007</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R%202007%20Autumn%20Longbow.pdf" target="_blank">Click
                  Here</a></td>
              </tr>
              <tr bordercolor="#336633">
                <td>Autumn Albion</td>
                <td>14th Oct 2007</td>
                <td>Now Closed</td>
                <td><a href="tournaments/R%202007%20Albion.pdf" target="_blank">Click
                  Here</a></td>
              </tr>
            </tbody></table>
        </div>
      </ol>
    </Layout>
  )
}

export default Events