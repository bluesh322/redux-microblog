import { ADD_ERROR, REMOVE_ERROR } from "./actionTypes"; 

export default function errors(state = [], action) {
    switch (action.type) {
        case ADD_ERROR: {
            return [
                ...state,
                action.msg
            ]

        }
        case REMOVE_ERROR: {
            return state.filter((msg, i) => i !== action.index);
        }
        default:
            return state;
    }
}