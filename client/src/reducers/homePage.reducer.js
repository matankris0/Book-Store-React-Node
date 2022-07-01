import homePageActionTypes from "../actions/homePage.actions.js";

export const HOMEPAGE_INITIAL_STATE = []
const homePageReducer = (state, action) => {
    switch (action.type) {
        case homePageActionTypes.INIT_HOMEPAGE: {
            return state
        }
        default: { return state }
    }
};

export default homePageReducer;