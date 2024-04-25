import BankLogo from '@components/BankLogo'
import { amenities, banksLogo, ongoingProject } from '@utils/menu'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import SliderCon from '../../components/Slider'
import Seo from '@components/Seo'

const page = () => {
  const pageTitle = 'Chartered Housing'
  const pageDescription =
    'real estate developers in bangalore, real estate builders in bangalore, best property developers in bangalore'
  const MetaImage = '/bannerImage/OngoingBanner.png'
  const url = 'https://www.charteredhousing.com/'

  return (
    <>
      <Seo
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        MetaImage={MetaImage}
        url={url}
      />
      <section className="mb-lg-5">
        <div>
          <Image
            src="/bannerImage/OngoingBanner.png"
            alt="Chartered Housing Ongoing Apartment Project in Bangalore"
            className="responsive-image"
            width={1000}
            height={500}
          />
        </div>
      </section>

      <Container className="mt-3 mt-lg-5 p-4 p-lg-5">
        <Row className="px-3 px-lg-5 mb-4">
          <Col xs={12} md={6}>
            <h1>
              ONGOING <br /> PROJECTS
            </h1>
            <div className="horizontal-line mb-4" />
          </Col>
          <Col xs={12} md={6}>
            <p>
              Our ongoing project, Chartered 1956, has a unique story dating
              back to 1956, giving it an extra touch of distinction. It’s not
              just another project—it’s a perfect mix of luxury and space, which
              we refer to as ‘luxcious’. Chartered 1956 is our latest
              masterpiece, redefining what it means to live lavishly.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="border p-0 slider-con mt-5">
        <Row>
          <Col className="d-flex justify-content-center mt-4">
            <div className="text-center chartered-1956">
              <p>CHARTERED</p>
              <h1>1956</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <SliderCon imageUrls={ongoingProject} />

            <div className="m-4 m-lg-5 px-5">
              <h1>THE STORY</h1>
              <div className="horizontal-line mb-4" />
              <p>
                The project proudly stands on a piece of land allotted at the
                instance of the then King of Mysore to the parents of the
                current owners in the year 1956. That is indeed a year so
                memorable and hence, we chose to name the project Chartered
                1956. It symbolizes a bridge between the storied past and the
                present, offering a place where history is not just remembered
                but lived. This connection to royalty enriches its significance
                as we weave tales of architectural brilliance for generations to
                come, leading to luxcious living.
              </p>
            </div>

            <div className="m-4 m-lg-5 px-5">
              <h3 className="fw-light mb-3">HIGHLIGHTS</h3>
              <div className="highlight-border p-3">
                <p>
                  <span className="fw-bold">Launch Date:</span> 15 January 2024
                </p>
                <hr />
                <p>
                  <span className="fw-bold">Location:</span>
                  <span>
                    {' '}
                    Vasanthnagar, Palace Road(part of Bengaluru’s Central
                    Business District-CBD), Opp. Mt. Carmel’s College, near
                    Shangri-La Hotel
                  </span>
                </p>
              </div>
            </div>

            <div className="m-4 m-lg-5 px-5">
              <h3 className="fw-light mb-3">PROJECT DETAILS</h3>
              <div className="highlight-border p-3">
                <ul className="d-flex flex-wrap project-details-list-con">
                  <li>9-floor apartment</li>
                  <li>7 boutique apartments, 1 each floor</li>
                  <li>Each apartment ranging between 14 -15 CR</li>
                  <li>Lift into the personal lobby on each floor</li>
                  <li>5400 sft with 4 BHK + 4 bathrooms</li>
                  <li>Separate maid’s quarters</li>
                  <li>
                    Separate service lift behind the kitchen for the maids or
                    food/parcel delivery
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
        <Container className="p-5">
          <Row className="ps-5 pe-5">
            <Col>
              <h1>AMENITIES</h1>
              <div className="horizontal-line" />
            </Col>
          </Row>
        </Container>

        <Row>
          <Col>
            <div className="amenities-bg ongoing-project mt-4">
              <ul className="amenities-item-con m-0 p-0">
                {amenities.map((item) => {
                  return (
                    <li className="border p-4 amenities-item" key={item.id}>
                      <Image
                        src={item.logoUrl}
                        alt="amenities"
                        width={50}
                        height={50}
                      />
                      <p className="mt-3">{item.title}</p>
                    </li>
                  )
                })}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <Row>
          <Col className="text-center">
            <h1 className="fw-light">OUR BANKING PARTNERS</h1>
            <ul className="d-flex flex-wrap justify-content-center gap-4 mt-4">
              {banksLogo.map((item) => (
                <BankLogo key={item.id} logo={item} />
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default page
