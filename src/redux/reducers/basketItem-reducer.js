import state1 from './../state';
import renderEntireTree from "../../render";

const ADD_ITEM_IN_BASKET = "ADD_ITEM_IN_BASKET";
const ITEM_COUNT_PLUS = "ITEM_COUNT_PLUS";
const ITEM_COUNT_MINUS = "ITEM_COUNT_MINUS";
const ITEM_DEL = "ITEM_DEL";

let initialState = state1();

const basketItemReducer = (state = initialState, action) => {
    
    switch (action.type) {
        
        case ADD_ITEM_IN_BASKET:
            let newItem = { ...action.item, count: 1 };
            state.basket.basket.push(newItem);
            let itemIdInBasket = state.basket.basket.length - 1;
            state.basket.basket[itemIdInBasket] = { ...state.basket.basket[itemIdInBasket], idInBasket: itemIdInBasket };
            state.basket.basket[itemIdInBasket] = { ...state.basket.basket[itemIdInBasket], placeInCatalog: action.idInCatalog };
            state.basket.basket[itemIdInBasket] = { ...state.basket.basket[itemIdInBasket], itemId: action.item.id };
            state.basket.totalItemCount += 1;
            state.basket.totalsumm += action.item.price;
            state.catalog[action.idInCatalog].items[action.item.id-1].inBasket = true;
            renderEntireTree();
            return state;
        case ITEM_COUNT_PLUS:
            state.basket.basket[action.idInBasket].count += 1;
            state.basket.totalItemCount += 1;
            let sdf = state.catalog[action.placeInCatalog].items[action.itemId].price;
            state.basket.totalsumm += state.catalog[action.placeInCatalog].items[action.itemId].price;
            renderEntireTree();
            debugger;
            return state;
        case ITEM_COUNT_MINUS:
            if (state.basket.basket[action.idInBasket].count > 1) {
                state.basket.basket[action.idInBasket].count -= 1;
                state.basket.totalItemCount -= 1;
                state.basket.totalsumm -= state.catalog[action.placeInCatalog].items[action.itemId].price;
                renderEntireTree();
                return state;
            } else return state;
        case ITEM_DEL:
            state.basket.totalItemCount -= action.count;
            state.catalog[action.placeInCatalog].items[action.itemId].inBasket = false;
            delete state.basket.basket[action.idInBasket];
            let obsh = action.count * state.catalog[action.placeInCatalog].items[action.itemId].price;
            state.basket.totalsumm = state.basket.totalsumm - action.count * state.catalog[action.placeInCatalog].items[action.itemId].price;
            renderEntireTree();
            debugger;
            return state;
        default: return state;
    }
}

export const addItemInBasketActionCreater = (selectItem, idInCatalog, inBasket) => {
    return {
        type: ADD_ITEM_IN_BASKET,
        item: selectItem,
        idInCatalog: idInCatalog,
        inBasket: inBasket
    }
}

export const plusActionCreater = (idInBasket, placeInCatalog, itemId) => {
    return {
        type: ITEM_COUNT_PLUS,
        idInBasket: idInBasket,
        placeInCatalog: placeInCatalog,
        itemId: itemId
    }
}

export const minusActionCreater = (idInBasket, placeInCatalog, itemId) => {
    return {
        type: ITEM_COUNT_MINUS,
        idInBasket: idInBasket,
        placeInCatalog: placeInCatalog,
        itemId: itemId
    }
}

export const delActionCreater = (idInBasket, count, placeInCatalog, itemId) => {
    return {
        type: ITEM_DEL,
        idInBasket: idInBasket,
        count: count,
        placeInCatalog: placeInCatalog,
        itemId: itemId
    }
}

export default basketItemReducer;