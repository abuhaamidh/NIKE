import React from 'react'
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';

function Featuring() {
  return (
    <div>
        <div className='featuring'>
        <h1 id="featured">Featured</h1>
        <div class="cards">
          <Card class="img1" style={{ height: "653px", width: '700px', marginLeft: "50px" }}>
            <Card.Img variant="top" style={{ height: "653px", width: "700px" }} src="https://hips.hearstapps.com/hmg-prod/images/nike-tying-shoe-1661882021.jpg?resize=980:*" />
            <Card.Body>
              <Card.Text id="cardtxt">
                Meet the zenvy,Universera and  Go
              </Card.Text>
              <Button id="cardbtn">Shop</Button>
            </Card.Body>
          </Card>

          <Card className="img2" style={{ width: '650px', height: "653px" }}>
            <Card.Img style={{ height: "653px", width: "700px" }} variant="top" src="https://i.ebayimg.com/images/g/KgwAAOSwmWNkVFie/s-l500.jpg" />
            <Card.Body>

              <Card.Text id="card2txt">
                Unboxing the New
              </Card.Text>
              <Button id="img2btn">Shop</Button>
            </Card.Body>
          </Card>
        </div>

      </div>

      <div className='latest' >
        <h1 id="featured">The Latest</h1>
        <div class="cards">
          <Card class="img1" style={{ height: "650px", width: '700px', marginLeft: "50px" }}>
            <Card.Img variant="top" style={{ height: "650px", width: "700px" }} src="https://i1.wp.com/rematch.net/wp-content/uploads/2019/02/Nike-Air-Max-270-Triple-White-style-white-sneakers.jpg?fit=1080%2C1080&ssl=1" />
            <Card.Body>
              <Card.Text style={{ color: "white" }} id="cardtxt">
                Dropping on App : 26th july
              </Card.Text>
              <Button style={{ backgroundColor: "black", color: "white" }} id="cardbtn">Notify</Button>
            </Card.Body>
          </Card>

          <Card className="img2" style={{ width: '640px', height: "653px" }}>
            <Card.Img style={{ height: "653px", width: "700px" }} variant="top" src="https://i.pinimg.com/originals/b6/44/8a/b6448a7c3e133af994501d83e91ad376.jpg" />
            <Card.Body>

              <Card.Text id="card2txt">
                Unboxing the New
              </Card.Text>
              <Button id="img2btn">Shop</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Featuring
