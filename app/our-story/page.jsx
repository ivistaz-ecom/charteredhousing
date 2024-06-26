import Awards from '@components/Awards'
import Seo from '@components/Seo'
import { awardsMenu } from '@utils/menu'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'

const page = () => {
  const pageTitle = 'Chartered Housing'
  const pageDescription =
    'real estate developers in bangalore, real estate builders in bangalore, best property developers in bangalore'
  const MetaImage = '/bannerImage/OurStoryBanner.png'
  const url = 'https://www.charteredhousing.com/'

  return (
    <>
      <Seo
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        MetaImage={MetaImage}
        url={url}
      />

      <div>
        <Image
          src="/bannerImage/OurStoryBanner.png"
          className="responsive-image"
          width={1000}
          height={500}
        />
      </div>

      <Container className="mt-4 pb-2 mt-lg-5 p-lg-5">
        <Row className="px-lg-5">
          <Col xs={12} md={6}>
            <h1>
              OUR <br className="d-none d-md-block" /> STORY
            </h1>
            <div className="horizontal-line mb-4" />
          </Col>
          <Col xs={12} md={6}>
            <p>
              A growing list of delighted customers, many successful projects
              and some accolades are proof enough that our passion continues to
              be rock-solid.
            </p>
            <p>
              While building homes is our passion, building a better world is
              our responsibility. We take corporate social responsibility
              seriously and contribute to society and the planet, as much as we
              can. Hoping to give back to the world that has given us
              everything, in the last three decades.
            </p>
            <p>
              As we set foot into another decade, we wish to aim higher, deliver
              better and delight more by offering Quality through Transparency.
            </p>
            <h1 className="mt-4">
              CHARTERED HOUSING <br className="d-none d-md-block" /> VISION AND
              MISSION
            </h1>
            <div className="horizontal-line mb-4" />
            <p className="">
              After a journey of over three decades, multiple challenging
              projects, and dealing with the volatile real estate market, we
              believe a strong foundation results in success and excellence.
            </p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <div className="d-flex flex-column flex-lg-row">
              <div className="vision-con me-lg-2">
                <div className="p-4 content-con">
                  <p className="fs-3">Vision</p>
                  <ul className="list-con">
                    <li className="fs-6">
                      To be recognised among the leading real estate firms in
                      the country by building quality residential and commercial
                      structures.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="vision-con mission-con ms-lg-2 pt-5">
                <div className="p-4">
                  <p className="fs-3">Mission</p>
                  <div className="d-flex gap-3">
                    <ul className="list-con">
                      <li className="fs-6">
                        To strive and build high-quality residential structures
                        and pursue commercial spaces as well.
                      </li>

                      <li className="fs-6">
                        To work towards enhancing the quality by incorporating
                        proper systems.
                      </li>
                      <li className="fs-6">
                        To diversify into the Hospitality sector and establish
                        ourselves in Infrastructure development.
                      </li>
                    </ul>
                    <ul className="list-con">
                      <li className="fs-6">
                        To offer the best services for sale and lease.
                      </li>
                      <li className="fs-6">
                        To grow and expand our reach to other cities outside
                        Bangalore.
                      </li>
                      <li className="fs-6">
                        To look into backward integration in
                        construction-related products.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <Row>
          <Col className="text-center">
            <h1>AWARDS AND RECOGNITIONS</h1>
            <p className="mt-4">
              Our work and our customers’ delight have been our biggest
              inspiration. But when the journey spans 30 years, rewards are
              bound to come your way. Ours have come in many ways, such as the
              multiple awards we’ve won over the years.
            </p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <ul className="d-flex flex-column flex-md-row justify-content-between p-3 mt-5 shadow">
              {awardsMenu.map((item) => (
                <Awards key={item.id} awardsDetails={item} />
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default page
