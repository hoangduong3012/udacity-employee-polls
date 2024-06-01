import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/App.css"

// import LoadingBar from "react-redux-loading-bar";
import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";
import Dashboard from "./component/Dashboard";
import Login from './component/auth/Login';
import PollPage from './component/poll/PollPage';
import NewPoll from './component/poll//NewPoll';
import Leaderboard from './component/Leaderboard';
import ErrorPage from "./component/common/ErrorPage";
import NavigationBar from "./component/common/NavigationBar";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);
  return (
    <Fragment>
      <div>
        {props.loading === true ? null : (
          <Routes>
          <Route path="/navigation" element={<NavigationBar />}/> 
            <Route path="/login" element={<Login />}/> 
            <Route element={<PrivateRoutes />}>
                <Route element={<Dashboard/>} path="/" exact/>  
                <Route path="/questions/:id" element={<PollPage />} />
                <Route element={<NewPoll/>} path="/addPoll"/>
                <Route element={<Leaderboard/>} path="/leaderboard"/>        
                <Route element={<ErrorPage/>} path="/*"/>
            </Route>
          </Routes>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ dispatch, authUser, users, questions }) => ({
  dispatch,
  users,
  questions,
  authUser,
  loading: users === null,
});

export default connect(mapStateToProps)(App);