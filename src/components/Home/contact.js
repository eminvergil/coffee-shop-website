import React from 'react';
import Title from "../Globals/title";



export default function contact() {
  return (
    <section className="contact py-5">
      <Title title="contact us"/>
      <div className="row">
        <div className="col-10 col-sm-6 col-lg-4 col-md-6 mx-auto">
          <form action="">
            {/* name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" name="name" id="name" placeholder="john smith"/>
            </div>
            {/* email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" className="form-control" name="email" id="email" placeholder="johnsmith@gmail.com"/>
            </div>
            {/* description */}
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea name="description" id="description" className="form-control" rows="5" placeholder="your description goes here."></textarea>
            </div>
            {/* submit */}
            <button type="submit" className="btn-block mt-5 btn-info text-capitalize btn">
              submit
            </button>
          </form>
        </div>
      </div>
    </section>    
  )
}
