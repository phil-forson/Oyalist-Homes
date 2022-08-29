import React from 'react'
import '../App.css'
import Header from './Header'
import { useParams } from 'react-router-dom'
import Home from './Home';

const HomeDetails = () => {

    const { homeId } = useParams();
  return (
<>
    <Header />
    <Breadcrumb />
    <Home />
</>

    


  )
}

const Breadcrumb = () => {
    return (
 <div className="breadcrumb-wrap">
  <div className="container">
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="index.html">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="single-listing2.html">Comercial Property</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          All Listing
        </li>
      </ol>
    </nav>
  </div>
</div> 
    )
}



export default HomeDetails