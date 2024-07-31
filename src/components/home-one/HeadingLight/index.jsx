// HeadingLight.js
import Accordion from "./Accordion";
import Content from "./Content";

function HeadingLight({ content, accordionContent }) {
  return (
    <div className="section">
      <div className="container">
        <div className="aximo-faq-wrap">
          <div className="row">
            <div className="col-lg-7 d-flex align-items-center">
              <Content content={content} />
            </div>
            <div className="col-lg-5">
              <Accordion accordionContent={accordionContent} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeadingLight;
