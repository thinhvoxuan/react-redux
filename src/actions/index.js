import axios from 'axios';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=lkajdsfapipwietpw123';

export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS';
export function fetchPosts(){
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return {
        type: FETCH_ALL_POSTS,
        payload: request
    }
}


export const FETCH_DETAIL_POST = 'FETCH_DETAIL_POST'
export function fetchDetailPost(id){
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
    return {
        type: FETCH_DETAIL_POST,
        payload: request
    };
}

export const CREATE_NEW_POST = 'CREATE_NEW_POST'
export function requestCreatePost(props) {
    console.log('create: ', props);
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, {
        title: props.title.value,
        categories: props.categories.value,
        content: props.categories.value
    });
    return {
        type: CREATE_NEW_POST,
        payload: request
    };
}

export const DELETE_AN_POST = 'DELETE_AN_POST'
export function deletePost(id) {
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);
    return {
        type: DELETE_AN_POST,
        payload: request
    };
}

