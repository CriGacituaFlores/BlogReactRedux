import { createStore, combineReducers } from 'redux';

const allPosts = (state=[{id: 1, title: 'TItulo del post', body: 'cuerpo del post'}], action) => {
    var nuevoEstado = Object.assign({}, state)
    switch(action.type) {
			case 'DATA_LOADED':
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