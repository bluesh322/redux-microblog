const INITIAL_STATE = {
    posts: {}
}

export default function posts(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "ADD_POST": {
        return {
          ...state,
        };
      }
      default:
        return state;
    }
  }
  