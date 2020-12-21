import state from './../state';
let catalog = state();

const catalogReducer = (state = catalog, action) =>{
    return state;
}

export default catalogReducer;