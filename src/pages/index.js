import * as React from "react"
import BackgroundVideo from "../components/BackgroundVideo"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <BackgroundVideo poster={'https://ucarecdn.com/f3660a13-b4b8-432b-99ea-31999bfea889/'}>
        {<source src={'https://ucarecdn.com/f252fa50-8a88-471e-8a38-027617707810/yt5scomAnimationCaffeinated2019DemoReel360p.mp4'} type="video/mp4" />}
      </BackgroundVideo>
  </Layout>
)

export default IndexPage
