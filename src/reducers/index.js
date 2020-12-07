import {combineReducers} from 'redux';
import {
  SEARCH_RESULTS,
  LOADING
} from "../actions";

const initialState ={
  loading:false,
  searchResults:[]
  
}

function results(state = initialState, action) {
  switch (action.type) {
    case SEARCH_RESULTS:
      return {...state, searchResults:action.results};
    case LOADING:
        return {...state, loading:action.value};  
    default:
      return initialState;
  }
}

const rootReducer = combineReducers({
  results,
});

export default rootReducer;