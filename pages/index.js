import React from 'react'
import { Carousel } from 'react-bootstrap'

import Header from './layout/header'
import Footer from './layout/footer'

export default function Index() {
  return (
    <div className="body__content">

      <Header/>

      <main>
        <section className="section__one--home" id="section_1">
        <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100 imgBanner"
      src="https://ceizs.com.br/wp-content/uploads/2020/03/1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://ceizs.com.br/wp-content/uploads/2020/03/1.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://ceizs.com.br/wp-content/uploads/2020/03/1.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </section>
        <section className="section__two" id="section_2">
          teste1
        </section>
        <section className="section__two" id="section_3">
          teste2
        </section>
      </main>

      <Footer/>
    </div>
  )
}
