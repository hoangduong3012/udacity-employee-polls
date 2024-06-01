import { connect } from "react-redux";
import NavigationBar from "./common/NavigationBar";
import Poll from "./poll/Poll";
import { Footer } from "./common/Footer";
import Card from 'react-bootstrap/Card';


const Dashboard = ({ uquestions, aquestions, users, authUser }) => {
  return (
    <>
      <NavigationBar />
      <div className="ms-10">
      <Card
          className="mb-2"
        >
          <Card.Header className="text-center" >Available polls</Card.Header>
          <Card.Body>
          <div className="row row-cols-1 row-cols-md-4 g-4 card-lists p-5">
    { uquestions.map((question) => (
                <li key={question.id}>
                  <Poll
                    key={question.id}
                    id={question.id}
                    {...question}
                    question={question}
                    title={"UnAnswered Questions"}
                  />
                </li>
              ))}
               
  </div>
          </Card.Body>
        </Card>
        </div>
        <div className="ms-4">
        <Card
          className="mb-2"
        >
          <Card.Header className="text-center" >Participated polls</Card.Header>
          <Card.Body>
          <div className="row row-cols-1 row-cols-md-4 g-4 card-lists p-5">
        {
         aquestions.map((question) => (
                <li key={question.id}>
                  <Poll
                    key={question.id}
                    id={question.id}
                    {...question}
                    question={question}
                    timestamp={question.timestamp}
                    title={"UnAnswered Questions"}
                  />
                </li>
              ))}
        </div>
          </Card.Body>
        </Card>
    
        </div>
     
      <Footer />
    </>
  );
};

const mapStateToProps = ({ authUser, questions, users }) => {
  const unansweredQuestions = (question) =>
    !question.optionOne.votes.includes(authUser.id) &&
    !question.optionTwo.votes.includes(authUser.id);

  const answeredQuestions = (question) =>
    question.optionOne.votes.includes(authUser.id) ||
    question.optionTwo.votes.includes(authUser.id);
  const uquestions = Object.values(questions)
    .sort((a, b) => b.timestamp - a.timestamp)
    .filter(unansweredQuestions);
  const aquestions = Object.values(questions)
    .sort((a, b) => b.timestamp - a.timestamp)
    .filter(answeredQuestions);
  return {
    authUser,
    users,
    uquestions,
    aquestions,
  };
};
export default connect(mapStateToProps)(Dashboard);
