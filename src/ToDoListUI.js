import React from "react";
import { Input, Button, List } from "antd";

//这种叫无状态组件
const ToDoListUI = ({
  inputValue,
  changeInputValue,
  clickBtn,
  list,
  deleteItem,
}) => {
  //这里是JSX，所以要引入 React
  return (
    <div style={{ margin: "10px" }}>
      <div>
        <Input
          value={inputValue}
          style={{ width: "250px", marginRight: "10px" }}
          onChange={changeInputValue}
        />
        <Button type="primary" onClick={clickBtn}>
          Add
        </Button>
      </div>
      <div style={{ margin: "10px", width: "300px" }}>
        <List
          bordered
          dataSource={list}
          renderItem={(item, index) => (
            <List.Item onClick={() => deleteItem(index)}>{item}</List.Item>
          )}
        ></List>
      </div>
    </div>
  );
};

export default ToDoListUI;
