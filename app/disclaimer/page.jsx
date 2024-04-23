import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import Seo from '@components/Seo'

const page = () => {
  const pageTitle = 'Chartered Housing'
  const pageDescription =
    'real estate developers in bangalore, real estate builders in bangalore, best property developers in bangalore'
  const MetaImage = '/bannerImage/DisclaimerBanner.png'
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
            src="/bannerImage/DisclaimerBanner.png"
            alt="Chartered Housing Ongoing Apartment Project in Bangalore"
            className="responsive-image"
            width={1000}
            height={500}
          />
        </div>
      </section>

      <Container className="mt-5 p-5 mb-5">
        <Row className="ps-5 pe-5">
          <Col xs={12} md={6}>
            <h1>DISCLAIMER</h1>
            <div className="horizontal-line mb-4" />
          </Col>
          <Col xs={12} md={6}>
            <p>
              By accessing this website, you unconditionally accept this
              disclaimer without limitation or qualification.
            </p>
            <p>
              The content on the Chartered Housing website is intended solely
              for general information, and isn’t to be construed, under any
              circumstances, by implication or otherwise, as an advertisement
              and/or an offer to sell or a solicitation to buy or sell or trade.
              In no event should the content of this website be construed as an
              expressed or implied promise, guarantee or implication by or from
              any of the organisation’s officers, directors, employees,
              affiliates or other agents.
            </p>
            <p>
              While the organisation ensures that the content of this website is
              regularly updated, it does not accept liability for its website
              being accurate, complete or up-to-date, or for the contents of
              external links. The project brochures, specifications, designs,
              floor plans and rendered images/visualizations provided in the
              website contain forward-looking information and plans that involve
              risks, uncertainties and assumptions. If such risks or
              uncertainties materialize or such assumptions prove incorrect, the
              results of this organisation and its consolidated subsidiaries
              could differ significantly from those expressed or implied by such
              forward-looking information and assumptions. This organisation
              assumes no obligation or undertaking to update or revise the
              information herein. The actual photographs of homes, products and
              projects contained in the website are from the past and they are
              not an indication, implication, promise or guarantee towards the
              future results of the organisation. The organisation is not
              responsible for direct, indirect, incidental or consequential loss
              or damages arising out of, resulting from, or any way connected to
              the use of the information in this website.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default page
