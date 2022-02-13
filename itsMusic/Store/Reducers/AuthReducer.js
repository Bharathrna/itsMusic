import { GOOGLE_SIGN_IN } from "../Actions/AuthAction";

const initialState = {
    currentUser: {}
};

export default AuthReducer = (state = initialState, action) => { 
    switch (action.type) {
        case GOOGLE_SIGN_IN:
            return {...state, currentUser: action.currentUser};

        default:
            return state;
    }
};