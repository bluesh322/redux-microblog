import {
  ADD_POST,
  REMOVE_POST,
  FETCH_ALL_POSTS,
  FETCH_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
  ADD_ERROR,
  REMOVE_ERROR,
  UPDATE_POST,
  VOTE,
} from "./actionTypes";
import axios from "axios";
const API_URL =
  process.env.REACT_APP_API_URL || "http://localhost:5000/api/posts";

export function sendPostToAPI(post) {
  return async function (dispatch) {
    try {
      const res = await axios.post(`${API_URL}`, post);
      return dispatch(addPost(res.data));
    } catch (err) {
      return dispatch(addError(err.message));
    }
  };
}

export function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}

export function updatePostInAPI(post) {
  return async function (dispatch) {
    try {
      const res = await axios.put(`${API_URL}/${post.id}`, post);
      return dispatch(updatePost(res.data));
    } catch (err) {
      return dispatch(addError(err.message));
    }
  };
}

export function updatePost(post) {
  return {
    type: UPDATE_POST,
    post,
  };
}

export function sendVoteToAPI(id, direction, post) {
    console.log("action id", id, "direction", direction)
    return async function (dispatch) {
        // try {
          const res = await axios.post(`${API_URL}/${id}/vote/${direction}`);
          console.log(res);
          return dispatch(vote(id, res.data.votes, post));
        // } catch (err) {
        //   return dispatch(addError(err));
        // }
      };
}

export function vote(postId, votes, post) {
    return {
        type: VOTE,
        postId: postId,
        votes: votes,
        post: post,
    }
}

export function removePostFromAPI(id) {
  return async function (dispatch) {
    try {
      await axios.delete(`${API_URL}/${id}`);
      return dispatch(removePost(id));
    } catch (err) {
      return dispatch(addError(err.message));
    }
  };
}

export function removePost(id) {
  return {
    type: REMOVE_POST,
    id,
  };
}

export function fetchAllPostsFromAPI() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${API_URL}`);
      return dispatch(getPosts(response.data));
    } catch (err) {
      return dispatch(addError(err.message));
    }
  };
}

export function getPosts(posts) {
    console.log("posts action", posts);
  return {
    type: FETCH_ALL_POSTS,
    posts,

  };
}

export function fetchPostFromAPI(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return dispatch(getPost(id, response.data));
    } catch (err) {
      return dispatch(addError(err.message));
    }
  };
}

export function getPost(postId, post) {
  return {
    type: FETCH_POST,
    post,
    postId,
  };
}

export function sendCommentToAPI(postId, text) {
  return async function (dispatch) {
    try {
      const result = await axios.post(`${API_URL}/${postId}/comments/`, {
        text,
      });
      return dispatch(addComment(postId, result.data));
    } catch (err) {
      return dispatch(addError(err.message));
    }
  };
}

export function addComment(postId, comment) {
  return {
    type: ADD_COMMENT,
    postId,
    comment,
  };
}

export function removeCommentFromAPI(postId, commentId) {
  return async function (dispatch) {
    try {
      const result = await axios.delete(
        `${API_URL}/${postId}/comments/${commentId}`
      );
      return dispatch(removeComment(postId, commentId));
    } catch (err) {
      return dispatch(addError(err.message));
    }
  };
}

export function removeComment(postId, commentId) {
  return {
    type: REMOVE_COMMENT,
    postId,
    commentId,
  };
}

export function addError(msg) {
  return { type: ADD_ERROR, msg: msg };
}

export function removeError() {
  return { type: REMOVE_ERROR };
}
