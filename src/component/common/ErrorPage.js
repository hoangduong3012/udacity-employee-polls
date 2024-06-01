import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavigationBar from "./NavigationBar"
const ErrorPage = () => {
  return (
    <div>
      <NavigationBar />
      <div>
        <h1>Wellcome 404 error page</h1>
        <h2>ooops! we can't find what you are looking for.</h2>
        <p>
          This on us, and we promie to fix it meanwhile tap to return to{" "}
          <Link to={"/login"}>login page</Link> please. Do have a good day.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
