import { Button } from 'react-bootstrap'

const Card = ({ cardItems }) => {
  const { title, description } = cardItems
  return (
    <div className="card custom-card border-0" style={{ width: '28rem' }}>
      <div className="card-body d-flex flex-column align-items-start ">
        <h5 className="card-title mb-3">{title}</h5>
        <p className="card-text">{description}</p>

        <Button
          variant="btn btn-primary"
          className="rounded-0 enquire-btn border-0 mt-auto"
        >
          Continue reading
        </Button>
      </div>
    </div>
  )
}

export default Card
