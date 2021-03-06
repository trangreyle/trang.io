import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import styles from "../styles/index.module.css"
import "../styles/global.css"
import Layout from "../components/layout"

export const query = graphql`
  query {
    mobileImage: file(relativePath: { eq: "cover-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tabletImage: file(relativePath: { eq: "cover-tablet.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    desktopImage: file(
      relativePath: { eq: "cover.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
//why is it export default data here
//ah nvm maybe sth to do with the API
export default ({ data }) => {
  // Set up the array of image data and `media` keys.
  // You can have as many entries as you'd like.
  const sources = [
    {
      ...data.mobileImage.childImageSharp.fluid,
      media: `(max-width: 414px)`
    },
    {
      ...data.tabletImage.childImageSharp.fluid,
      media: `(max-width: 991px)`
    },
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: `(min-width: 992px)`,
    },
  ]
  return (
    <Layout>
      <div className = {styles.container}>
        <Img 
            className = {styles.coverPhoto}
            fluid={sources}
            style={{"position": "relative"}}
            object-fit = "contain"
            alt="A drawing of a girl"/>
        <div className = {styles.topChunk}>
          <h1 className={styles.introText}>
              This is Trang.<br/>I bring art to heal the world.
          </h1>
          <div className={styles.socialMediaBar}>
            <a href="https://dribbble.com/trangrei"><img className={styles.icon} src="assets/imgs/icons/dribbble.svg"/></a>
            <a href="https://www.linkedin.com/in/trangrei/"><img className={styles.icon} src="assets/imgs/icons/linkedin.svg"/></a>
            <a href="https://github.com/trangrei"><img className={styles.icon} src="assets/imgs/icons/github.svg"/></a>
            {/*<img className={styles.icon} src="assets/imgs/icons/email.svg"/>*/}
          </div>
        </div>
      </div>
    </Layout>
  )
}