import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import Seo from '@components/Seo'

const page = () => {
  const pageTitle = 'Chartered Housing'
  const pageDescription =
    'real estate developers in bangalore, real estate builders in bangalore, best property developers in bangalore'
  const MetaImage = '/bannerImage/SitemapBanner.png'
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
            src="/bannerImage/SitemapBanner.png"
            alt="Chartered Housing Ongoing Apartment Project in Bangalore"
            className="responsive-image"
            width={1000}
            height={500}
          />
        </div>
      </section>

      <Container className="mt-5 p-5 mb-5">
        <Row className="ps-5 pe-5">
          <Col xs={12} md={5}>
            <h1>SITEMAP</h1>
            <div className="horizontal-line mb-4" />
          </Col>
          <Col xs={12} md={3}>
            <h3>ONGOING</h3>
            <ul className="ongoing-list-con">
              <li>
                <Link
                  className="text-decoration-none underline-on-hover text-black"
                  href="/ongoing"
                >
                  1956
                </Link>
              </li>
            </ul>

            <h3 className="mt-5">COMPLETED</h3>
            <ul className="ongoing-list-con">
              <li>
                {' '}
                <Link
                  className="text-decoration-none underline-on-hover text-black"
                  href="/bangalore-kanakapura-road"
                >
                  Kanakapura Road
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none underline-on-hover text-black"
                  href="/bangalore-electronic-city"
                >
                  Electronic City
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none underline-on-hover text-black"
                  href="/bangalore-nelamangala"
                >
                  Nelamangala
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none underline-on-hover text-black"
                  href="/bangalore-kanakapura-road"
                >
                  Chartered Hummingbird
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none underline-on-hover text-black"
                  href="/bangalore-electronic-city"
                >
                  Chartered Grasshopper
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none underline-on-hover text-black"
                  href="/bangalore-nelamangala"
                >
                  Chartered Veda
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <ul className="sitemap-list-con">
              <li>
                <Link
                  className="text-decoration-none underline-on-hover text-black"
                  href="/our-story"
                >
                  OUR STORY
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none underline-on-hover text-black"
                  href="/our-story"
                >
                  VISION & MISSION
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none underline-on-hover text-black"
                  href="/"
                >
                  TEAM
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none underline-on-hover text-black"
                  href="/our-story"
                >
                  AWARDS & RECOGNITIONS
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none underline-on-hover text-black"
                  href="/"
                >
                  TESTIMONIALS
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none underline-on-hover text-black"
                  href="/blog"
                >
                  BLOG
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none underline-on-hover text-black"
                  href="/csr-activities"
                >
                  CSR ACTIVITIES
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none underline-on-hover text-black"
                  href="/careeres"
                >
                  CAREERES
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none underline-on-hover text-black"
                  href="/faqs"
                >
                  FAQS
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default page
