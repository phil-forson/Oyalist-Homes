import React, { useState } from 'react'
import house from '../img/blog/blog4.jpg'
import widget3 from '../img/blog/widget3.jpg'
import widget2 from '../img/blog/widget2.jpg'
import widget4 from '../img/blog/widget4.jpg'
import widget5 from '../img/blog/widget5.jpg'
import { Link } from 'react-router-dom'

const Homeslist = () => {
    const [citiesVisible, setCitiesVisible] = useState(false);

    const toggleCityVisibility = () => setCitiesVisible(!citiesVisible);

  return (
    <section className="grid-wrap3">
            <div className="container">
                <div className="row gutters-40">
                    <div className="col-lg-4 widget-break-lg sidebar-widget">
                        <div className="widget widget-advanced-search">
                            <h3 className="widget-subtitle">Advanced Search</h3>
                            <form action="index.html" className="map-forms map-form-style-2">
                                <input type="text" className="form-control" placeholder="What are you looking for?" />
                                <div className="row">
                                    <div className="col-lg-12 pl-15 mb-0">
                                        <div className="rld-single-select">
                                            <select className="select single-select mr-0">
                                                <option value="1">Property Type</option>
                                                <option value="2">Family House</option>
                                                <option value="3">Apartment</option>
                                                <option value="3">Condo</option>
                                            </select>
                                            <div className="nice-select select single-select mr-0">
                                                <span className="current">Property Type</span>
                                                <ul className='list'>
                                                    <li data-value = '1' className="option selected">Property Type</li>
                                                    <li data-value = '2' className="option ">Family House</li>
                                                    <li data-value = '3' className="option ">Apartment</li>
                                                    <li data-value = '3' className="option">Condo</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 pl-15 mb-0">
                                        <div className="rld-single-select">
                                            <select className="select single-select mr-0">
                                                <option value="1">All Categories</option>
                                                <option value="2">Rent</option>
                                                <option value="3">Sell</option>
                                                <option value="3">Buy</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 pl-15">
                                        <div className="rld-single-select">
                                            <select className="select single-select mr-0">
                                                <option value="1">All Cities</option>
                                                <option value="2">Los Angeles</option>
                                                <option value="3">Chicago</option>
                                                <option value="3">Philadelphia</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="banner-search-wrap banner-search-wrap-2">
                                <div className="rld-main-search rld-main-search3">
                                    <div className="main-search-field-2">
                                        
                                        <div className="price-range-wrapper">
                                            <div className="range-box">
                                                <div className="price-label">Price:</div>
                                                <div id="price-range-filter-4" className="price-range-filter"></div>
                                                <div className="price-filter-wrap d-flex align-items-center">
                                                    <div className="price-range-select">
                                                        <div className="price-range range-title">$</div>
                                                        <div className="price-range" id="price-range-min-4">0</div>
                                                        <div className="price-range">-</div>
                                                        <div className="price-range" id="price-range-max-4">500000</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="filter-button">
                                        <a href="single-listing1.html" className="filter-btn1 search-btn">Search<i className="fas fa-search"></i></a>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                        <div className="widget widget-listing-box1">
                            <h3 className="widget-subtitle">Latest Listing</h3>
                            <div className="item-img">
                                <Link to="/home/1">
                                <img src={house} alt="widget" width="630" height="400" />
                                <div className="item-category-box1">
                                    <div className="item-category">For Rent</div>
                                </div>
                                </Link>
                            </div>
                            <div className="widget-content">
                                <div className="item-category10"><a href="single-listing1.html">Villa</a></div>
                                <h4 className="item-title"><a href="single-listing1.html">Modern Villa for House Highland  Ave Los Angeles</a></h4>
                                <div className="location-area"><i className="flaticon-maps-and-flags"></i>Downey,California</div>
                                <div className="item-price">$11,000<span>/mo</span></div>
                            </div>
                            <div className="widget-listing">
                                <div className="item-img">
                                <Link to="/home/1">
                                    <a href="single-listing1.html"><img src={widget2} alt="widget" width="120" height="102" /></a>
                                    </Link>
                                </div>
                                <div className="item-content">
                                    <h5 className="item-title"><a href="single-listing1.html">House Highland Ave  Los Angeles</a></h5>
                                    <div className="location-area"><i className="flaticon-maps-and-flags"></i>California</div>
                                    <div className="item-price">$3,000<span>/mo</span></div>
                                </div>
                            </div>
                            <div className="widget-listing">
                                <div className="item-img">
                                <Link to="/home/1">
                                    <a href="single-listing1.html"><img src={widget3} alt="widget" width="120" height="102" /></a>
                                </Link>
                                </div>
                                <div className="item-content">
                                    <h5 className="item-title"><a href="single-listing1.html">House Highland Ave  Los Angeles</a></h5>
                                    <div className="location-area"><i className="flaticon-maps-and-flags"></i>California</div>
                                    <div className="item-price">$1,200<span>/mo</span></div>
                                </div>
                            </div>
                            <div className="widget-listing no-brd">
                                <div className="item-img">
                                <Link to="/home/1">
                                    <a href="single-listing1.html"><img src={widget4} alt="widget" width="120" height="102" /></a>
                                </Link>
                                </div>
                                <div className="item-content">
                                    <h5 className="item-title"><a href="single-listing1.html">House Highland Ave  Los Angeles</a></h5>
                                    <div className="location-area"><i className="flaticon-maps-and-flags"></i>California</div>
                                    <div className="item-price">$1,900<span>/mo</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="widget widget-post">
                            
                           <div className="item-img">
                           <Link to="/home/1">
                               <img src={widget5} alt="widget" width="690" height="850" />
                            
                               <div className="circle-shape">
                                <span className="item-shape"></span>
                            </div>
                            </Link>

                           </div>
                           <div className="item-content">
                               <h4 className="item-title">Find Your  Dream House</h4>
                               <div className="item-price">$2,999</div>
                               <div className="post-button"><a href="single-listing1.html" className="item-btn">Shop Now</a></div>
                           </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="property-wrap-9">
                            <div className="row justify-content-center">
                                <div className="col-lg-12 col-md-12">
                                    <div className="item-shorting-box">
                                        <div className="shorting-title">
                                            <h4 className="item-title">9 Search Results Found</h4>
                                        </div>
                                        <div className="item-shorting-box-2">
                                            <div className="by-shorting">
                                                <div className="shorting">Sort by:</div>
                                                <select className="select single-select mr-0">
                                                    <option value="1">Default</option>
                                                    <option value="2">High Price</option>
                                                    <option value="3">Medium Price</option>
                                                    <option value="3">Low Price</option>
                                                </select>
                                            </div>
                                            <div className="grid-button">
                                                <ul className="nav nav-tabs" role="tablist">
                                                    <li className="nav-item">
                                                        <a className="nav-link active" data-bs-toggle="tab" href="#mylisting"><i className="fas fa-th"></i></a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" data-bs-toggle="tab" href="#reviews"><i className="fas fa-list-ul"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-style-1 tab-style-3">
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="mylisting" role="tabpanel">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                 <div className="property-box2 wow animated fadeInUp" data-wow-delay=".3s">
                                                    <div className="item-img">
                                                    <Link to="/home/1">
                                                        <img src={house} alt="blog" width="510" height="340" />
                                                        </Link>
                                                        <div className="item-category-box1">
                                                            <div className="item-category">For Rent</div>
                                                        </div>
                                                        <div className="rent-price">
                                                            <div className="item-price">$15,000<span><i>/</i>mo</span></div>
                                                        </div>
                                                        <div className="react-icon">
                                                            <ul>
                                                                <li>
                                                                    <a href="favourite.html" data-bs-toggle="tooltip" data-bs-placement="top"
                                                                        title="Favourites">
                                                                        <i className="flaticon-heart"></i>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="top"
                                                                        title="Compare">
                                                                        <i className="flaticon-left-and-right-arrows"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="item-category10"><a href="single-listing1.html">Appartment</a></div>
                                                    <div className="item-content">
                                                        <div className="verified-area">
                                                            <h3 className="item-title"><a href="single-listing1.html">Family House For Rent</a></h3>
                                                        </div>
                                                        <div className="location-area"><i className="flaticon-maps-and-flags"></i>Downey, California</div>
                                                        <div className="item-categoery3">
                                                            <ul>
                                                                <li><i className="flaticon-bed"></i>Beds: 03</li>
                                                                <li><i className="flaticon-shower"></i>Baths: 02</li>
                                                                <li><i className="flaticon-two-overlapping-square"></i>931 Sqft</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="property-box2 wow animated fadeInUp" data-wow-delay=".3s">
                                                    <div className="item-img">
                                                    <Link to="/home/1">
                                                        <img src={house} alt="blog" width="510" height="340" />
                                                    </Link>
                                                        <div className="item-category-box1">
                                                            <div className="item-category">For Rent</div>
                                                        </div>
                                                        <div className="rent-price">
                                                            <div className="item-price">$15,000<span><i>/</i>mo</span></div>
                                                        </div>
                                                        <div className="react-icon">
                                                            <ul>
                                                                <li>
                                                                    <a href="favourite.html" data-bs-toggle="tooltip" data-bs-placement="top"
                                                                        title="Favourites">
                                                                        <i className="flaticon-heart"></i>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="top"
                                                                        title="Compare">
                                                                        <i className="flaticon-left-and-right-arrows"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="item-category10"><a href="single-listing1.html">Appartment</a></div>
                                                    <div className="item-content">
                                                        <div className="verified-area">
                                                            <h3 className="item-title"><a href="single-listing1.html">Family House For Rent</a></h3>
                                                        </div>
                                                        <div className="location-area"><i className="flaticon-maps-and-flags"></i>Downey, California</div>
                                                        <div className="item-categoery3">
                                                            <ul>
                                                                <li><i className="flaticon-bed"></i>Beds: 03</li>
                                                                <li><i className="flaticon-shower"></i>Baths: 02</li>
                                                                <li><i className="flaticon-two-overlapping-square"></i>931 Sqft</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="property-box2 wow animated fadeInUp" data-wow-delay=".3s">
                                                    <div className="item-img">
                                                    <Link to="/home/1">
                                                        <img src={house} alt="blog" width="510" height="340" />
                                                    </Link>
                                                        <div className="item-category-box1">
                                                            <div className="item-category">For Rent</div>
                                                        </div>
                                                        <div className="rent-price">
                                                            <div className="item-price">$15,000<span><i>/</i>mo</span></div>
                                                        </div>
                                                        <div className="react-icon">
                                                            <ul>
                                                                <li>
                                                                    <a href="favourite.html" data-bs-toggle="tooltip" data-bs-placement="top"
                                                                        title="Favourites">
                                                                        <i className="flaticon-heart"></i>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="top"
                                                                        title="Compare">
                                                                        <i className="flaticon-left-and-right-arrows"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="item-category10"><a href="single-listing1.html">Appartment</a></div>
                                                    <div className="item-content">
                                                        <div className="verified-area">
                                                            <h3 className="item-title"><a href="single-listing1.html">Family House For Rent</a></h3>
                                                        </div>
                                                        <div className="location-area"><i className="flaticon-maps-and-flags"></i>Downey, California</div>
                                                        <div className="item-categoery3">
                                                            <ul>
                                                                <li><i className="flaticon-bed"></i>Beds: 03</li>
                                                                <li><i className="flaticon-shower"></i>Baths: 02</li>
                                                                <li><i className="flaticon-two-overlapping-square"></i>931 Sqft</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="property-box2 wow animated fadeInUp" data-wow-delay=".3s">
                                                    <div className="item-img">
                                                    <Link to="/home/1">
                                                        <img src={house} alt="blog" width="510" height="340" />
                                                        </Link>
                                                        <div className="item-category-box1">
                                                            <div className="item-category">For Rent</div>
                                                        </div>
                                                        <div className="rent-price">
                                                            <div className="item-price">$15,000<span><i>/</i>mo</span></div>
                                                        </div>
                                                        <div className="react-icon">
                                                            <ul>
                                                                <li>
                                                                    <a href="favourite.html" data-bs-toggle="tooltip" data-bs-placement="top"
                                                                        title="Favourites">
                                                                        <i className="flaticon-heart"></i>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="top"
                                                                        title="Compare">
                                                                        <i className="flaticon-left-and-right-arrows"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="item-category10"><a href="single-listing1.html">Appartment</a></div>
                                                    <div className="item-content">
                                                        <div className="verified-area">
                                                            <h3 className="item-title"><a href="single-listing1.html">Family House For Rent</a></h3>
                                                        </div>
                                                        <div className="location-area"><i className="flaticon-maps-and-flags"></i>Downey, California</div>
                                                        <div className="item-categoery3">
                                                            <ul>
                                                                <li><i className="flaticon-bed"></i>Beds: 03</li>
                                                                <li><i className="flaticon-shower"></i>Baths: 02</li>
                                                                <li><i className="flaticon-two-overlapping-square"></i>931 Sqft</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="property-box2 wow animated fadeInUp" data-wow-delay=".3s">
                                                    <div className="item-img">
                                                    <Link to="/home/1">
                                                        <a href="single-listing1.html"><img src={house} alt="blog" width="510" height="340" /></a>
                                                        </Link>
                                                        <div className="item-category-box1">
                                                            <div className="item-category">For Rent</div>
                                                        </div>
                                                        <div className="rent-price">
                                                            <div className="item-price">$15,000<span><i>/</i>mo</span></div>
                                                        </div>
                                                        <div className="react-icon">
                                                            <ul>
                                                                <li>
                                                                    <a href="favourite.html" data-bs-toggle="tooltip" data-bs-placement="top"
                                                                        title="Favourites">
                                                                        <i className="flaticon-heart"></i>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="top"
                                                                        title="Compare">
                                                                        <i className="flaticon-left-and-right-arrows"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="item-category10"><a href="single-listing1.html">Appartment</a></div>
                                                    <div className="item-content">
                                                        <div className="verified-area">
                                                            <h3 className="item-title"><a href="single-listing1.html">Family House For Rent</a></h3>
                                                        </div>
                                                        <div className="location-area"><i className="flaticon-maps-and-flags"></i>Downey, California</div>
                                                        <div className="item-categoery3">
                                                            <ul>
                                                                <li><i className="flaticon-bed"></i>Beds: 03</li>
                                                                <li><i className="flaticon-shower"></i>Baths: 02</li>
                                                                <li><i className="flaticon-two-overlapping-square"></i>931 Sqft</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="property-box2 wow animated fadeInUp" data-wow-delay=".3s">
                                                    <div className="item-img">
                                                    <Link to="/home/1">
                                                        <a href="single-listing1.html"><img src={house} alt="blog" width="510" height="340" /></a>
                                                        </Link>
                                                        <div className="item-category-box1">
                                                            <div className="item-category">For Rent</div>
                                                        </div>
                                                        <div className="rent-price">
                                                            <div className="item-price">$15,000<span><i>/</i>mo</span></div>
                                                        </div>
                                                        <div className="react-icon">
                                                            <ul>
                                                                <li>
                                                                    <a href="favourite.html" data-bs-toggle="tooltip" data-bs-placement="top"
                                                                        title="Favourites">
                                                                        <i className="flaticon-heart"></i>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="top"
                                                                        title="Compare">
                                                                        <i className="flaticon-left-and-right-arrows"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="item-category10"><a href="single-listing1.html">Appartment</a></div>
                                                    <div className="item-content">
                                                        <div className="verified-area">
                                                            <h3 className="item-title"><a href="single-listing1.html">Family House For Rent</a></h3>
                                                        </div>
                                                        <div className="location-area"><i className="flaticon-maps-and-flags"></i>Downey, California</div>
                                                        <div className="item-categoery3">
                                                            <ul>
                                                                <li><i className="flaticon-bed"></i>Beds: 03</li>
                                                                <li><i className="flaticon-shower"></i>Baths: 02</li>
                                                                <li><i className="flaticon-two-overlapping-square"></i>931 Sqft</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="property-box2 wow animated fadeInUp" data-wow-delay=".3s">
                                                    <div className="item-img">
                                                        <a href="single-listing1.html"><img src={house} alt="blog" width="510" height="340" /></a>
                                                        <div className="item-category-box1">
                                                            <div className="item-category">For Rent</div>
                                                        </div>
                                                        <div className="rent-price">
                                                            <div className="item-price">$15,000<span><i>/</i>mo</span></div>
                                                        </div>
                                                        <div className="react-icon">
                                                            <ul>
                                                                <li>
                                                                    <a href="favourite.html" data-bs-toggle="tooltip" data-bs-placement="top"
                                                                        title="Favourites">
                                                                        <i className="flaticon-heart"></i>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="top"
                                                                        title="Compare">
                                                                        <i className="flaticon-left-and-right-arrows"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="item-category10"><a href="single-listing1.html">Appartment</a></div>
                                                    <div className="item-content">
                                                        <div className="verified-area">
                                                            <h3 className="item-title"><a href="single-listing1.html">Family House For Rent</a></h3>
                                                        </div>
                                                        <div className="location-area"><i className="flaticon-maps-and-flags"></i>Downey, California</div>
                                                        <div className="item-categoery3">
                                                            <ul>
                                                                <li><i className="flaticon-bed"></i>Beds: 03</li>
                                                                <li><i className="flaticon-shower"></i>Baths: 02</li>
                                                                <li><i className="flaticon-two-overlapping-square"></i>931 Sqft</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="property-box2 wow animated fadeInUp" data-wow-delay=".3s">
                                                    <div className="item-img">
                                                        <a href="single-listing1.html"><img src={house} alt="blog" width="510" height="340" /></a>
                                                        <div className="item-category-box1">
                                                            <div className="item-category">For Rent</div>
                                                        </div>
                                                        <div className="rent-price">
                                                            <div className="item-price">$15,000<span><i>/</i>mo</span></div>
                                                        </div>
                                                        <div className="react-icon">
                                                            <ul>
                                                                <li>
                                                                    <a href="favourite.html" data-bs-toggle="tooltip" data-bs-placement="top"
                                                                        title="Favourites">
                                                                        <i className="flaticon-heart"></i>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="top"
                                                                        title="Compare">
                                                                        <i className="flaticon-left-and-right-arrows"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="item-category10"><a href="single-listing1.html">Appartment</a></div>
                                                    <div className="item-content">
                                                        <div className="verified-area">
                                                            <h3 className="item-title"><a href="single-listing1.html">Family House For Rent</a></h3>
                                                        </div>
                                                        <div className="location-area"><i className="flaticon-maps-and-flags"></i>Downey, California</div>
                                                        <div className="item-categoery3">
                                                            <ul>
                                                                <li><i className="flaticon-bed"></i>Beds: 03</li>
                                                                <li><i className="flaticon-shower"></i>Baths: 02</li>
                                                                <li><i className="flaticon-two-overlapping-square"></i>931 Sqft</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pagination-style-1">
                                            <ul className="pagination">
                                                <li className="page-item">
                                                    <a className="page-link" href="with-sidebar2.html" aria-label="Previous">
                                                        <span aria-hidden="true">&laquo;</span>
                                                        <span className="sr-only">Previous</span>
                                                    </a>
                                                </li>
                                                <li className="page-item"><a className="page-link active" href="with-sidebar2.html">1</a></li>
                                                <li className="page-item"><a className="page-link" href="with-sidebar2.html">2</a></li>
                                                <li className="page-item"><a className="page-link" href="with-sidebar2.html">3</a></li>
                                                <li className="page-item"><a className="page-link" href="with-sidebar2.html">4</a></li>
                                                <li className="page-item">
                                                    <a className="page-link" href="with-sidebar2.html" aria-label="Next">
                                                        <span aria-hidden="true">&raquo;</span>
                                                        <span className="sr-only">Next</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="reviews" role="tabpanel">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="property-box2 property-box4 wow animated fadeInUp" data-wow-delay=".6s">
                                                    <div className="item-img">
                                                        <a href="single-listing1.html"><img src={house} alt="blog" width="250" height="200" /></a>
                                                        <div className="item-category-box1">
                                                            <div className="item-category">For Rent</div>
                                                        </div>
                                                    </div>
                                                    <div className="item-content item-content-property">
                                                        <div className="item-category10"><a href="single-listing1.html">Appartment</a></div>
                                                        <div className="react-icon react-icon-2">
                                                            <ul>
                                                                <li>
                                                                    <a href="favourite.html" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                                        title="Favourites">
                                                                        <i className="flaticon-heart"></i>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                                        title="Compare">
                                                                        <i className="flaticon-left-and-right-arrows"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="verified-area">
                                                            <h3 className="item-title"><a href="single-listing1.html">Family House For Rent</a></h3>
                                                        </div>
                                                        <div className="location-area"><i className="flaticon-maps-and-flags"></i>Downey, California</div>
                                                        <div className="item-categoery3">
                                                            <ul>
                                                                <li><i className="flaticon-bed"></i>Beds: 03</li>
                                                                <li><i className="flaticon-shower"></i>Baths: 02</li>
                                                                <li><i className="flaticon-two-overlapping-square"></i>931 Sqft</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="property-box2 property-box4 wow animated fadeInUp" data-wow-delay=".6s">
                                                    <div className="item-img">
                                                        <a href="single-listing1.html"><img src={house} alt="blog" width="250" height="200" /></a>
                                                        <div className="item-category-box1">
                                                            <div className="item-category">For Rent</div>
                                                        </div>
                                                    </div>
                                                    <div className="item-content item-content-property">
                                                        <div className="item-category10"><a href="single-listing1.html">Appartment</a></div>
                                                        <div className="react-icon react-icon-2">
                                                            <ul>
                                                                <li>
                                                                    <a href="favourite.html" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                                        title="Favourites">
                                                                        <i className="flaticon-heart"></i>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                                        title="Compare">
                                                                        <i className="flaticon-left-and-right-arrows"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="verified-area">
                                                            <h3 className="item-title"><a href="single-listing1.html">Family House For Rent</a></h3>
                                                        </div>
                                                        <div className="location-area"><i className="flaticon-maps-and-flags"></i>Downey, California</div>
                                                        <div className="item-categoery3">
                                                            <ul>
                                                                <li><i className="flaticon-bed"></i>Beds: 03</li>
                                                                <li><i className="flaticon-shower"></i>Baths: 02</li>
                                                                <li><i className="flaticon-two-overlapping-square"></i>931 Sqft</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="property-box2 property-box4 wow animated fadeInUp" data-wow-delay=".6s">
                                                    <div className="item-img">
                                                        <img src={house} alt="blog" width="250" height="200" />
                                                        <div className="item-category-box1">
                                                            <div className="item-category">For Rent</div>
                                                        </div>
                                                    </div>
                                                    <div className="item-content item-content-property">
                                                        <div className="item-category10"><a href="single-listing1.html">Appartment</a></div>
                                                        <div className="react-icon react-icon-2">
                                                            <ul>
                                                                <li>
                                                                    <a href="favourite.html" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                                        title="Favourites">
                                                                        <i className="flaticon-heart"></i>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                                        title="Compare">
                                                                        <i className="flaticon-left-and-right-arrows"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="verified-area">
                                                            <h3 className="item-title"><a href="single-listing1.html">Family House For Rent</a></h3>
                                                        </div>
                                                        <div className="location-area"><i className="flaticon-maps-and-flags"></i>Downey, California</div>
                                                        <div className="item-categoery3">
                                                            <ul>
                                                                <li><i className="flaticon-bed"></i>Beds: 03</li>
                                                                <li><i className="flaticon-shower"></i>Baths: 02</li>
                                                                <li><i className="flaticon-two-overlapping-square"></i>931 Sqft</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="property-box2 property-box4 wow animated fadeInUp" data-wow-delay=".6s">
                                                    <div className="item-img">
                                                        <a href="single-listing1.html"><img src={house} alt="blog" width="250" height="200" /></a>
                                                        <div className="item-category-box1">
                                                            <div className="item-category">For Rent</div>
                                                        </div>
                                                    </div>
                                                    <div className="item-content item-content-property">
                                                        <div className="item-category10"><a href="single-listing1.html">Appartment</a></div>
                                                        <div className="react-icon react-icon-2">
                                                            <ul>
                                                                <li>
                                                                    <a href="favourite.html" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                                        title="Favourites">
                                                                        <i className="flaticon-heart"></i>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                                        title="Compare">
                                                                        <i className="flaticon-left-and-right-arrows"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="verified-area">
                                                            <h3 className="item-title"><a href="single-listing1.html">Family House For Rent</a></h3>
                                                        </div>
                                                        <div className="location-area"><i className="flaticon-maps-and-flags"></i>Downey, California</div>
                                                        <div className="item-categoery3">
                                                            <ul>
                                                                <li><i className="flaticon-bed"></i>Beds: 03</li>
                                                                <li><i className="flaticon-shower"></i>Baths: 02</li>
                                                                <li><i className="flaticon-two-overlapping-square"></i>931 Sqft</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="property-box2 property-box4 wow animated fadeInUp" data-wow-delay=".6s">
                                                    <div className="item-img">
                                                        <a href="single-listing1.html"><img src={house} alt="blog" width="250" height="200" /></a>
                                                        <div className="item-category-box1">
                                                            <div className="item-category">For Rent</div>
                                                        </div>
                                                    </div>
                                                    <div className="item-content item-content-property">
                                                        <div className="item-category10"><a href="single-listing1.html">Appartment</a></div>
                                                        <div className="react-icon react-icon-2">
                                                            <ul>
                                                                <li>
                                                                    <a href="favourite.html" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                                        title="Favourites">
                                                                        <i className="flaticon-heart"></i>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                                        title="Compare">
                                                                        <i className="flaticon-left-and-right-arrows"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="verified-area">
                                                            <h3 className="item-title"><a href="single-listing1.html">Family House For Rent</a></h3>
                                                        </div>
                                                        <div className="location-area"><i className="flaticon-maps-and-flags"></i>Downey, California</div>
                                                        <div className="item-categoery3">
                                                            <ul>
                                                                <li><i className="flaticon-bed"></i>Beds: 03</li>
                                                                <li><i className="flaticon-shower"></i>Baths: 02</li>
                                                                <li><i className="flaticon-two-overlapping-square"></i>931 Sqft</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="property-box2 property-box4 wow animated fadeInUp" data-wow-delay=".6s">
                                                    <div className="item-img">
                                                        <a href="single-listing1.html"><img src={house} alt="blog" width="250" height="200" /></a>
                                                        <div className="item-category-box1">
                                                            <div className="item-category">For Rent</div>
                                                        </div>
                                                    </div>
                                                    <div className="item-content item-content-property">
                                                        <div className="item-category10"><a href="single-listing1.html">Appartment</a></div>
                                                        <div className="react-icon react-icon-2">
                                                            <ul>
                                                                <li>
                                                                    <a href="favourite.html" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                                        title="Favourites">
                                                                        <i className="flaticon-heart"></i>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                                        title="Compare">
                                                                        <i className="flaticon-left-and-right-arrows"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="verified-area">
                                                            <h3 className="item-title"><a href="single-listing1.html">Family House For Rent</a></h3>
                                                        </div>
                                                        <div className="location-area"><i className="flaticon-maps-and-flags"></i>Downey, California</div>
                                                        <div className="item-categoery3">
                                                            <ul>
                                                                <li><i className="flaticon-bed"></i>Beds: 03</li>
                                                                <li><i className="flaticon-shower"></i>Baths: 02</li>
                                                                <li><i className="flaticon-two-overlapping-square"></i>931 Sqft</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="property-box2 property-box4 wow animated fadeInUp" data-wow-delay=".6s">
                                                    <div className="item-img">
                                                        <a href="single-listing1.html"><img src={house} alt="blog" width="250" height="200" /></a>
                                                        <div className="item-category-box1">
                                                            <div className="item-category">For Rent</div>
                                                        </div>
                                                    </div>
                                                    <div className="item-content item-content-property">
                                                        <div className="item-category10"><a href="single-listing1.html">Appartment</a></div>
                                                        <div className="react-icon react-icon-2">
                                                            <ul>
                                                                <li>
                                                                    <a href="favourite.html" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                                        title="Favourites">
                                                                        <i className="flaticon-heart"></i>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                                        title="Compare">
                                                                        <i className="flaticon-left-and-right-arrows"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="verified-area">
                                                            <h3 className="item-title"><a href="single-listing1.html">Family House For Rent</a></h3>
                                                        </div>
                                                        <div className="location-area"><i className="flaticon-maps-and-flags"></i>Downey, California</div>
                                                        <div className="item-categoery3">
                                                            <ul>
                                                                <li><i className="flaticon-bed"></i>Beds: 03</li>
                                                                <li><i className="flaticon-shower"></i>Baths: 02</li>
                                                                <li><i className="flaticon-two-overlapping-square"></i>931 Sqft</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pagination-style-1">
                                            <ul className="pagination">
                                                <li className="page-item">
                                                    <a className="page-link" href="with-sidebar.html" aria-label="Previous">
                                                        <span aria-hidden="true">&laquo;</span>
                                                        <span className="sr-only">Previous</span>
                                                    </a>
                                                </li>
                                                <li className="page-item"><a className="page-link active" href="with-sidebar2.html">1</a></li>
                                                <li className="page-item"><a className="page-link" href="with-sidebar2.html">2</a></li>
                                                <li className="page-item"><a className="page-link" href="with-sidebar2.html">3</a></li>
                                                <li className="page-item"><a className="page-link" href="with-sidebar2.html">4</a></li>
                                                <li className="page-item">
                                                    <a className="page-link" href="with-sidebar2.html" aria-label="Next">
                                                        <span aria-hidden="true">&raquo;</span>
                                                        <span className="sr-only">Next</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Homeslist