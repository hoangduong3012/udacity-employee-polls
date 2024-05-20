import {Link} from "react-router-dom";
import {connect} from "react-redux";
import { handleLogout } from "../service/actions/authed";

const Header = ({dispatch, authedUserId, avatarURL}) => {

    const onLogout = () => {
        dispatch(handleLogout());
    };

    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight" data-testid="heading">Employee polls</span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-xl cursor-pointer">
                        Home
                    </Link>
                    <Link to="/leaderboard" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-xl cursor-pointer">
                        Leaderboard
                    </Link>
                    <Link to="/new" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white text-xl cursor-pointer">
                        New
                    </Link>
                </div>
                <div>
                <img src={avatarURL} alt="Profile" className="h-8 w-8 inline"/>   
                <span className="font-medium px-3 py-2 text-white" data-testid="userName">
                    {authedUserId}
                </span>
                <button onClick={onLogout} className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Logout</button>
                </div>
            </div>
        </nav>
    );
};

const mapStateToProps = ({authedUser}) => ({
    authedUserId: authedUser.id,
    avatarURL: authedUser.avatarURL
});


export default connect(mapStateToProps)(Header);