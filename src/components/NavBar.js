import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  // const { state, dispatch } = useContext(Usercontext);
  const user = localStorage.getItem("user");
  const navigate = useNavigate();
  const renderList = () => {
    if (user) {
      return [
        <li>
          <Link to="/profile" className="navBarlink">
            Profile
          </Link>
        </li>,
        <li>
          <Link to="/create-post" className="navBarlink">
            Create Post
          </Link>
        </li>,
        <li>
          <button
            className="btn waves-effect btn-large red darken-1"
            style={{
              fontWeight: "600",
              borderRadius: "5px",
              marginRight: "25px",
            }}
            onClick={() => {
              localStorage.clear();
              navigate("/login");
            }}
          >
            Logout
          </button>
        </li>,
      ];
    } else {
      return [
        <li>
          <Link to="/login" className="navBarlink">
            Login
          </Link>
        </li>,
        <li>
          <Link to="/signup" className="navBarlink">
            Signup
          </Link>
        </li>,
      ];
    }
  };
  return (
    <>
      <nav>
        <div className="nav-wrapper white">
          <Link to={user ? "/" : "/login"} className="brand-logo left">
            Instagram
          </Link>
          <ul id="nav-mobile" className="right">
            {renderList()}
          </ul>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
