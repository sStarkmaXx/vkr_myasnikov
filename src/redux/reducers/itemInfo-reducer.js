import state1 from './../state';
import renderEntireTree from "../../render";

const ADD_POST = "ADD_POST";
const ADD_ITEM_IN_BASKET = "ADD_ITEM_IN_BASKET";
let initialState = state1();

const itemInfoReducer = (state = initialState, action) =>{
    if (action.type === ADD_POST) {
        state.posts[action.category][action.id].push({ img: action.userImg, name: action.userName, message: action.message });
        renderEntireTree();
    }
    if (action.type === ADD_ITEM_IN_BASKET) {
        debugger
        /*for (let i = 0; i <state.catalog.length; i++) {
            if (state.catalog[i].category === action.item.category) {
                for (let j = 0; j <state.catalog[i].items.length; j++) {
                    if (state.catalog[i].items[j].id === action.item.id) {*/
                        let newItem = { ...state.catalog[action.idInCatalog].items[action.item.id-1], count: 1 };
                        state.basket.push(newItem);
                        let itemIdInBasket = state.basket.length - 1;
                        state.basket[itemIdInBasket] = { ...state.basket[itemIdInBasket], idInBasket: itemIdInBasket };
                        state.basket[itemIdInBasket] = { ...state.basket[itemIdInBasket], placeInCatalog: action.idInCatalog };
                        state.basket[itemIdInBasket] = { ...state.basket[itemIdInBasket], itemId: action.item.id };
                        state.totalItemCount += 1;
                        state.catalog[action.idInCatalog].items[action.item.id-1].inBasket = true;
                        state.selectItem.inBasket = true;
                        state.totalsumm += state.catalog[action.idInCatalog].items[action.item.id-1].price;
                        renderEntireTree();
                   /* }
                }
            }
        }*/
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
export const addItemInBasketActionCreater = (selectItem,idInCatalog) => {
    return {
        type: ADD_ITEM_IN_BASKET,
        item: selectItem,
        idInCatalog: idInCatalog
    }
}

export default itemInfoReducer;