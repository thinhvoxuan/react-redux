/**
 * Created by thinhvoxuan on 4/10/16.
 */
import {FETCH_ALL_POSTS, FETCH_DETAIL_POST} from '../actions/index'
const INITIAL_STATE = {posts: [], detail: null}
export default function(state = INITIAL_STATE, action){
    switch (action.type){
        case FETCH_ALL_POSTS:
            return {...state, posts: action.payload.data}
        case FETCH_DETAIL_POST:
            return {...state, detail: action.payload.data}
        default:
            return state;
    }
}