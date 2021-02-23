import state1 from '../state';
import renderEntireTree from "../../render";

const ADD_POST = "ADD_POST";
let initialState = state1().posts;

const postsReducer = (state = initialState, action) => {
    if (action.type === ADD_POST) {
        state[action.category][action.id].push({ img: action.userImg, name: action.userName, message: action.message });
        renderEntireTree();
        return state;
    }
    return state;
}

export const addPostActionCreater = (category, id, text) => {
    return {
        type: ADD_POST,
        category: category,
        id: id,
        message: text,
        userImg: "https://www.meme-arsenal.com/memes/fd51570fb8df5c3bde2532971bf8df80.jpg",
        userName: "User Name"
    }
}

export default postsReducer;