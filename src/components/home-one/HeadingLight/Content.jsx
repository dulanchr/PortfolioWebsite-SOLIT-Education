// Content.js
import Star2Img from "../../../assets/images/v1/star2.png";

function Content({ content }) {
  return (
    <div className="aximo-default-content">
      <h2>
        <span className="aximo-title-animation">
          {content.title}
          <span className="aximo-title-icon">
            <img src={Star2Img} alt="Star2Img" />
          </span>
        </span>
      </h2>
      {content.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

export default Content;
