/* eslint no-extra-semi: "error"*/

import 'whatwg-fetch';
import axios from 'axios';
import { browserHistory } from 'react-router';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const FETCH_SINGLE = 'FETCH_SINGLE';
export const AUTH_USER = 'AUTH_USER';
export const NOAUTH_USER = 'NOAUTH_USER';
export const AUTH_ERROR = 'AUTH_ERROR';
// const URL = 'https://sleepy-scrubland-45041.herokuapp.com/posts';
const URL = 'http://localhost:3000/posts';
const URLusers = 'http://localhost:3000/users';
const signinUrl = 'http://localhost:3000/signin';

export function fetchPosts() {
  return dispatch =>
    fetch(URL)
      .then(res => Promise.all([res, res.json()]))
      .then(([res, json]) => {
        dispatch({ type: FETCH_POSTS, payload: json });
      });
}

export function createPost(props) {
  return dispatch =>
    axios.post(URL, props).then((res) => {
      dispatch({ type: CREATE_POST, payload: res });
    });
}

export function updatePost(props, id) {
  return dispatch =>
    axios.patch(`${URL}/${id}`, props).then(res => dispatch({ type: UPDATE_POST, payload: res }));
}
export function deletePost(id) {
  return dispatch =>
    axios.delete(`${URL}/${id}`).then(res => dispatch({ type: DELETE_POST, payload: res }));
}

export function fetchSingle(id) {
  return dispatch =>
    fetch(`${URL}/${id}`)
      .then(res => Promise.all([res, res.json()]))
      .then(([res, json]) => {
        dispatch({ type: FETCH_SINGLE, payload: json });
      });
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error,
  };
}

export function signup({ email, password }) {
  return dispatch =>
    axios
      .post(`${URLusers}`, { email, password })
      .then((res) => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', res.headers['x-auth']);
        browserHistory.push('/');
      })
      .catch(() => {
        dispatch(authError('Email already in use'));
      });
}

export function signin({ email, password }) {
  return dispatch =>
    axios
      .post(signinUrl, { email, password })
      .then((res) => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', res.headers['x-auth']);
        browserHistory.push('/');
      })
      .catch(() => {
        dispatch(authError('Bad Login Info'));
      });
}

export function signOut() {
  localStorage.removeItem('token');
  return { type: NOAUTH_USER };
}
