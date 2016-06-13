/**
 * Created by taozhiw on 2016/6/13.
 */
import React, { Component } from 'react';

class InputName extends Component {
    render() {
        const {changeText, inputName} = this.props;
        return (
            <div>
                <h1>Input name</h1>
                <input type="text" onChange={ (event) => changeText(event.target.value) }/>
                <p>{ inputName }</p>
            </div>
        )
    }
}

export default InputName;
