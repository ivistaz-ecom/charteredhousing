import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import ReadMoreBtn from './ReadMoreBtn'

const Blogs = ({ blogsItem }) => {
  const {
    id,
    slug,
    title,
    description1,
    description2,
    description3,
    imageUrl,
    name,
    details,
  } = blogsItem

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <div className="p-md-5 mx-md-5">
            <h1 className="col-md-6">{title}</h1>
            <div className="horizontal-line mb-4 mb-md-0" />
          </div>
        </Col>
        <Col xs={12} md={7} className="ms-md-auto">
          <div>
            <p>{description1}</p>
            <p>{description2}</p>
            <p>{description3}</p>
          </div>
        </Col>

        <Col xs={12} md={8} className="ms-md-auto">
          <div className="mb-5">
            <Image
              src={imageUrl}
              alt={name}
              loading="lazy"
              width={1000}
              height={500}
              layout="responsive"
              className="mt-4"
            />
            <h4 className="fw-light mt-4">{name}</h4>
            <p className="mt-4 w-75">{details}</p>
            <ReadMoreBtn slug={slug} />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Blogs
