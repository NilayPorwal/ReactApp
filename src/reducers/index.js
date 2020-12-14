import {combineReducers} from 'redux';
import {
  SEARCH_RESULTS,
  LOADING,
  TYPING
} from "../actions";

const initialState ={
  loading:false,
  searchResults:[],
  searchTerm:'',
  limit:20
}

function results(state = initialState, action) {
  switch (action.type) {
    case SEARCH_RESULTS:
      return {...state, searchResults:action.results};
    case LOADING:
        return {...state, loading:action.value};  
    case TYPING:
      return {...state, searchTerm:action.value};     
    default:
      return initialState;
  }
}

const rootReducer = combineReducers({
  results,
});

export default rootReducer;