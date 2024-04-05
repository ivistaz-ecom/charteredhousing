'use client'
import React, { useState, useRef, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'

function Partners() {
  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  let sliderRef1 = useRef(null)
  let sliderRef2 = useRef(null)

  useEffect(() => {
    setNav1(sliderRef1)
    setNav2(sliderRef2)
  }, [])

  function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'red' }}
        onClick={onClick}
      />
    )
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'green' }}
        onClick={onClick}
      />
    )
  }

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={`/images/Gallery/gallery.png`} />
        </a>
      )
    },
    className: 'slider variable-width',
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    fade: false,
    autoplay: false,
    // arrow: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  }

  return (
    <>
      <div className="text-center py-4 p-4 z-0">
        <div className="my-3">
          <div className="container p-5">
            <div className="slider-container p-5 -z-5 mx-auto">
              <Slider
                asNavFor={nav2}
                ref={(slider) => (sliderRef1 = slider)}
                className="p-5"
              >
                <div>
                  <Image
                    src="/ongoingProject/Project image 1.jpg"
                    className="w-75"
                    width={200}
                    height={600}
                  />
                </div>
                <div>
                  <Image
                    src="/ongoingProject/Project image 2.jpg"
                    className="w-75"
                    width={200}
                    height={600}
                  />
                </div>
                <div>
                  <Image
                    src="/ongoingProject/Project image 3.jpg"
                    className="w-75"
                    width={200}
                    height={600}
                  />
                </div>
                <div>
                  <Image
                    src="/ongoingProject/Project image 4.jpg"
                    className="w-75"
                    width={200}
                    height={600}
                  />
                </div>
              </Slider>

              <Slider
                asNavFor={nav1}
                ref={(slider) => (sliderRef2 = slider)}
                slidesToShow={4}
                className={'slider-variable slider'}
                swipeToSlide={true}
                focusOnSelect={true}
                dots={false}
                arrows={false}
              >
                <div>
                  <Image
                    src="/ongoingProject/Project image 1.jpg"
                    className="border border-white"
                    width={134}
                    height={69}
                  />
                </div>
                <div>
                  <Image
                    src="/ongoingProject/Project image 2.jpg"
                    className="border border-white"
                    width={134}
                    height={69}
                  />
                </div>
                <div>
                  <Image
                    src="/ongoingProject/Project image 3.jpg"
                    className="border border-white"
                    width={134}
                    height={69}
                  />
                </div>
                <div>
                  <Image
                    src="/ongoingProject/Project image 4.jpg"
                    className="border border-white"
                    width={134}
                    height={69}
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Partners