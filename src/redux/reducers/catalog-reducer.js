import state1 from './../state';

let initialState = state1().catalog;

const catalogReducer = (state = initialState) =>{
    return state;
}

export default catalogReducer;