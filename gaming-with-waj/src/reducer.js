export const initialState = {
    liked: [],
    user: null,
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            }
        case 'ADD_TO_LIKED':
            //logic for adding game to liked
            return {
                ...state,
                liked: [...state.liked, action.item],
            };
        case 'REMOVE_FROM_LIKED':
            //logic for removing game from liked

            //copied the basket
            let newLiked = [...state.liked];
            const index = state.liked.findIndex((likedItem) => likedItem.id === action.id);
            if(index >= 0) {
                newLiked.splice(index, 1);
            } else {
                console.warn(
                    `Cant remove game (id: $(action.id)) as it is not in your liked list`
                )
            }

            return { ...state, liked: newLiked };
        default:
            return state;
    }
}

export default reducer;