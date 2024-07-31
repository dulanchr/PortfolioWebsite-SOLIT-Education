// Accordion.js
function Accordion({ accordionContent = [] }) {
  return (
    <div className="accordion aximo-accordion-wrap" id="aximo-accordion">
      {accordionContent.length > 0 ? (
        accordionContent.map((item, index) => (
          <div className="accordion-item" key={index}>
            <h3 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
              >
                {item.header}
              </button>
            </h3>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              data-bs-parent="#aximo-accordion"
            >
              <div className="accordion-body">{item.body}</div>
            </div>
          </div>
        ))
      ) : (
        <div>No content available</div>
      )}
    </div>
  );
}

export default Accordion;
