import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../Dashboard/Styles.css"

function Header() {
    var usenavigate = useNavigate();

    function redirectTO() {
        usenavigate("/loading ")
    }

    return (
        <div>
            <div class="header">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png" id="headerimg" height="20" width="20" />
                <div id="signin">
                    <a style={{textDecoration:"none"}}className="signIn" onClick={redirectTO}>Sign In  </a>
                    <a style={{textDecoration:"none"}}className="signIn" href="https://www.nike.com/in/help">|  Help</a>
                </div>
            </div>
        </div>
    )
}

export default Header




