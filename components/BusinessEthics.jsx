const BusinessEthics = ({ ethics }) => {
  return (
    <div class="accordion mb-3" id={`item${ethics.id}`}>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button accordion-custom-btn"
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
          class="accordion-collapse collapse"
          data-bs-parent={`item${ethics.id}`}
        >
          <div class="accordion-body">
            <p>{ethics.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessEthics
