/**
 * Created by taozhiw on 2016/6/13.
 */
import  React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App'
import  store from './store';

render(
    <Provider store={ store({inputName: 'Hello world!'}) }>
        <App/>
    </Provider>,
    document.getElementById('root')
)