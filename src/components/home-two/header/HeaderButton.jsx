import { Link } from "react-router-dom";
function HeaderButton() {
  return (
    <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
      <Link className="aximo-default-btn" to="/contact-us">
        <span className="aximo-label-up">Join Now</span>
        <span className="aximo-label-up">Join Now</span>
      </Link>
    </div>
  );
}

export default HeaderButton;
