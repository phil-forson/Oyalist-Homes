import React from 'react'
import logo from '../img/oyalogo.png'

const Footer = () => {
  return (
    <>
    <footer className="footer-area">
        <div className="footer-top footer-top-style">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="footer-logo-area footer-logo-area-2">
                  <div className="item-logo">
                    <img
                      src={logo}
                      width="157"
                      height="40"
                      alt="logo"
                      className="img-fluid"
                    />
                  </div>
                  <p>
                    Corem ipsum dolor sit amet consecte turad pisicing elit, sed
                    do eiusmod tempor inci didunt ut labore et dolor.pisicing
                    elit, sed do eiusmod tempor inci
                  </p>
                  <div className="item-social">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank"
                          ><i className="fab fa-facebook-f"></i
                        ></a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank"
                          ><i className="fab fa-twitter"></i
                        ></a>
                      </li>
                      <li>
                        <a href="https://vimeo.com/" target="_blank"
                          ><i className="fab fa-vimeo-v"></i
                        ></a>
                      </li>
                      <li>
                        <a href="https://www.pinterest.com/" target="_blank"
                          ><i className="fab fa-pinterest-p"></i
                        ></a>
                      </li>
                      <li>
                        <a href="https://web.whatsapp.com/" target="_blank"
                          ><i className="fab fa-whatsapp"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                <div className="footer-link footer-link-style-2">
                  <div className="footer-title footer-title-style2">
                    <h3>Quick Links</h3>
                  </div>
                  <div className="item-link">
                    <ul>
                      <li><a href="about-1.html">About Us </a></li>
                      <li>
                        <a href="blog-details1.html">Blogs & Articles </a>
                      </li>
                      <li><a href="about-1.html">Terms & Conditions</a></li>
                      <li><a href="about-1.html">Privacy Policy </a></li>
                      <li><a href="contact.html">Contact Us </a></li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="footer-insta">
                  <div className="footer-title footer-title-style2">
                    <h3>Instagram</h3>
                  </div>
                  <div className="insta-link">
                    <ul>
                      <li>
                        <div className="item-img">
                          <a
                            href="https://www.instagram.com/"
                            className="insta-pic"
                          >
                            <img
                              src="img/instagram/insta1.jpg"
                              width="86"
                              height="73"
                              alt="instagram"
                            />
                          </a>
                          <div className="item-overlay">
                            <a
                              href="https://www.instagram.com/"
                              target="_blank"
                            >
                              <i className="fab fa-instagram"></i>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="item-img">
                          <a
                            href="https://www.instagram.com/"
                            className="insta-pic"
                          >
                            <img
                              src="img/instagram/insta2.jpg"
                              width="86"
                              height="73"
                              alt="instagram"
                            />
                          </a>
                          <div className="item-overlay">
                            <a
                              href="https://www.instagram.com/"
                              target="_blank"
                            >
                              <i className="fab fa-instagram"></i>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="item-img">
                          <a
                            href="https://www.instagram.com/"
                            className="insta-pic"
                          >
                            <img
                              src="img/instagram/insta3.jpg"
                              width="86"
                              height="73"
                              alt="instagram"
                            />
                          </a>
                          <div className="item-overlay">
                            <a
                              href="https://www.instagram.com/"
                              target="_blank"
                            >
                              <i className="fab fa-instagram"></i>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="item-img">
                          <a
                            href="https://www.instagram.com/"
                            className="insta-pic"
                          >
                            <img
                              src="img/instagram/insta4.jpg"
                              width="86"
                              height="73"
                              alt="instagram"
                            />
                          </a>
                          <div className="item-overlay">
                            <a
                              href="https://www.instagram.com/"
                              target="_blank"
                            >
                              <i className="fab fa-instagram"></i>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="item-img">
                          <a
                            href="https://www.instagram.com/"
                            className="insta-pic"
                          >
                            <img
                              src="img/instagram/insta5.jpg"
                              width="86"
                              height="73"
                              alt="instagram"
                            />
                          </a>
                          <div className="item-overlay">
                            <a
                              href="https://www.instagram.com/"
                              target="_blank"
                            >
                              <i className="fab fa-instagram"></i>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="item-img">
                          <a
                            href="https://www.instagram.com/"
                            className="insta-pic"
                          >
                            <img
                              src="img/instagram/insta6.jpg"
                              width="86"
                              height="73"
                              alt="instagram"
                            />
                          </a>
                          <div className="item-overlay">
                            <a
                              href="https://www.instagram.com/"
                              target="_blank"
                            >
                              <i className="fab fa-instagram"></i>
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="footer-contact footer-contact-style-2">
                  <div className="footer-title footer-title-style2">
                    <h3>Contact</h3>
                  </div>
                  <div className="footer-location">
                    <ul>
                      <li className="item-map">
                        <i className="fas fa-map-marker-alt"></i>121 King St,
                        Melbourne den 3000, Australia
                      </li>
                      <li>
                        <a href="mailto:info@example.com"
                          ><i className="fas fa-envelope"></i>info@example.com</a
                        >
                      </li>
                      <li>
                        <a href="tel:+123596000"
                          ><i className="fas fa-phone-alt"></i>(+123) 596 000</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom footer-bottom-style-2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-6">
                <div className="copyright-area1">
                  <ul>
                    <li><a href="about-1.html">Terms of Use</a></li>
                    <li><a href="about-1.html">Privacy Policy</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="copyright-area2">
                  <p>2022© All rightre served by RadiusTheme</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer