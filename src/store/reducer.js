import { UPDATE, DELETE, ADD, GET_LIST } from "./actionTypes";

const defaultState = {
  inputValue: "Write something",
  list: ["Meeting", "Communicate", "Back"],
};

//必须返回的是纯函数，不能是那些不确定的，比如AJAX，New Date()之类的
const Reducer = (state = defaultState, action) => {
  console.log(state, action);

  // Reducer 里只能接收 state, 不能改变 state
  switch (action.type) {
    case UPDATE:
      return {
        ...state, //浅拷贝 state 后再操作 state，
        inputValue: action.value,
      };
    case ADD:
      return {
        ...state,
        list: [...state.list, state.inputValue],
        inputValue: "",
      };
    case DELETE:
      const newList = [...state.list];
      newList.splice(action.index, 1);
      return {
        ...state,
        list: newList,
      };
    case GET_LIST:
      const newList_1 = [...state.list];
      newList_1.list = action.data.data.list;
      return {
        ...state,
        list: newList_1,
      };
    default:
      return state;
  }
};
export default Reducer;
