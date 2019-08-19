import React from 'react'

import {Link} from "gatsby"
import Title from "../Globals/title"

export default function info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title
        title="OUR STORY"
        />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
            One of the most common mistakes that students make when attempting to use a paragraph paraphraser is that they try to paraphrase groups of words or use one sentence at a time. The key is to look at the full paragraph. Read it carefully and then rewrite the paragraph in your own words. In this way, you are able fully paraphrase a paragraph. Paraphrase tool does not do this for in a way that retains the main idea of the paragraph.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
