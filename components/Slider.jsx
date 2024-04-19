'use client'
import React, { useState, useRef, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import { ongoingProject } from '@utils/menu'

function Partners({ imageUrls }) {
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
      <div className="text-center p-4">
        <div className="my-3">
          <div className="container">
            <div className="slider-container">
              <Slider
                asNavFor={nav2}
                ref={(slider) => (sliderRef1 = slider)}
                className="p-5"
              >
                {imageUrls.map((item) => {
                  return (
                    <div>
                      <Image
                        src={item.imageUrl}
                        alt={item.altText}
                        className="w-75"
                        layout="responsive"
                        width={1000}
                        height={500}
                      />
                    </div>
                  )
                })}
              </Slider>
              <div className="w-50 slider">
                <Slider
                  asNavFor={nav1}
                  ref={(slider) => (sliderRef2 = slider)}
                  slidesToShow={4}
                  className={'slider-variable'}
                  swipeToSlide={true}
                  focusOnSelect={true}
                  dots={false}
                  arrows={false}
                >
                  {imageUrls.map((item) => {
                    return (
                      <div>
                        <Image
                          src={item.imageUrl}
                          alt={item.altText}
                          className="border border-4 border-light w-75"
                          layout="responsive"
                          width={1000}
                          height={500}
                        />
                      </div>
                    )
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Partners
