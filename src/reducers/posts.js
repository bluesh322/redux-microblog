import {
  ADD_POST,
  REMOVE_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
  FETCH_POST,
  FETCH_ALL_POSTS,
  UPDATE_POST,
  VOTE,
} from "./actionTypes";

export default function posts(state = {}, action) {
  let p = state[action.postId]
  let somePostId = Object.values(state).findIndex(p => p.id === action.postId);
  let b = state[somePostId];
  switch (action.type) {
    case FETCH_ALL_POSTS: {
      return {...action.posts}
      
    }
    case FETCH_POST: {
      return {
        ...state,
        [action.postId]: action.post,
      };
    }
    case ADD_POST: {
      return {
        ...state,
        [action.post.id]: { ...action.post, comments: [] },
      };
    }
    case UPDATE_POST: {
      return {
        ...state,
        [action.post.id]: {
          ...action.post,
          comments: state[action.post.id].comments,
        },
      };
    }
    case REMOVE_POST: {
      let posts = { ...state };
      delete posts[somePostId];
      return posts;
    }
    case ADD_COMMENT: {
      return {
        ...state,
        [action.postId]: {
          ...p,
          comments: [...p.comments, action.comment],
        },
      };
    }
    case REMOVE_COMMENT: {
      return {
        ...state,
        [action.postId]: {
          ...p,
          comments: p.comments.filter((c) => c.id !== action.commentId),
        },
      };
    }

    case VOTE: {
      console.log("state", state, "action post", action.post, "action postId", action.postId);
      return {
        ...state,
        [somePostId]: { ...b, votes: action.votes },
      };
    }
    default:
      return state;
  }
}
