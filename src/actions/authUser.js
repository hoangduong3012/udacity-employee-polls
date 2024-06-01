export const AUTH_USER = "AUTH_USER";
export const AUTH_USER_LOGOUT = "AUTH_USER_LOGOUT";

export function setAuthUser(authUser) {
  return {
    type: AUTH_USER,
    authUser,
  };
}

export function logoutAuthedUser() {
  return {
    type: AUTH_USER_LOGOUT,
  };
}

export function handleUserLogin(username, password) {
  return (dispatch, getState) => {
    const { users } = getState();
    const user = Object.values(users).find(
      (user) => user.id === username && user.password === password
    );
    if (user) {
      return dispatch(setAuthUser(user))
    } else {
      return alert("user does't exist")
    }
  };
}

export function handleLogout() {
  return (dispatch) => {
    return dispatch(logoutAuthedUser());
  };
}
