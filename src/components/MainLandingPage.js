import React from 'react'
import FilterSearch from './FilterSearch'
import slider4 from '../img/slider/slider4.jpg'

const MainLandingPage = () => {
  return (
    <section
  className="main-banner-wrap1 main-banner-wrap5"
  style = {{backgroundImage: `url(${slider4})`}}
>
  <div className="container">
    <div className="row">
      <div className="col-xl-12">
        <div className="main-banner-box1 main-banner-box5">
          <h1 className="item-title wow fadeInUp" data-wow-delay=".4s">
            Let's find the perfect place
          </h1>
          <div  className="banner-search-wrap">
            <FilterSearch />
            <p className="item-para wow fadeInUp" data-wow-delay=".4s">
              We’ve more than <span className="banner-p">54,000</span>{" "}
              apartments, place &amp; plot.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default MainLandingPage;
