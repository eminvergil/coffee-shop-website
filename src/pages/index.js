import React from "react"
import { Link , graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BackgroundSection from "../components/Globals/background";
import Info from "../components/Home/info";
import Menu from "../components/Home/menu";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection 
    img={data.img.childImageSharp.fluid} 
    title="coffee shop" 
    // styleClass="default-background"
    />
    <Info/>
    <Menu items={data.menu} />
  </Layout>
)

export const query = graphql`
  {
    img:file(relativePath:{eq:"back2.jpg"}){
    childImageSharp{
      fluid{
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menu: allContentfulCoffeeItem
    {
      edges
      {
        node
        {
          id
          title
          description {
            description
          }
          price
          category
          image{
            fixed(width:50,height:50){
              ...GatsbyContentfulFixed_noBase64
            }
          }
        }
      }
    }
  }
`;

export default IndexPage


