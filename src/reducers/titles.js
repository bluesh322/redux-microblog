const INITIAL_STATE = {
    titles: {}
}

export default function titles(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LIST_TITLE": {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}
