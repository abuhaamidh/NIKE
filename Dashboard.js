import React from 'react'
import "./Styles.css"
import { useNavigate } from 'react-router-dom'
import Header from '../Header/Header';
import { BsHeart } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import { ImSearch } from "react-icons/im";
import * as Bootstrap from "react-bootstrap";
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import $ from "jquery"
import Featuring from './Featuring/Featuring';
import Inscroll from './Inscroll/Inscroll';



function Dashboard() {





  //usenavigate (hook)
  //bootstrap navbar
  //login page onClick  

  return (
    <div>
      <Header />
      <div className='dropdown'>

        <div id="dd1">
          <span class="dd1">Men  |</span>
          <span class="dd1"> Women | </span>
          <span class="dd1"> Kids</span>
        </div>

        <div id="dropdownlogo">
          <img style={{ height: "35px", width: "65px" }} src="https://cdn.mos.cms.futurecdn.net/786NzPhpXo6G8hkutJkHTM-1200-80.jpg"></img>
        </div>
        <div class="sb">
          <input type='text' placeholder=' Search' id="inputs"></input>
        </div>

        <BsHeart id="heart"></BsHeart>
        <BsCart2 id="cart"></BsCart2>
        <div style={{ fontWeight: "bolder" }}><ImSearch id="search"></ImSearch></div>
      </div>
      <div className="ad">
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">

          <div class="carousel-inner">
            <div class="carousel-item active">
              Hello from Nike!
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              New styles on sale upto : 40%
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item">
              Add to cart, Empty your pocket
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <img style={{ height: "700px", width: "100%" }} src="https://sothebys-com.brightspotcdn.com/dims4/default/cb1e330/2147483647/strip/true/crop/746x418+0+0/resize/684x383!/format/webp/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2F7f%2F10%2F1671eb5a43c4b49789d238082a6a%2F90-3.jpg" id="air"></img>
      <div className='center'>
        <p id="imgname">
          The  best of Nike shoes
        </p>
        <button id="shop">Shop</button>
      </div>
      <div id="wordings">Nike Training</div>
      <div class="wordings">MADE FOR YOUR </div>
      <div id="words">EVERY MOVE</div>
      <p id="quotes">No matter what your workout looks like today or tomorrow,
        we've got the go-to essentials to make every moment count. </p>
      <button id="quotesbtn">Shop</button>

      <Featuring />
     <Inscroll />
<div class="content">
  <p id="content"> CHECK THE FOOTWORK 
  <br></br>IN THE ZOOM FREAK5 <br></br>'MADE IN SEPOLIA'</p>
</div>
<h1 class="miss">Don't Miss</h1>
<img style={{marginLeft:"50px",marginTop:"10px",width:"93%"}}src="https://www.pacificfair.com.au/Upload/MelbourneCentral/Media/Offer-Image/1200x771_29.png?ext=.png"></img>
<p id="pegasus">For any run, For everyone. Nike pegasus 40.</p>
<div>
<button id="pegasusbtn">Shop</button>
</div>
<h1 class="pegasus">THE WORLD RUNS IN PEGASUS</h1>
</div>


  )
}

export default Dashboard
