import React from 'react'
import homepic1 from '../img/blog/product4.jpg'
import homepic2 from '../img/blog/product2.jpg'
import homepic3 from '../img/blog/product3.jpg'
import homepic4 from '../img/blog/product4.jpg'
import homepic5 from '../img/blog/product5.jpg'
import homepic6 from '../img/blog/product6.jpg'
import homepic7 from '../img/blog/product7.jpg'
import homepic8 from '../img/blog/product8.jpg'
import homepic9 from '../img/blog/product9.jpg'
import homepic10 from '../img/blog/product10.jpg'
import homepic11 from '../img/blog/product11.jpg'
import logo from '../img/oyalogo.png'
import widget from '../img/blog/widget2.jpg'

const Home = () => {
  return (
 <div className="container">
    <div className="single-property">
      <div className="content-wrapper">
        <div className="property-heading">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="single-list-cate">
                <div className="item-categoery">For Rent</div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="single-list-price">$12,500</div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-12">
              <div className="single-verified-area">
                <div className="item-title">
                  <h3>
                    <a href="single-listing2.html">Family House For Rent</a>
                  </h3>
                </div>
              </div>
              <div className="single-item-address">
                <ul>
                  <li>
                    <i className="fas fa-map-marker-alt" />
                    House#18, Road#07, Albany, New York, 08525 /
                  </li>
                  <li>
                    <i className="fas fa-clock" />7 months ago /
                  </li>
                  <li>
                    <i className="fas fa-eye" />
                    Views: 1,230
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="side-button">
                <ul>
                  <li>
                    <a href="homes.com" className="side-btn">
                      <i className="flaticon-share" />
                    </a>
                  </li>
                  <li>
                    <a href="homes.com" className="side-btn">
                      <i className="flaticon-heart" />
                    </a>
                  </li>
                  <li>
                    <a href="homes.com" className="side-btn">
                      <i className="flaticon-left-and-right-arrows" />
                    </a>
                  </li>
                  <li>
                    <a href="homes.com" className="side-btn">
                      <i className="flaticon-printer" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div
              className="featured-thumb-slider-area wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="feature-box3 swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="feature-img1 zoom-image-hover">
                      <img
                        src={homepic1}
                        alt="feature"
                        width={798}
                        height={420}
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="feature-img1 zoom-image-hover">
                      <img
                        src={homepic3}
                        alt="feature"
                        width={798}
                        height={420}
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="feature-img1 zoom-image-hover">
                      <img
                        src={homepic11}
                        alt="feature"
                        width={798}
                        height={420}
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="feature-img1 zoom-image-hover">
                      <img
                        src={homepic5}
                        alt="feature"
                        width={798}
                        height={420}
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="feature-img1 zoom-image-hover">
                      <img
                        src={homepic6}
                        alt="feature"
                        width={798}
                        height={420}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="featured-thum-slider2 swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="item-img">
                      <img
                        src={homepic2}
                        alt="feature"
                        width={154}
                        height={100}
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="item-img">
                      <img
                        src={homepic7}
                        alt="feature"
                        width={154}
                        height={100}
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="item-img">
                      <img
                        src={homepic8}
                        alt="feature"
                        width={154}
                        height={100}
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="item-img">
                      <img
                        src={homepic9}
                        alt="feature"
                        width={154}
                        height={100}
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="item-img">
                      <img
                        src={homepic10}
                        alt="feature"
                        width={154}
                        height={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-listing-box1">
              <div className="overview-area">
                <h3 className="item-title">Overview</h3>
                <div className="gallery-icon-box">
                  <div className="item-icon-box">
                    <div className="item-icon">
                      <i className="flaticon-comment" />
                    </div>
                    <ul className="item-number">
                      <li>ID No :</li>
                      <li className="deep-clr">98560</li>
                    </ul>
                  </div>
                  <div className="item-icon-box">
                    <div className="item-icon">
                      <i className="flaticon-home" />
                    </div>
                    <ul className="item-number">
                      <li>Type :</li>
                      <li className="deep-clr">Apartment</li>
                    </ul>
                  </div>
                  <div className="item-icon-box">
                    <div className="item-icon">
                      <i className="flaticon-bed" />
                    </div>
                    <ul className="item-number">
                      <li>Bed Room :</li>
                      <li className="deep-clr">04</li>
                    </ul>
                  </div>
                  <div className="item-icon-box">
                    <div className="item-icon">
                      <i className="flaticon-shower" />
                    </div>
                    <ul className="item-number">
                      <li>ID No :</li>
                      <li className="deep-clr">98560</li>
                    </ul>
                  </div>
                </div>
                <div className="gallery-icon-box">
                  <div className="item-icon-box">
                    <div className="item-icon">
                      <i className="flaticon-home" />
                    </div>
                    <ul className="item-number">
                      <li>Parking :</li>
                      <li className="deep-clr">Yes</li>
                    </ul>
                  </div>
                  <div className="item-icon-box">
                    <div className="item-icon">
                      <i className="flaticon-home" />
                    </div>
                    <ul className="item-number">
                      <li>Area :</li>
                      <li className="deep-clr">1050 sqft</li>
                    </ul>
                  </div>
                  <div className="item-icon-box">
                    <div className="item-icon">
                      <i className="flaticon-pencil" />
                    </div>
                    <ul className="item-number">
                      <li>Land Size :</li>
                      <li className="deep-clr">15,000 sqft</li>
                    </ul>
                  </div>
                  <div className="item-icon-box">
                    <div className="item-icon">
                      <i className="flaticon-two-overlapping-square" />
                    </div>
                    <ul className="item-number">
                      <li>Year Build :</li>
                      <li className="deep-clr">2022</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="overview-area listing-area">
                <h3 className="item-title">About This Listing</h3>
                <p>
                  Praesent eros turpis, commodo vel justo at, pulvinar mollis
                  eros. Mauris aliquet eu quam id ornareor bi ac quam enim. Cras
                  vitae nulla condimentum, semper dolor non, faucibus dolor.
                  Vivamus adip iscing eros quis orci fringilla, sed pretium
                  lectus viverra. Pellentesque habitant morbi tristique senectus
                  et netus et malesuada fames ac turpis egestas.
                </p>
                <p>
                  Praesent eros turpis, commodo vel justo at, pulvinar mollis
                  eros. Mauris aliquet eu quam id ornareor bi ac quam enim. Cras
                  vitae nulla condimentum, semper dolor non, faucibus dolor.
                  Vivamus adip iscing eros quis orci fringilla, sed pretium
                  lectus viverra.
                </p>
              </div>
              <div className="overview-area single-details-box table-responsive">
                <h3 className="item-title">Details</h3>
                <table className="table-box1">
                  <tbody>
                    <tr>
                      <td className="item-bold">Id No</td>
                      <td>98560</td>
                      <td className="item-bold">Price</td>
                      <td>$12,500</td>
                    </tr>
                    <tr>
                      <td className="item-bold">Property Type</td>
                      <td>Apartment</td>
                      <td className="item-bold">Parking</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td className="item-bold">Rooms</td>
                      <td>04</td>
                      <td className="item-bold">Property Status</td>
                      <td>For Rent</td>
                    </tr>
                    <tr>
                      <td className="item-bold">Bath Rooms</td>
                      <td>03</td>
                      <td className="item-bold">Land Area</td>
                      <td>15,000 sqft</td>
                    </tr>
                    <tr>
                      <td className="item-bold">Size</td>
                      <td>1050 sqft</td>
                      <td className="item-bold">Year Build</td>
                      <td>2022</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="overview-area ameniting-box">
                <h3 className="item-title">Features &amp; Amenities</h3>
                <div className="row">
                  <div className="col-lg-4">
                    <ul className="ameniting-list">
                      <li>
                        <i className="fas fa-check-circle" />
                        TV Cable
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        Air Conditioning
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        Barbeque
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        Gym
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4">
                    <ul className="ameniting-list">
                      <li>
                        <i className="fas fa-check-circle" />
                        Swimming Pool
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        Laundry
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        Microwave
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        Lawn
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4">
                    <ul className="ameniting-list">
                      <li>
                        <i className="fas fa-check-circle" />
                        Sauna
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        Window Coverings
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        CC Camera
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="overview-area map-box">
                <h3 className="item-title">Map Location</h3>
                <div className="item-map">
                </div>
              </div>
              <div className="overview-area floor-plan-box">
                <h3 className="item-title">Floor Plans</h3>
                <div id="accordion" className="accordion">
                  <div className="card">
                    <div className="card-header">
                      <div
                        className="heading-title"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        role="button"
                      >
                        <span>First Floor Plan</span>
                        <div className="card-list">
                          <ul>
                            <li>
                              <i className="flaticon-bed" />
                              <span>Beds: 03</span>
                            </li>
                            <li>
                              <i className="flaticon-shower" />
                              <span>Baths: 02</span>
                            </li>
                            <li>
                              <i className="flaticon-two-overlapping-square" />
                              <span>931Sqft</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      data-bs-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="item-img">
                          <img src="img/figure/floor_plan.jpg" alt="shape" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <div
                        className="heading-title collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#headingtwo"
                        aria-expanded="true"
                        role="button"
                      >
                        <span>Second Floor Plan</span>
                        <div className="card-list">
                          <ul>
                            <li>
                              <i className="flaticon-bed" />
                              <span>Beds: 03</span>
                            </li>
                            <li>
                              <i className="flaticon-shower" />
                              <span>Baths: 02</span>
                            </li>
                            <li>
                              <i className="flaticon-two-overlapping-square" />
                              <span>931Sqft</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      id="headingtwo"
                      className="collapse"
                      data-bs-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="item-img">
                          <img src="img/figure/floor_plan.jpg" alt="shape" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <div
                        className="heading-title collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#headingthree"
                        aria-expanded="true"
                        role="button"
                      >
                        <span>Third Floor Plan</span>
                        <div className="card-list">
                          <ul>
                            <li>
                              <i className="flaticon-bed" />
                              <span>Beds: 03</span>
                            </li>
                            <li>
                              <i className="flaticon-shower" />
                              <span>Baths: 02</span>
                            </li>
                            <li>
                              <i className="flaticon-two-overlapping-square" />
                              <span>931Sqft</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      id="headingthree"
                      className="collapse"
                      data-bs-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="item-img">
                          <img src="img/figure/floor_plan.jpg" alt="shape" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overview-area video-box1">
                <h3 className="item-title">Property Video</h3>
                <div className="item-img">
                  <img
                    src="img/blog/listing1.jpg"
                    alt="map"
                    width={731}
                    height={349}
                  />
                  <div className="play-button">
                    <div className="item-icon">
                      <a
                        href="http://www.youtube.com/watch?v=1iIZeIy7TqM"
                        className="play-btn play-btn-big"
                      >
                        <span className="play-icon style-2">
                          <i className="fas fa-play" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overview-area nearby-area">
                <h3 className="item-title">Kalamridha Nearby Places</h3>
                <div className="nearby-box">
                  <div className="media d-flex">
                    <div className="flex-shrink-0">
                      <div className="item-icon">
                        <i className="fas fa-heartbeat" />
                      </div>
                    </div>
                    <div className="media-body flex-grow-1 ms-3">
                      <h4 className="small-title">Health &amp; Medical</h4>
                      <div className="row">
                        <div className="col-lg-8">
                          <ul>
                            <li>
                              Born Knowing Birth and Lactation Support (12.61
                              miles)
                            </li>
                            <li>Tapestry Birth Collective (14.38 miles)</li>
                            <li>Susan Cutter Healing Arts (7.75 miles)</li>
                          </ul>
                        </div>
                        <div className="col-lg-4">
                          <div className="rating-area">
                            <ul className="item-rating">
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                            </ul>
                            <div className="item-number">(05 Reviews)</div>
                          </div>
                          <div className="rating-area">
                            <ul className="item-rating">
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                            </ul>
                            <div className="item-number">(05 Reviews)</div>
                          </div>
                          <div className="rating-area">
                            <ul className="item-rating">
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                            </ul>
                            <div className="item-number">(05 Reviews)</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nearby-box nearby-box-2">
                  <div className="media d-flex">
                    <div className="flex-shrink-0">
                      <div className="item-icon">
                        <i className="fas fa-utensils" />
                      </div>
                    </div>
                    <div className="media-body flex-grow-1 ms-3">
                      <h4 className="small-title">Restaurants</h4>
                      <div className="row">
                        <div className="col-lg-8">
                          <ul>
                            <li>
                              Born Knowing Birth and Lactation Support (12.61
                              miles)
                            </li>
                            <li>Tapestry Birth Collective (14.38 miles)</li>
                            <li>Susan Cutter Healing Arts (7.75 miles)</li>
                          </ul>
                        </div>
                        <div className="col-lg-4">
                          <div className="rating-area">
                            <ul className="item-rating">
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                            </ul>
                            <div className="item-number">(05 Reviews)</div>
                          </div>
                          <div className="rating-area">
                            <ul className="item-rating">
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                            </ul>
                            <div className="item-number">(05 Reviews)</div>
                          </div>
                          <div className="rating-area">
                            <ul className="item-rating">
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                            </ul>
                            <div className="item-number">(05 Reviews)</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nearby-box nearby-box-3">
                  <div className="media d-flex">
                    <div className="flex-shrink-0">
                      <div className="item-icon">
                        <i className="fas fa-graduation-cap" />
                      </div>
                    </div>
                    <div className="media-body flex-grow-1 ms-3">
                      <h4 className="small-title">Education</h4>
                      <div className="row">
                        <div className="col-lg-8">
                          <ul>
                            <li>
                              Born Knowing Birth and Lactation Support (12.61
                              miles)
                            </li>
                            <li>Tapestry Birth Collective (14.38 miles)</li>
                            <li>Susan Cutter Healing Arts (7.75 miles)</li>
                          </ul>
                        </div>
                        <div className="col-lg-4">
                          <div className="rating-area">
                            <ul className="item-rating">
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                            </ul>
                            <div className="item-number">(05 Reviews)</div>
                          </div>
                          <div className="rating-area">
                            <ul className="item-rating">
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                            </ul>
                            <div className="item-number">(05 Reviews)</div>
                          </div>
                          <div className="rating-area">
                            <ul className="item-rating">
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                            </ul>
                            <div className="item-number">(05 Reviews)</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-video">
                <h3 className="item-title">360° Virtual Tour</h3>
                <div id="panorama">
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 widget-break-lg sidebar-widget">
            <div className="widget widget-contact-box">
              <h3 className="widget-subtitle">Contact Agent</h3>
              <div className="media d-flex">
                <div className="flex-shrink-0">
                  <div className="item-logo">
                    <img
                      src={logo}
                      alt="logo"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div className="media-body flex-grow-1 ms-3">
                  <h4 className="item-title">Oyalist</h4>
                  <div className="item-phn">
                    + 223 332 6XXX{" "}
                    <a href="single-listing1.html">
                      <span>(Show)</span>
                    </a>
                  </div>
                  <div className="item-mail">oyalist@oyalist.com</div>
                  <div className="item-rating">
                    <ul>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li className="rating-count">(Reviews 15)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <ul className="wid-contact-button">
                <li>
                  <a href="contact.html">
                    <i className="fas fa-comment" />
                    Quick Chat
                  </a>
                </li>
                <li>
                  <a href="contact.html">
                    <i className="fas fa-share-alt" />
                    Share
                  </a>
                </li>
              </ul>
              <form className="contact-box rt-contact-form">
                <div className="row">
                  <div className="form-group col-lg-12">
                    <input
                      type="text"
                      className="form-control"
                      name="fname"
                      placeholder="Your Full Name"
                      data-error="First Name is required"
                      required=""
                    />
                  </div>
                  <div className="form-group col-lg-12">
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      placeholder="Phone"
                      data-error="Phone is required"
                      required=""
                    />
                  </div>
                  <div className="form-group col-lg-12">
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      placeholder="E-mail"
                      data-error="Phone is required"
                      required=""
                    />
                  </div>
                  <div className="form-group col-lg-12">
                    <textarea
                      name="comment"
                      id="message"
                      className="form-text"
                      placeholder="Message"
                      cols={30}
                      rows={4}
                      data-error="Message Name is required"
                      required=""
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group col-lg-12">
                    <div className="advanced-button">
                      <button type="submit" className="item-btn">
                        Send Message <i className="fas fa-search" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="form-response" />
              </form>
            </div>
            <div className="widget widget-listing-box1">
              <h3 className="widget-subtitle">Latest Listing</h3>
              <div className="item-img">
                <a href="single-listing2.html">
                  <img
                    src={widget}
                    alt="widget"
                    width={540}
                    height={360}
                  />
                </a>
                <div className="item-category-box1">
                  <div className="item-category">For Rent</div>
                </div>
              </div>
              <div className="widget-content">
                <div className="item-category10">
                  <a href="single-listing2.html">Villa</a>
                </div>
                <h4 className="item-title">
                  <a href="single-listing2.html">
                    Modern Villa for House Highland Ave Los Angeles
                  </a>
                </h4>
                <div className="location-area">
                  <i className="flaticon-maps-and-flags" />
                  2150 S Jones Blvd, USA
                </div>
                <div className="item-price">
                  $11,000<span>/mo</span>
                </div>
              </div>
              <div className="widget-listing">
                <div className="item-img">
                  <a href="single-listing2.html">
                    <img
                      src={widget}
                      alt="widget"
                      width={120}
                      height={102}
                    />
                  </a>
                </div>
                <div className="item-content">
                  <h5 className="item-title">
                    <a href="single-listing2.html">
                      House Highland Ave Los Angeles
                    </a>
                  </h5>
                  <div className="location-area">
                    <i className="flaticon-maps-and-flags" />
                    California
                  </div>
                  <div className="item-price">
                    $3,000<span>/mo</span>
                  </div>
                </div>
              </div>
              <div className="widget-listing">
                <div className="item-img">
                  <a href="single-listing2.html">
                    <img
                      src={widget}
                      alt="widget"
                      width={120}
                      height={102}
                    />
                  </a>
                </div>
                <div className="item-content">
                  <h5 className="item-title">
                    <a href="single-listing2.html">
                      House Highland Ave Los Angeles
                    </a>
                  </h5>
                  <div className="location-area">
                    <i className="flaticon-maps-and-flags" />
                    California
                  </div>
                  <div className="item-price">
                    $1,200<span>/mo</span>
                  </div>
                </div>
              </div>
              <div className="widget-listing no-brd">
                <div className="item-img">
                  <a href="single-listing2.html">
                    <img
                      src={widget}
                      alt="widget"
                      width={120}
                      height={102}
                    />
                  </a>
                </div>
                <div className="item-content">
                  <h5 className="item-title">
                    <a href="single-listing2.html">
                      House Highland Ave Los Angeles
                    </a>
                  </h5>
                  <div className="location-area">
                    <i className="flaticon-maps-and-flags" />
                    California
                  </div>
                  <div className="item-price">
                    $1,900<span>/mo</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="widget widget-contact-box widget-price-range">
              <h3 className="widget-subtitle">Mortgage Calculator</h3>
              <p>
                Dorem ipsum dolor sit amet, consectetur adipisc ing elit. Nunc
                posuere.
              </p>
              <form className="contact-box">
                <div className="row">
                  <div className="form-group col-lg-12">
                    <label className="item-loan">Loan Amount :</label>
                    <input
                      type="text"
                      className="form-control"
                      name="fname"
                      placeholder="$00.00"
                      data-error="First Name is required"
                      required=""
                    />
                  </div>
                  <div className="form-group col-lg-12">
                    <label className="item-loan">Down Payment :</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      placeholder="$00.00"
                      data-error="Phone is required"
                      required=""
                    />
                  </div>
                  <div className="form-group col-lg-12">
                    <label className="item-loan">Years :</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      placeholder="12 Years"
                      data-error="Phone is required"
                      required=""
                    />
                  </div>
                </div>
              </form>
              <div className="price-range-wrapper">
                <div className="price-filter-wrap d-flex align-items-center">
                  <div className="price-range-select">
                    <div className="price-range range-title">
                      Interest Rate in:
                    </div>
                    <div className="price-range" id="price-range-min" />
                    <div className="price-range">:</div>
                    <div className="price-range" id="price-range-max" />
                  </div>
                </div>
                <div id="price-range-filter" className="price-range-filter" />
              </div>
              <ul className="wid-contact-button">
                <li>
                  <a href="single-listing2.html">Calculate</a>
                </li>
                <li>
                  <a href="single-listing2.html">
                    <i className="fas fa-sync-alt" />
                    Reset Form
                  </a>
                </li>
              </ul>
            </div>
            <div className="widget widget-post">
              <div className="item-img">
                <img src={widget} alt="widget" />
                <div className="circle-shape">
                  <span className="item-shape" />
                </div>
              </div>
              <div className="item-content">
                <h4 className="item-title">Find Your Dream House</h4>
                <div className="item-price">$2,999</div>
                <div className="post-button">
                  <a href="single-listing2.html" className="item-btn">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
  )
}

export default Home