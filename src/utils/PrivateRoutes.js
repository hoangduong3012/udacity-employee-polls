import { connect } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

function PrivateRoutes({ authUser }) {
    const location = useLocation();
  
    return authUser !== null ? (
        <Outlet/>
    ) : (
      <Navigate to="/login" replace state={{ path: location.pathname  || "/404" }} />
    );
  }

const mapStateToProps = ({ authUser }) => ({
    authUser
  });

export default connect(mapStateToProps)(PrivateRoutes)