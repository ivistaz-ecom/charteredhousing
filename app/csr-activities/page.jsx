import Card from '@components/Card'
import { csrActivities } from '@utils/menu'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'

const page = () => {
  return (
    <>
      <section className="mb-5">
        <div>
          <Image
            src="/bannerImage/CSRBanner.png"
            layout="responsive"
            alt="Chartered Housing  - CSR Activities"
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
          <Col
            xs={12}
            className="d-flex justify-content-center pb-5 gap-4 flex-wrap"
          >
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
