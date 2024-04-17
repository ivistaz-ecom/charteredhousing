import Card from '@components/Card'
import { sitemap } from '@utils/menu'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'

const page = () => {
  return (
    <>
      <section className="mb-5">
        <div>
          <Image
            src="/bannerImage/BlogBanner.png"
            layout="responsive"
            alt="Chartered Housing - HTML Sitemap"
            width={1000}
            height={500}
          />
        </div>
      </section>

      <Container>
        <Row>
          <Col xs={12}>
            <div className="p-md-5 mx-md-5">
              <h1>BLOG</h1>
              <div className="horizontal-line mb-4" />
            </div>
          </Col>
          <Col className="d-flex justify-content-center pb-5 gap-4 flex-wrap">
            {sitemap.map((item) => (
              <Card key={item.id} cardItems={item} />
            ))}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default page
