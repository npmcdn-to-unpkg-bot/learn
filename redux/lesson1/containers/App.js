/**
 * Created by taozhiw on 2016/6/13.
 */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import InputName from '../components/InputName';
import * as InputNameActions from '../actions/inputName';

export default connect(state => {
    return { inputName: state.inputName }
}, dispatch => {
    return bindActionCreators(InputNameActions, dispatch); // 将dispatch与具体的ActionCreator关联，生成新的可直接操纵state的函数
})(InputName);
