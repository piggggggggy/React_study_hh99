// import { createStore, combineReducers } from "redux";
// import bucket from "./modules/bucket";
// import { createBrowserHistory } from "history";

// export const history = createBrowserHistory();

// const rootReducer = combineReducers({bucket});

// const store = createStore(rootReducer);

// export default store;

//-------------------------------

//configStore.js
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import bucket from './modules/bucket';
import { createBrowserHistory } from "history";

import thunk from "redux-thunk";

// 브라우저 히스토리를 만들어줍니다.
export const history = createBrowserHistory();


const middlewares = [thunk];


const enhancer = applyMiddleware(...middlewares);
// root 리듀서를 만들어줍니다.
// 나중에 리듀서를 여러개 만들게 되면 여기에 하나씩 추가해주는 거예요!
const rootReducer = combineReducers({ bucket });
// 스토어를 만듭니다.
const store = createStore(rootReducer, enhancer);

export default store;