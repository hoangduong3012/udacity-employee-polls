import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { handleAddQuestion } from "../../actions/questions";
import NavigationBar from "../common/NavigationBar";
import { Footer } from "../common/Footer";
import { Container } from "react-bootstrap";

const NewPoll = (props) => {
  const navigate = useNavigate();
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.dispatch(handleAddQuestion(optionOne, optionTwo));
    navigate("/");
  };
  return (
    <div>
      <NavigationBar />
      <Container className="text-center p-5 new-container">
        <h2>Would you rather?</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Poll option One
            </label>
            <input
              type="text"
              className="form-control"
              id="optionOne"
              data-testid="optionOne"
              name="optionOne"
              value={optionOne}
              onChange={(e) => setOptionOne(e.target.value)}
              placeholder="Option One"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput2" className="form-label">
              Poll option Two
            </label>
            <input
              type="text"
              className="form-control"
              data-testid="optionTwo"
              id="optionTwo"
              name="optionTwo"
              value={optionTwo}
              onChange={(e) => setOptionTwo(e.target.value)}
              placeholder="Option Two"
              required
            />
          </div>
          <input type="submit" value="submit" data-testid="submitButton" />
        </form>
      </Container>
      <Footer />
    </div>
  );
};

const mapStateToProps = ({ dispatch }) => ({
  dispatch,
});

export default connect(mapStateToProps)(NewPoll);
