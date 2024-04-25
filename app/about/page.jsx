import Leader from '@components/Leader'
import Seo from '@components/Seo'
import { leaders } from '@utils/menu'
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
            src="/bannerImage/AobutBanner.png"
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
              <h1>LEADERSHIP</h1>
              <div className="horizontal-line mb-4" />
            </div>
          </Col>

          <Col xs={12} className="p-md-5 mx-md-5">
            {leaders.map((item) => (
              <Leader key={item.id} leader={item} />
            ))}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default page
