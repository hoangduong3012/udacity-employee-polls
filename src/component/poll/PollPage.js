import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { handleAddAnswer } from "../../actions/questions";
import NavigationBar from "../common/NavigationBar";
import { Footer } from "../common/Footer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";


const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };
  return ComponentWithRouterProp;
};

const PollPage = ({ dispatch, id, authUser, questions }) => {
  const navigate = useNavigate();
  const question = Object.values(questions).find(
    (question) => question.id === id
  );
  if (!question) {
    return <Navigate to="/404" />;
  }
  const optionOne = question.optionOne.votes.includes(authUser.id);
  const optionTwo = question.optionTwo.votes.includes(authUser.id);
  const voted = optionOne || optionTwo;

  const handleOptionOne = (e) => {
    e.preventDefault();
    dispatch(handleAddAnswer(question.id, "optionOne"));
  };

  const handleOptionTwo = (e) => {
    e.preventDefault();
    dispatch(handleAddAnswer(question.id, "optionTwo"));
  };
  return (
    <div className="containerPoll">
      <NavigationBar />
      <div className="text-center">
      <img src={authUser.avatarURL} alt="Profile" className="rounded-circle img-fluid w-5 p-4" />
      <h2  className="text-center text-warning">Poll by {question.author} </h2>
        <h2>Would you rather?</h2>
      </div>
      <div className="options-container">
        {!voted && (
              <Button onClick={handleOptionOne}  disabled={voted} className="bg-dark">
                {question.optionOne.text}
              </Button>
          )}
          {voted && (
            <Button className="bg-success">numbers of total Votes: {question.optionOne.votes.length}</Button>
          )}
         <div>
          {!voted && (
              <Button onClick={handleOptionTwo} disabled={voted} className="bg-dark ms-5">
                {question.optionTwo.text}
              </Button>
          )}
          {voted && (
            <Button className="bg-success ms-5">numbers of total Votes: {question.optionTwo.votes.length}</Button>
          )}
          </div></div>
          <Footer /></div>
  );
};

const mapStateToProps = ({ authUser, users, questions }, props) => {
  const { id } = props.router.params;
  return {
    id,
    authUser,
    questions,
    users,
  };
};
export default withRouter(connect(mapStateToProps)(PollPage));
