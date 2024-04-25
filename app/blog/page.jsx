import BlogCard from '@components/BlogCard'
import Seo from '@components/Seo'
import { blogs } from '@utils/menu'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'

const page = () => {
  const pageTitle = 'Chartered Housing'
  const pageDescription =
    'real estate developers in bangalore, real estate builders in bangalore, best property developers in bangalore'
  const MetaImage = '/bannerImage/BlogBanner.png'
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
            src="/bannerImage/BlogBanner.png"
            alt="Chartered Housing - HTML Sitemap"
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
              <h1>BLOG</h1>
              <div className="horizontal-line mb-4" />
            </div>
          </Col>
          <Col className="d-flex justify-content-center pb-5 gap-4 flex-wrap">
            {blogs.map((item) => (
              <BlogCard key={item.id} cardItems={item} />
            ))}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default page
