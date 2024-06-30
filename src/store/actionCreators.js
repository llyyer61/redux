import { UPDATE, DELETE, ADD, GET_LIST } from "./actionTypes";
import axios from "axios";

export const changeInputAction = (value) => ({
  type: UPDATE,
  value,
});

export const clickBtnAction = () => ({
  type: ADD,
});

export const deleteItemAction = (index) => ({
  type: DELETE,
  index,
});

export const getListAction = (data) => ({
  type: GET_LIST,
  data,
});

export const getToDoList = () => {
  return (dispatch) => {
    //从远端获取List数据
    axios
      .get(
        "https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList"
      )
      .then((res) => {
        console.log(res);
        const data = res.data;
        const action = getListAction(data);
        dispatch(action);
      });
  };
};
