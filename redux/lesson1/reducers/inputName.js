/**
 * Created by taozhiw on 2016/6/13.
 */
import { CHANGE_TEXT } from '../actions/inputName'

export default (state = '', action) => {
    switch (action.type) {
        case CHANGE_TEXT:
            return action.text;
        default:
            return state;
    }
}