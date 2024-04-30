import { Col } from 'react-bootstrap'

const Projects = ({ projectDetails }) => {
  const { year, title, address, borderStyle } = projectDetails
  return (
    <>
      <Col md={6} lg={4} className=" d-none d-md-block">
        <li className={`completed-project-item m-3 p-3 ${borderStyle}`}>
          <div className="me-4 mb-3 project-container text-center">
            <h1 className="project-year">{year}</h1>
            <p className="project-title">{title}</p>
            <p className="project-add">{address}</p>
          </div>
        </li>
        <div className="horizontal-line-red w-100" />
      </Col>
      <Col md={6} lg={4} className="d-block d-md-none">
        <li className={`m-3 mb-4 p-3`}>
          <div className="me-4 mb-3 project-container text-center">
            <h1 className="project-year">{year}</h1>
            <p className="project-title">{title}</p>
            <p className="project-add">{address}</p>
          </div>
        </li>
        <div className="horizontal-line-red w-100" />
      </Col>
    </>
  )
}

export default Projects
