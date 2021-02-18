import state1 from './../state';
import renderEntireTree from "../../render";

const ITEM_COUNT_PLUS = "ITEM_COUNT_PLUS";
const ITEM_COUNT_MINUS = "ITEM_COUNT_MINUS";
const ITEM_DEL = "ITEM_DEL";

let initialState = state1();

const basketItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case ITEM_COUNT_PLUS:
            state.basket[action.idInBasket].count += 1;
            state.totalItemCount += 1;
            state.totalsumm += state.catalog[action.placeInCatalog].items[action.itemId].price;
            renderEntireTree();
            return state;
        case ITEM_COUNT_MINUS:
            if (state.basket[action.idInBasket].count > 1) {
                state.basket[action.idInBasket].count -= 1;
                state.totalItemCount -= 1;
                state.totalsumm -= state.catalog[action.placeInCatalog].items[action.itemId].price;
                renderEntireTree();
                return state;
            }else return state;
        case ITEM_DEL:
            state.totalItemCount -= action.count;
            state.catalog[action.placeInCatalog].items[action.itemId].inBasket = false;
            delete state.basket[action.idInBasket];
            state.totalsumm = state.totalsumm - action.count * state.catalog[action.placeInCatalog].items[action.itemId].price;
            renderEntireTree();
            return state;
        default: return state;
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

export const delActionCreater = (idInBasket,count,inBasket,placeInCatalog,itemId) => {
    return {
        type: ITEM_DEL,
        idInBasket: idInBasket,
        count: count,
        inBasket:inBasket,
        placeInCatalog: placeInCatalog,
        itemId: itemId
    }
}

export default basketItemReducer;