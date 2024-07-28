import { Link } from "react-router-dom";

function HeroContent() {
  return (
    <div className="aximo-hero-content2">
      <h1>Art of Learning, the Science of Success</h1>
      <p>
        We believe in the power of innovation and are passionate about helping
        startups thrive. As a startup company, we are a dynamic and innovative
        organization that provides comprehensive support, guidance and resources
        to early stage startups.
      </p>
      <div className="aximo-hero-btn-wrap center">
        <Link
          className="aximo-default-btn aximo-default-btn-outline"
          to="/service"
        >
          <span className="aximo-label-up">
            Explore Our Services <span> </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="16"
              height="16"
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </span>
          <span className="aximo-label-up">
            Explore Our Services <span> </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="16"
              height="16"
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default HeroContent;
