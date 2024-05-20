import {receiveUsers} from "./users";
import {receive} from "./questions";
import {getInitialData} from "../../util/api";

export function initialData() {
    return (dispatch) => {
        return getInitialData().then(({users, questions}) => {
            dispatch(receiveUsers(users));
            dispatch(receive(questions));
        });
    };
}
