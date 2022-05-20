import {createStore, applyMiddleware} from "redux";
import {rootReducer} from '../redux/reducers/index';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from "redux-thunk";


export const configureStore = () => {
    return  createStore(rootReducer,
        composeWithDevTools(applyMiddleware(thunk))
    )
}