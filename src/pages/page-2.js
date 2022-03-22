import * as React from "react"
import BackgroundVideo from "../components/BackgroundVideo"
import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Home" />
    <BackgroundVideo poster={''}>
        {'https://ucarecdn.com/f252fa50-8a88-471e-8a38-027617707810/yt5scomAnimationCaffeinated2019DemoReel360p.mp4' && <source src={'https://ucarecdn.com/f252fa50-8a88-471e-8a38-027617707810/yt5scomAnimationCaffeinated2019DemoReel360p.mp4'} type="video/mp4" />}
      </BackgroundVideo>
  </Layout>
)

export default SecondPage
