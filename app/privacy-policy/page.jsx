import Seo from '@components/Seo'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'

const page = () => {
  const privacyPolicy = (heading, desc) => {
    return (
      <div className="mt-5">
        <h5>{heading}</h5>
        <p className="mt-4">{desc}</p>
      </div>
    )
  }
  const pageTitle = 'Chartered Housing'
  const pageDescription =
    'real estate developers in bangalore, real estate builders in bangalore, best property developers in bangalore'
  const MetaImage = '/bannerImage/PrivacyBanner.png'
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
            src="/bannerImage/PrivacyBanner.png"
            alt="Chartered Housing Ongoing Apartment Project in Bangalore"
            layout="responsive"
            width={1000}
            height={500}
          />
        </div>
      </section>

      <Container className="mt-5 p-5 mb-5">
        <Row className="ps-5 pe-5">
          <Col xs={12} md={4}>
            <h1>
              PRIVACY <br /> POLICY
            </h1>
            <div className="horizontal-line mb-4" />
          </Col>
          <Col xs={12} md={8}>
            <p className="ms-5 mt-n4 w-75">
              This Privacy Policy governs the manner in which Chartered Housing
              collects, uses, maintains and discloses information collected from
              users of the website.
            </p>

            {privacyPolicy(
              'PERSONAL IDENTIFICATION INFORMATION:',
              'We may collect personal identification information from Users in a variety of ways, including, when the Users visit our website, fill out a form, or via any other feature we make available. Users will be asked for their name, email address and phone number. Users may, however, visit our website anonymously and always refuse to supply personal identification information, except that it may prevent them from engaging in certain website related activities.'
            )}

            {privacyPolicy(
              'NON-PERSONAL IDENTIFICATION INFORMATION:',
              'We may collect non-personal identification information about Users whenever they interact with our website. Non-personal identification information may include the browser name, the type of computer and technical information.'
            )}

            {privacyPolicy(
              'WEB BROWSER COOKIES:',
              'Our website may use “cookies” to enhance the User experience. User’s web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert the Users when cookies are being sent. If they do so, note that some parts of the website may not function properly. This is a standard operating procedure that is used across the internet.'
            )}

            {privacyPolicy(
              'HOW WE USE COLLECTED INFORMATION:',
              'Chartered Housing may collect and use User’s personal information for the following purposes:'
            )}

            <div className="mt-5">
              <h5>TO IMPROVE CUSTOMER SERVICE BY:</h5>
              <ul className="mt-4 ongoing-list-con">
                <li>
                  Using feedback provided by the Users to improve our services{' '}
                </li>
                <li>Respond to User query</li>
                <li>Send periodic emails to Users</li>
              </ul>
            </div>

            {privacyPolicy(
              'HOW WE PROTECT USER’S INFORMATION:',
              'We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of User’s personal information and data stored on our website. Note: As with data security, there are limits to its effectiveness and we indemnify ourselves in the event of an attack that is difficult to defend against. We also will do our best to retrieve any data that is lost as per available resources.'
            )}

            {privacyPolicy(
              'SHARING PERSONAL INFORMATION OF USERS:',
              'We do not sell or trade User’s personal identification information to others'
            )}

            {privacyPolicy(
              'CHANGES TO THIS PRIVACY POLICY:',
              'Chartered Housing will update this privacy policy at its sole discretion. Users are advised to check this page for any changes in the privacy policy and to stay informed about how the personal information of the Users is protected by us. The User’s hereby acknowledge and agree that it is their responsibility to review this privacy policy periodically and become aware of modifications.'
            )}

            {privacyPolicy(
              'YOUR ACCEPTANCE OF THESE TERMS:',
              'By using this Site, the Users signify their acceptance of this policy as may be modified from time to time. The Users are advised not to access this site if they do not agree to our privacy policy. The abovementioned privacy policy shall be applicable for the information and data collected by our call centers as well.'
            )}

            <div className="mt-5">
              <h5>CONTACT US:</h5>
              <p className="mt-4">
                If you have any questions about this Privacy Policy, the
                practices of this site, or your dealings with this site, please
                contact us at <span className="contact-number">9972012391</span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default page
