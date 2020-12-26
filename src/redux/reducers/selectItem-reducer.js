import state from './../state';

const SELECT_ITEM = 'SELECT_ITEM';

//let selectItem = {selectItem: {img:"",name:"",price:""}};

const selectItemReducer = (state = selectItem.selectItem, action) =>{
    
    if(action.type === SELECT_ITEM){
        for( let i=0; i<state.catalog.length; i++){
            if (state.catalog[i].category === action.category){
                for(let j=0; j<state.catalog[i].items.length; j++){
                    if(state.catalog[i].items[j].id === action.id){
                        state.selectItem.img = state.catalog[i].items[j].img;
                        state.selectItem.name = state.catalog[i].items[j].name;
                        state.selectItem.price = state.catalog[i].items[j].price;
                        return state;       
                    }
                }
            }
        }
    }
    return state;
}

export default selectItemReducer;