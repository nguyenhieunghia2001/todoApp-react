import React, { Component } from 'react';
import classNames from 'classnames/bind';
import checkImg from '../images/check.svg'
import checkedImg from '../images/checked.svg'
import './TodoItem.css';

class TodoItem extends Component {

    render() {
        const { item, onClick } = this.props;
        let urlImg = checkImg;
        if (item.isComplete) urlImg = checkedImg;
        return (
            <div onClick={onClick}
                className={classNames({
                    'todoList': true,
                    'todoList-done': item.isComplete,
                })}>
                <img src={urlImg} alt="" width="40px" />
                <p>{item.title}</p>
            </div>
        )
    }
}

export default TodoItem;