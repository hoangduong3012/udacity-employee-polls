import {connect} from "react-redux";
import { formatDate } from "../../utils/helpers";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Poll = ({question, title, author, timestamp}) => {
  return (
    <div>
   <Card style={{height: 'fit-content', margin: '5px'}}>
      <Card.Body className="text-center">
        <Card.Title ><div>{author}</div>
        </Card.Title>
        <div className="poll-date ">{formatDate(timestamp)}</div>
        <Link to={"questions/" + (question && question.id ? question.id : 1)}>
        <Button className="bg-white text-success border-success w-100" variant="primary">Show</Button></Link>
      </Card.Body>
    </Card>
    </div>
  );  
  }
export default connect()(Poll);
