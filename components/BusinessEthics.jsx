const BusinessEthics = ({ ethics }) => {
  return (
    <>
      <div className="accordion mb-3 px-md-5 mx-md-5" id="#accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed accordion-custom-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${ethics.id}`}
              aria-expanded="true"
              aria-controls={`collapse${ethics.id}`}
            >
              {ethics.title}
            </button>
          </h2>
          <div
            id={`collapse${ethics.id}`}
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>{ethics.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BusinessEthics
