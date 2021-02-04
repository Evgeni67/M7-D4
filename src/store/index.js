import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import loadingReducer from "../reducers/loadingReducer";
import jobsReducer from "../reducers/jobsReducer";
import thunk from 'redux-thunk'

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // whats compose used for?

export const initialState = {
  jobs: {
    fetchedJobs: [],
    favouriteJobs: [],
  },
  load: {
    loading: false,
  },
};
const bigReducer = combineReducers({ jobs: jobsReducer, load:loadingReducer });

export default function configureStore() {
  return createStore(
    bigReducer,
    initialState,
    composedEnhancer(applyMiddleware(thunk))
  );
}
