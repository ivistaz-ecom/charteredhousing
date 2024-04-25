import BankLogo from '@components/BankLogo'
import { amenities, banksLogo, grasshopperProject } from '@utils/menu'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import SliderCon from '../../../components/Slider'
import Seo from '@components/Seo'

const page = () => {
  const pageTitle = 'Chartered Housing'
  const pageDescription =
    'luxury villas electronic city, villa projects in bangalore, villas in south bangalore'
  const MetaImage = '/bannerImage/ElectronicCityBanner.png'
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
            src="/bannerImage/ElectronicCityBanner.png"
            alt="Villas between Koramangala and Electronic city, Bangalore."
            className="responsive-image"
            width={1000}
            height={500}
          />
        </div>
      </section>

      <Container className="mt-3 mt-lg-5 p-4 p-lg-5">
        <Row className="px-3 px-lg-5 mb-4">
          <Col xs={12} md={6}>
            <h1 className="mb-0">VILLAS</h1>
            <h1 className="fs-2 mt-0">IN ELECTRONIC CITY</h1>

            <div className="horizontal-line mb-4" />
          </Col>
          <Col xs={12} md={6}>
            <div className="mb-5">
              <p>
                Located between Koramangala and Electronic City, Chartered
                Grasshopper is a 3 & 4 BHK row villa project. Consisting of just
                56 units amidst 5-acres of serene surroundings, the project
                offers luxury in every sense. Whether it’s space or comfort,
                proximity to IT firms or entertainment hubs, seclusion or peace
                of mind, Chartered Grasshopper accommodates it all. Luxury
                apart, Chartered Grasshopper offers the luxury of amenities
                including a clubhouse, swimming pool, and state-of-the-art gym,
                to mention a few.
              </p>
              <p>
                Welcome to luxury living at our villas between Koramangala and
                Electronics city.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="border p-0 slider-con mt-5">
        <Row>
          <Col className="d-flex justify-content-center mt-4">
            <div className="text-center chartered-1956">
              <p className="mb-0">CHARTERED</p>
              <h1>GRASSHOPPER</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <SliderCon imageUrls={grasshopperProject} />

            <div className="m-4 m-lg-5 px-5">
              <h1>THE STORY</h1>
              <div className="horizontal-line mb-4" />
              <p>
                Located on Kanakapura Road, close to the Metro Station, D-mart,
                renowned schools (Kumarans, BGS, JSS, and DPS) and hospitals
                (Apollo, Fortis, BGS) yet far from the hustle and bustle,
                Chartered Hummingbird consists of 2 & 3 BHK apartments. These
                apartments are well within reach, from an investment perspective
                too.
              </p>
              <p>
                Built on 1.5 acres of land with ample open spaces, the 117
                apartments ranging from 1042-1513 sq.ft., offer all modern
                amenities. A gym, swimming pool, play area, clubhouse with
                multi-purpose hall and surrounding landscape gardens, ensure a
                luxury living for all age groups.
              </p>
              <p>Welcome to a new home in Kanakapura.</p>
            </div>

            <div className="m-4 m-lg-5 px-5">
              <h3 className="fw-light mb-3">HIGHLIGHTS</h3>
              <div className="highlight-border p-3">
                <p>
                  <span className="fw-bold">Launch Date:</span> 2016
                </p>
                <hr />
                <p>
                  <span className="fw-bold">Location:</span>
                  <span>
                    {' '}
                    Pragathi Nagar, Basapura, Bengaluru, Karnataka 560100
                  </span>
                </p>
              </div>
            </div>

            <div className="m-4 m-lg-5 px-5">
              <h3 className="fw-light mb-3">PROJECT DETAILS</h3>
              <div className="highlight-border p-3">
                <ul className="d-flex flex-wrap project-details-list-con">
                  <li>3528 - 4010 sq. ft.</li>
                  <li>800 meters from Metro station</li>
                  <li>Close to Schools: DPS, Vibgyor, Candor International</li>
                  <li>Unique Designs</li>
                  <li>Close to DMart, Metro Cash, Carry</li>
                  <li>
                    Close to Corporates: Infosys, Wipro, Bosch, HCL, TCS, HP,
                    BIOCON, and many more
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
            <div className="amenities-bg hummingbird mt-4">
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
