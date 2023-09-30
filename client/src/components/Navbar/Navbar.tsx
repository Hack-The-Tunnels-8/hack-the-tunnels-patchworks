import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAccountContext } from "../../context";
import "./Navbar.style.scss";

function Navbar() {
  const { loggedIn, logout } = useAccountContext();
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navbar_wrapper">
      <div className="navbar__logo">

        <Link to="#">
        <img src="https://cdn.glitch.global/def88561-e477-44d1-8fee-d2262d06e400/Component%201.svg?v=1696096848006"></img>
        </Link>

      </div>
      <div className="navbar__account">
        {loggedIn() === false ? (
          <>
            <button onClick={() => navigate("/sign-up")}>Sign Up</button>
            <button onClick={() => navigate("/login")}>Login</button>
            <button onClick={() => navigate("/login")} id ="logout_btn">Logout</button>
          </>
        ) : (
          <button onClick={() => logout()}>Logout</button>
        )}
      </div>
      </div>
    </div>
  );
}

export default Navbar;
