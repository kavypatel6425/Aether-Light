import React from 'react'
import Nevbar from './Navbar'
import Carousel from 'react-bootstrap/Carousel';
import logo_img_1 from "../assets/homepage_Chandlier.webp"
import logo_img_2 from "../assets/homepage_pendant.webp"
import logo_img_3 from "../assets/homepage_wall_lemp.webp"
import logo_img_4 from "../assets/homepage_Track_Light.webp"
import sec_2_hanging from "../assets/sec_2_hanging.png"
import sec_2_ceiling from "../assets/sec_2_ceiling.png"
import sec_2_wall from "../assets/sec_2_wall.png"
import sec_2_floor from "../assets/sec_2_floor_2.png"
import sec_2_table from "../assets/sec_2_table.png"
import sec_2_outdoor from "../assets/sec_2_outdoor.png"
import sec_2_mirror from "../assets/sec_2_mirror_1.png"
import sec_2_chandelier from "../assets/sec_2_chandelier.png"
import sec_3_living from "../assets/sec_3_living.png"
import sec_3_badroom from "../assets/sec_3_bedroom.webp"
import sec_3_dining from "../assets/sec_3_dining_1.png"
import sec_3_washroom from "../assets/sec_3_washroom.jpg"
import { Container, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Footer from './Footer';
import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Index() {
  return (
    <>
      <Nevbar />

      <Carousel fade>
        <Carousel.Item>
          <Image src={logo_img_1} className='home_img' />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={logo_img_2} className='home_img' />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={logo_img_3} className='home_img' />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={logo_img_4} className='home_img' />
        </Carousel.Item>
      </Carousel>

      <section>
        <Container>
          <div className='tac sec_2_hading'>
            <h2>SHOP BY <b>CATEGORY</b></h2>
          </div>
          <div>
            <div className='position-relative sec_2_cart d-flex justify-content-between '>
              <Link to="hanging">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={sec_2_hanging} />
                  <span className='position-absolute text-white'>HANGING LAMPS</span>
                </Card>
              </Link>
              <Link to={"/ceiling"}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={sec_2_ceiling} />
                  <span className='position-absolute text-white'>CEILING LAMPS</span>
                </Card>
              </Link>
              <Link to={"/wall"}>
                <Card style={{ width: '18rem' }} >
                  <Card.Img variant="top" src={sec_2_wall} />
                  <span className='position-absolute text-white'>WALL LAMPS</span>
                </Card>
              </Link>
              <Link to={"/floor"}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={sec_2_floor} />
                  <span className='position-absolute text-white'>FLOOR LAMPS</span>
                </Card>
              </Link>

            </div>
            <div className='position-relative sec_2_cart_2 d-flex justify-content-between'>
              <Link to={"/tablelamp"}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={sec_2_table} />
                  <span className='position-absolute text-white'>TABLE LAMPS</span>
                </Card>
              </Link>
              <Link to={"/outdoorlights"}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={sec_2_outdoor} />
                  <span className='position-absolute text-white'>OUTDOOR LIGHT</span>
                </Card>
              </Link>
              <Link to={"/mirrorlights"}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={sec_2_mirror} />
                  <span className='position-absolute text-white'>MIRROR LIGHT</span>
                </Card>
              </Link>
              <Link to={"/chandelier"}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={sec_2_chandelier} />
                  <span className='position-absolute text-white'>CHANDELIER LIGHT</span>
                </Card>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className='sec_3 text'>
        <Container>
          <div className='sec_3_hading tac'>
            <h2>Shop By <b>Space</b></h2>
          </div>
          <div className='sec_3_div_1 d-flex '>
            <div className='sec_3_cart col_50 position-relative'>
              <Image src={sec_3_living} />
              <span className='position-absolute text-white'>Living Room</span>
            </div>
            <div className='sec_3_cart col_50 position-relative'>
              <Image src={sec_3_badroom} />
              <span className='position-absolute text-white'>Badroom Room</span>
            </div>
          </div>
          <div className='d-flex sec_3_div_2'>
            <div className='sec_3_cart col_50 position-relative' >
              <Image src={sec_3_dining} />
              <span className='position-absolute text-white'>Dining Room</span>
            </div>
            <div className='sec_3_cart col_50 position-relative'>
              <Image src={sec_3_washroom} />
              <span className='position-absolute text-white'>Wash Room</span>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  )
}

export default Index