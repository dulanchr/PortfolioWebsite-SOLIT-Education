import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo/logo-dark.svg";
function HeaderLogo() {
  return (
    <div className="brand-logo">
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
    </div>
  );
}

export default HeaderLogo;