import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSlidersH, faCaretDown } from '@fortawesome/free-solid-svg-icons'

const FilterSearch = () => {
 
    const [filterItemsVisible, setFilterItemsVisible] = useState(false)
  

    const toggleFilterItems = () => setFilterItemsVisible(!filterItemsVisible)
  return (
    <div className="rld-main-search">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="box">
                      <div className="box-top">
                        <div className="rld-single-input item">
                          <input
                            type="text"
                            placeholder="Enter Keyword here..."
                          />
                        </div>
                        <div className="rld-single-select ml-22">
                          <select className="select single-select">
                            <option value={1}>Property Type</option>
                            <option value={2}>Family House</option>
                            <option value={3}>Apartment</option>
                            <option value={3}>Condo</option>
                          </select>
                        </div>
                        <div className="rld-single-select item">
                          <select className="select single-select mr-0">
                            <option value={1}>All Cities</option>
                            <option value={2}>Los Angeles</option>
                            <option value={3}>Chicago</option>
                            <option value={3}>Philadelphia</option>
                          </select>
                          
                        </div>
                        <div className="item rt-filter-btn">
                          <div className="dropdown-filter item" onClick={toggleFilterItems}>
                            <span>
                              <i><FontAwesomeIcon icon={faSlidersH} className="fas fa-sliders-h" /></i>
                            </span>
                          </div>
                          <div className="filter-button-area">
                            <a className="filter-btn" href="with-sidebar.html">
                              <span>Search</span>
                              <i><FontAwesomeIcon icon={faSearch} className="fas fa-search" /></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      
                      <div className= {filterItemsVisible ? "explore__form-checkbox-list full-filter filter-block" : "explore__form-checkbox-list full-filter"}>
                      <div className="row">
                        <div className="col-lg-4 col-md-6 py-1 pr-30 pl-0">
                          <div className="form-group bed">
                            <label className="item-bedrooms">Bedrooms</label>
                            <div
                              className="nice-select form-control wide"
                              tabIndex={0}
                            >
                              <span className="current">Any</span>
                              <ul className="list">
                                <li data-value={1} className="option selected">
                                  For Sale
                                </li>
                                <li data-value={2} className="option">
                                  For Rent
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 py-1 pr-30 pl-0">
                          <div className="form-group bath">
                            <label className="item-bath">Bathrooms</label>
                            <div
                              className="nice-select form-control wide"
                              tabIndex={0}
                            >
                              <span className="current">Any</span>
                              <ul className="list">
                                <li data-value={1} className="option selected">
                                  1
                                </li>
                                <li data-value={2} className="option">
                                  2
                                </li>
                                <li data-value={3} className="option">
                                  3
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 py-1 pl-0 pr-0">
                          <div className="form-group garage">
                            <label className="item-garage">Garage</label>
                            <div
                              className="nice-select form-control wide"
                              tabIndex={0}
                            >
                              <span className="current">Any</span>
                              <ul className="list">
                                <li data-value={1} className="option selected">
                                  1
                                </li>
                                <li data-value={2} className="option">
                                  2
                                </li>
                                <li data-value={3} className="option">
                                  3
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="main-search-field-2 col-12">
                          <div className="row">
                            <div className="col-md-6 pl-0">
                              <div className="price-range-wrapper">
                                <div className="range-box">
                                  <div className="price-label">Flat Size:</div>
                                  <div
                                    id="price-range-filter-3"
                                    className="price-range-filter"
                                  />
                                  <div className="price-filter-wrap d-flex align-items-center">
                                    <div className="price-range-select">
                                      <div
                                        className="price-range"
                                        id="price-range-min-3"
                                      />
                                      <div className="price-range">-</div>
                                      <div
                                        className="price-range"
                                        id="price-range-max-3"
                                      />
                                      <div className="price-range range-title">
                                        sft
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 pl-0">
                              <div className="price-range-wrapper">
                                <div className="range-box">
                                  <div className="price-label">Distance:</div>
                                  <div
                                    id="price-range-filter-2"
                                    className="price-range-filter"
                                  />
                                  <div className="price-filter-wrap d-flex align-items-center">
                                    <div className="price-range-select">
                                      <div
                                        className="price-range"
                                        id="price-range-min-2"
                                      />
                                      <div className="price-range">-</div>
                                      <div
                                        className="price-range"
                                        id="price-range-max-2"
                                      />
                                      <div className="price-range range-title">
                                        km
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-12">
                            <h4 className="text-dark">Amenities</h4>
                            <ul className="no-ul-list third-row">
                              <li>
                                <input
                                  id="a-1"
                                  className="checkbox-custom"
                                  name="a-1"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="a-1"
                                  className="checkbox-custom-label"
                                >
                                  Air Condition
                                </label>
                              </li>
                              <li>
                                <input
                                  id="a-2"
                                  className="checkbox-custom"
                                  name="a-2"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="a-2"
                                  className="checkbox-custom-label"
                                >
                                  Bedding
                                </label>
                              </li>
                              <li>
                                <input
                                  id="a-3"
                                  className="checkbox-custom"
                                  name="a-3"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="a-3"
                                  className="checkbox-custom-label"
                                >
                                  Heating
                                </label>
                              </li>
                              <li>
                                <input
                                  id="a-4"
                                  className="checkbox-custom"
                                  name="a-4"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="a-4"
                                  className="checkbox-custom-label"
                                >
                                  Internet
                                </label>
                              </li>
                              <li>
                                <input
                                  id="a-5"
                                  className="checkbox-custom"
                                  name="a-5"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="a-5"
                                  className="checkbox-custom-label"
                                >
                                  Microwave
                                </label>
                              </li>
                              <li>
                                <input
                                  id="a-6"
                                  className="checkbox-custom"
                                  name="a-6"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="a-6"
                                  className="checkbox-custom-label"
                                >
                                  Smoking Allow
                                </label>
                              </li>
                              <li>
                                <input
                                  id="a-7"
                                  className="checkbox-custom"
                                  name="a-7"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="a-7"
                                  className="checkbox-custom-label"
                                >
                                  Terrace
                                </label>
                              </li>
                              <li>
                                <input
                                  id="a-8"
                                  className="checkbox-custom"
                                  name="a-8"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="a-8"
                                  className="checkbox-custom-label"
                                >
                                  Balcony
                                </label>
                              </li>
                              <li>
                                <input
                                  id="a-9"
                                  className="checkbox-custom"
                                  name="a-9"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="a-9"
                                  className="checkbox-custom-label"
                                >
                                  Balcony
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="filter-button">
                          <a href="index.html" className="filter-btn1">
                            Apply Filter
                          </a>
                          <a
                            href="index.html"
                            className="filter-btn1 reset-btn"
                          >
                            Reset Filter
                            <i className="fas fa-redo-alt" />
                          </a>
                        </div>
                      </div>
                    </div>
                      
                    </div>
                  </div>
                </div>
              </div>
  )
}

export default FilterSearch