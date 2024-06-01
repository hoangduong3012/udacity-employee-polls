import { AUTH_USER, AUTH_USER_LOGOUT } from "../actions/authUser";

export default function authUser(state = null, action) {
  switch (action.type) {
    case AUTH_USER:
      return action.authUser;
    case AUTH_USER_LOGOUT:
      return null;
    default:
      return state;
  }
}
