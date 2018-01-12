import { createStore, combineReducers } from 'redux';

const allPosts = (state=[], action) => {
    var nuevoEstado = Object.assign({}, state)
    switch(action.type) {
        case 'DATA_LOADED':
            nuevoEstado = state.concat(action.data)
            return nuevoEstado;
        case 'CLEAR_DATA':
            nuevoEstado = [];
            return nuevoEstado;
        default:
            return state;
    }
}

const reducer = combineReducers({
    allPosts: allPosts
});

const store = createStore(reducer);

export default store;