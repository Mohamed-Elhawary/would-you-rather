import { createStore } from "redux";
import rootMiddleware from "middleware";

const store = createStore(rootMiddleware);

export default store;