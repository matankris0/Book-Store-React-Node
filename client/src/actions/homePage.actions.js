const homePageActionTypes = {
    INIT_HOMEPAGE: 'INIT_HOMEPAGE',
};

export const initHomePageAction = (books) => {
    const action = {
        type: homePageActionTypes.INIT_HOMEPAGE,
        payload: {
            books: books,
        },
    };
    return action
};

export default homePageActionTypes;