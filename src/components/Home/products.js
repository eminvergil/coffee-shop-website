import React from 'react';

import Product from "./product";
import Title from "../Globals/title";
import {StaticQuery,graphql} from "gatsby";

export default function products() {
  return (
    <div>
      <StaticQuery 
        query={getProduct} 
        
        render={data => {
          return (
            <section className="py-5">
              <div className="container">
                <Title title="our Products"/>
                <div className="row">
                  {data.products.edges.map(({node:product})=>{
                    return (
                    <Product 
                      key={product.id} 
                      product={product}/>
                    )
                  })}
                </div>
              </div>
            </section>
          )
        }}
        
      />
    </div>
  )
}

const getProduct = graphql`
{
  products:allContentfulCoffeeProduct{
    edges{
      node{
        id
        title
        price
        image{
          fluid(maxHeight:420){
            ...GatsbyContentfulFluid_noBase64
          }
        }
      }
    }
  }
}
`;