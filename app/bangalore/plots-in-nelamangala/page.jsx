import BankLogo from '@components/BankLogo'
import { banksLogo, vedaProject } from '@utils/menu'
import { Container, Row, Col } from 'react-bootstrap'
import SliderCon from '../../../components/Slider'
import Image from 'next/image'
import Seo from '@components/Seo'

const page = () => {
  const pageTitle = 'Chartered Housing'
  const pageDescription =
    'Site For Sale In Nelamangala, residential plots in nelamangala, residential plots in nelamangala bangalore'
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
            src="/bannerImage/NelamangalaBanner.png"
            className="responsive-image"
            alt="Chartered Veda - Plots in Nelamangala, Bangalore"
            width={1000}
            height={500}
          />
        </div>
      </section>

      <Container className="mt-3 mt-lg-5 p-4 p-lg-5">
        <Row className="px-3 px-lg-5 mb-4">
          <Col xs={12} md={6}>
            <h1 className="mb-0">PLOTS</h1>
            <h1 className="fs-2 mt-0">IN NELAMANGALA</h1>

            <div className="horizontal-line mb-4" />
          </Col>
          <Col xs={12} md={6}>
            <div className="mb-5">
              <p>
                Today, the city of Bangalore is expanding and one of the most
                promising localities is Nelamangala. Located close to two
                National Highways, NH-48 (Bangalore-Mangalore) and NH-4
                (Mumbai-Chennai), Nelamanagala has developed a lot in a short
                span of time.
              </p>
              <p>
                The expressway project between Nelamangala and Yeshwantpur has
                also fuelled more developments and helped ease the strain on the
                roadways. This project has also helped connect the area to the
                airport and has significantly reduced the travel time. It has
                also helped attract industrial developments and the government
                has identified the area as having the potential to house
                small-scale industry projects. It is already home to a number of
                warehouses.
              </p>
              <p>
                The value of land in Nelamangala has already begun to show
                steady appreciation. Many developers have chosen the locality
                for their next projects as it offers easy connectivity to other
                areas, schools, colleges and industrial areas. Chartered Housing
                offers plots in Nelamangala, in an eco-friendly environment, and
                with all modern amenities. The area offers pleasant green cover
                unlike other areas in Bangalore and by investing in these plots
                in Bangalore, enjoy easy access to the city while enjoying the
                peace and quiet that comes with the locality.
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
              <h1>VEDA</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <SliderCon imageUrls={vedaProject} />

            <div className="m-4 m-lg-5 px-5">
              <h1>THE STORY</h1>
              <div className="horizontal-line mb-4" />
              <p>
                Chartered Veda is a plotted development project that promises to
                meet the requirements of a new plot owner in Bangalore. Located
                in Nelamangala, these plots are near the railway station and
                NH48 highway and thus are easily accessible from across the
                city.
              </p>
              <p>
                Each of the 188 plots ranges from 1200 sq. ft. to 1500 sq. ft.
                and offers a variety of amenities like a swimming pool,
                clubhouse, party hall and more. These RERA-approved plots are
                equipped with a variety of offerings like parks, wide asphalted
                roads, stormwater collection systems with rainwater harvesting,
                and underground electrical systems with PHE services etc. If you
                are looking for some of the best plots in Bangalore, then your
                search ends here.
              </p>
            </div>

            <div className="m-4 m-lg-5 px-5">
              <h3 className="fw-light mb-3">HIGHLIGHTS</h3>
              <div className="highlight-border p-3">
                <p>
                  <span className="fw-bold">Launch Date:</span> 2018
                </p>
                <hr />
                <p>
                  <span className="fw-bold">Location:</span>
                  <span>
                    {' '}
                    Chikkaballapura, Annappacharya, Mylanahalli, Karnataka
                    562123
                  </span>
                </p>
              </div>
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
