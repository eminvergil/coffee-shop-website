import React from "react"
import { Link , graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BackgroundSection from "../components/Globals/background";
import Info from "../components/Home/info";

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="About" />
    <BackgroundSection 
    img={data.img.childImageSharp.fluid} 
    title="about us" 
    styleClass="about-background"
    />
    <Info/>
  </Layout>
)

export const query = graphql`
  {
    img:file(relativePath:{eq:"back1.jpg"}){
    childImageSharp{
      fluid{
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default AboutPage
