export default function posts(state = {}, action) {
  switch (action.type) {
    case "ADD_POST": {
      return {
        ...state,
        [action.post.id]:  action.post,
      };
    }
    default:
      return state;
  }
}
