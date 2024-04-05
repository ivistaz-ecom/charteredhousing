import { Col } from 'react-bootstrap'

Col

const Projects = ({ projectDetails }) => {
  const { year, title, address, borderStyle } = projectDetails
  return (
    <Col sm={4}>
      <li className={`m-3 mb-4 p-3 ${borderStyle}`}>
        <div className="me-4 mb-3 project-container text-center">
          <h2 className="project-year">{year}</h2>
          <h6 className="project-title">{title}</h6>
          <p className="project-add">{address}</p>
        </div>
      </li>
      <div className="horizontal-line-red" />
    </Col>
  )
}

export default Projects
