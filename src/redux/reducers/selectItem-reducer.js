import state1 from './../state';

const SELECT_ITEM = "SELECT_ITEM";
let initialState = state1();

<<<<<<< Updated upstream
let selectItem = {selectItem: {img:"",name:"",price:""}};

const selectItemReducer = (state = selectItem.selectItem, action) =>{
    
    /*if(action.type === SELECT_ITEM){
        for( let i=0; i<state.catalog.length; i++){
            if (state.catalog[i].category === action.category){
                for(let j=0; j<state.catalog[i].items.length; j++){
                    if(state.catalog[i].items[j].id === action.id){
                        state.selectItem.img = state.catalog[i].items[j].img;
                        state.selectItem.name = state.catalog[i].items[j].name;
                        state.selectItem.price = state.catalog[i].items[j].price;
                        return state;       
=======
const selectItemReducer = (state = initialState, action) =>{
    if (action.type === SELECT_ITEM) {
        state.selectItem.category = action.category;
        state.selectItem.id = action.id
        for (let i = 0; i < state.catalog.length; i++) {
            if (state.catalog[i].category === action.category) {
                state.selectItem.idInCatalog = i;
                for (let j = 0; j < state.catalog[i].items.length; j++) {
                    if (state.catalog[i].items[j].id === action.id) {
                        state.selectItem.idInItems = j;
                        state.selectItem.inBasket = state.catalog[i].items[j].inBasket;
>>>>>>> Stashed changes
                    }
                }
            }
        }
    }*/
    return state;
}

export const selectItemActionCreater = (category, id, path) => {
    return {
        type: SELECT_ITEM,
        category: category,
        id: id,
        path: path
    }
}

export default selectItemReducer;