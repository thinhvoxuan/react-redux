import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'
import ActiveBookReducer from './reducer_active_books'
const rootReducer = combineReducers({
  activeBook: ActiveBookReducer,
  books: BooksReducer
});

export default rootReducer;
