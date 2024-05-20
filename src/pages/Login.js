import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {useState} from "react";
import { handleLogin } from "../service/actions/authed";

const Login = ({dispatch, loggedIn}) => {
    const [username, setUsername] = useState("tylermcginnis");
    const [password, setPassword] = useState("11112222");

    if (loggedIn) {
        const urlParams = new URLSearchParams(window.location.search);
        const redirectUrl = urlParams.get("redirectTo");
        return <Navigate to={redirectUrl ? redirectUrl : "/"}/>;
    }

    const changeInput = (e, option) => {
        const value = e.target.value;
        option === "username" ? setUsername(value) : setPassword(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username ||  !password) {
            alert("Please input user name and password!");
            return;
        }
        dispatch(handleLogin(username, password));
        setUsername("");
        setPassword("");
    };

    return (
        <div className="h-screen overflow-hidden flex items-center justify-center">
            <div className="bg-white lg:w-6/12 md:7/12 w-8/12 shadow-3xl rounded-xl">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 md:p-8">
                    <h1 className="text-3xl font-bold mt-9" data-testid="login-heading">Login</h1>
                </div>
                <form className="p-12 md:p-24" onSubmit={handleSubmit}>
                    <div className="flex items-center text-lg mb-6 md:mb-8">
                        <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
                            <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"/>
                        </svg>
                        <input 
                            value={username}
                            onChange={(e) => changeInput(e, "username")}
                            type="text"
                            name="username"
                            id="username"
                            data-testid="username"
                            className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Username" 
                        />
                    </div>
                    <div className="flex items-center text-lg mb-6 md:mb-8">
                        <svg className="absolute ml-3" viewBox="0 0 24 24" width="24">
                            <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z"/>
                        </svg>
                        <input 
                            value={password}
                            onChange={(e) => changeInput(e, "password")}
                            type="password"
                            name="password"
                            id="password"
                            data-testid="password"
                            className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Password" 
                        />
                    </div>
                    <button type="submit" data-testid="loginBtn" className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full rounded">Login</button>
                </form>
            </div>
        </div>
    );
};

const mapStateToProps = ({authedUser}) => ({
    loggedIn: !!authedUser,
});

export default connect(mapStateToProps)(Login);
