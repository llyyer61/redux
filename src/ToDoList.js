import React, { Component } from "react";
import "antd/dist/reset.css";
import store from "./store";
import ToDoListUI from "./ToDoListUI";
import {
  changeInputAction,
  clickBtnAction,
  deleteItemAction,
  getToDoList,
} from "./store/actionCreators";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();

    store.subscribe(this.storeChange); //订阅
  }

  //组件卸载时
  componentWillUnmount() {
    store.unsubscribe(this.storeChange); // 取消订阅，以避免内存泄漏
  }

  render() {
    return (
      <ToDoListUI
        inputValue={this.state.inputValue}
        changeInputValue={this.changeInputValue}
        clickBtn={this.clickBtn}
        list={this.state.list}
        deleteItem={this.deleteItem}
      />
    );
  }

  //生命周期函数，componentDidMount 组件加载后
  componentDidMount() {
    const action = getToDoList();
    store.dispatch(action);
  }

  changeInputValue = (e) => {
    const action = changeInputAction(e.target.value);
    store.dispatch(action);
  };

  storeChange = () => {
    this.setState(store.getState());
  };

  clickBtn = () => {
    const action = clickBtnAction();
    store.dispatch(action);
  };

  deleteItem = (index) => {
    const action = deleteItemAction(index);
    store.dispatch(action);
  };
}

export default ToDoList;
