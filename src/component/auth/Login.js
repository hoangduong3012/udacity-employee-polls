import { connect } from "react-redux";
import { useState } from "react";
import { handleUserLogin } from "../../actions/authUser";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NavigationBar from "../common/NavigationBar";
import { Footer } from "../common/Footer";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import { Container } from "react-bootstrap";

const Login = (props) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("hoangbui");
  const [password, setPassword] = useState("password123");
  const { state } = useLocation();

  const handleSubmit = (e) => {
    props.dispatch(handleUserLogin(username, password));
    navigate(state?.path || "/");
  };
  return (
    <div>
      <div className="d-flex justify-content-center login-wrapper bg-grey text-dark p-5 text-center text-sm-start">
        <div className="Container">
          <div className="d-sm-flex justify-content-between">
            <div className="Auth-form-containe">
              <form className="Auth-form" onSubmit={handleSubmit}>
                <div className="Auth-form-content">
                  <h3 className="Auth-form-title">Sign In</h3>
                  <div className="form-group mt-3">
                    <label>Username</label>
                    <input
                      type="text"
                      data-testid="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="form-control mt-1"
                      placeholder="Enter username"
                      autoComplete="on"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Password</label>
                    <input
                      type="password"
                      data-testid="password"
                      name="email"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control mt-1"
                      placeholder="Enter password"
                      autoComplete="on"
                    />
                  </div>
                  <div className="d-grid gap-2 mt-3">
                    <Button 
                      data-testid="submitButton"
                      type="submit"
                      className="btn btn-primary bg-dark"
                    >
                      Submit
                    </Button>
                  </div>
                  <p className="forgot-password text-right mt-2">
                    Forgot <a href="#">password?</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = ({ dispatch, authedUser }) => ({
  dispatch,
  authedUser,
});
export default connect(mapStateToProps)(Login);
