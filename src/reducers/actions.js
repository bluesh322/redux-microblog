import { ADD_POST, REMOVE_POST, FETCH_POST} from "./actionTypes";

export function addPost(post) {
    return {
        type: ADD_POST,
        post
    };
}

export function removePost(id) {
    return {
        type: REMOVE_POST,
        id
    };
}

export function fetchPostsFromAPI(id) {
    return {
        type: FETCH_POST,
        id
    }
}