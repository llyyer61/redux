//这个中间件是redux的中间件，不是react的中间件
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

// store 必须是唯一的
const store = createStore(
  reducer,
  //redux chrome extension 插件用语,applyMiddleware(thunk)没有可以不写
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
