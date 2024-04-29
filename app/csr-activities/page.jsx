import Card from '@components/CSRcard'
import Seo from '@components/Seo'
import { csrActivities } from '@utils/menu'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'

const page = () => {
  const pageTitle = 'Chartered Housing'
  const pageDescription =
    'real estate developers in bangalore, real estate builders in bangalore, best property developers in bangalore'
  const MetaImage = '/bannerImage/CSRBanner.png'
  const url = 'https://www.charteredhousing.com/'

  return (
    <>
      <Seo
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        MetaImage={MetaImage}
        url={url}
      />
      <section className="mb-5">
        <div>
          <Image
            src="/bannerImage/CSRBanner.png"
            alt="Chartered Housing  - CSR Activities"
            className="responsive-image"
            width={1000}
            height={500}
          />
        </div>
      </section>

      <Container>
        <Row>
          <Col xs={12}>
            <div className="p-md-5 mx-md-5">
              <h1>CSR ACTIVITIES</h1>
              <div className="horizontal-line mb-4" />
            </div>
          </Col>
        </Row>
        <Row className="ms-5 ps-5">
          <Col className="d-flex pb-5 ps-5 gap-4 flex-wrap">
            {csrActivities.map((item) => (
              <Card key={item.id} cardItems={item} />
            ))}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default page
