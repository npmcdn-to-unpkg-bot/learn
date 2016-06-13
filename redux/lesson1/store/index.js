/**
 * Created by taozhiw on 2016/6/13.
 */
import { createStore } from 'redux';
import rootReducer from '../reducers';

export default initialState => {
    return createStore(rootReducer, initialState)
}