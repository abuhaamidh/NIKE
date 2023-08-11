import React from 'react'
import { BsHeart } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import { ImSearch } from "react-icons/im";

function Header2() {
  return (
    <div>
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
    </div>
  )
}

export default Header2
