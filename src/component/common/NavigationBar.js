import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setAuthUser } from "../../actions/authUser";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Nav, Navbar, NavLink } from "react-bootstrap";

const NavigationBar = (props) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    props.dispatch(setAuthUser(null));
    navigate("/login");
  };
  return (
    <Navbar collapseOnSelect expand="sm" className="bgg" variant="dark">
      <Navbar.Toggle
        aria-controls="navbarScroll"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
      />
      <Navbar.Brand className="p-3">Web Poll App</Navbar.Brand>
      <Navbar.Collapse id="navbarScroll">
        <Container>
          <Nav>
            <NavLink as={Link} to="/">
              Home
            </NavLink>
            <NavLink as={Link} to="/leaderboard">
              Leaderboard
            </NavLink>
            <NavLink as={Link} to="/add">
              New
            </NavLink>

            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text className="p-2">
                Signed in as: <>{props.authUser ? props.authUser.id : ""}</>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                  className="rounded-circle p-2"
                  height="37"
                  alt="Avatar"
                  loading="lazy"
                />
              </Navbar.Text>
              <Navbar.Text>
                <Button
                  data-testid="logout-button"
                  variant="outline-warning"
                  className=""
                  size="sm"
                  onClick={handleLogout}
                >
                  <span className="ml-3">signout</span>
                </Button>
              </Navbar.Text>
            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = ({ dispatch, authUser }) => ({
  dispatch,
  authUser,
});
export default connect(mapStateToProps)(NavigationBar);
