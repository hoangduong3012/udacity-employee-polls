import { connect } from "react-redux";
import NavigationBar from "./common/NavigationBar";
import { Footer } from "./common/Footer";

const Leaderboard = ({users}) => {
  return (
    <div>
      <NavigationBar />
      <div className="leaderboard-container">
        <table className="table">
          <thead className="thead">
            <tr className="tr">
              <th>Users</th>
              <th>Answered</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {users.sort((a, b) => b.sum - a.sum).map((user) => (
              <tr className="tr" key={user.id}>
                <td className="td">
                  <span className="table-user-span">
                    <div>
                      <ul>
                        <li key={user.id}>{user.name}</li>
                        <li key={user.name}>{user.id}</li>
                      </ul>
                    </div>
                  </span>
                </td>
                <td>{Object.keys(user.answers).length}</td>
                <td>{user.questions.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = ({ questions, users }) => {
  const sortedList = Object.values(users);

  sortedList.map(user => (user.sum = Object.keys(user.answers).length + user.questions.length));

  return {
    users: sortedList
  };
};
export default connect(mapStateToProps)(Leaderboard)
