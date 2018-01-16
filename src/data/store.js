import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

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

const userCreated = (state={}, action) => {
    var nuevoEstado = Object.assign({}, state)
    switch(action.type) {
        case 'USER_CREATED':
            nuevoEstado = {mensaje: 'El usuario se creo con exito'}
            return nuevoEstado;
        case 'USER_ERROR':
            nuevoEstado = {mensaje: 'EL usuario no se creo'}
            return nuevoEstado
        default:
            return state
    }
}

const reducer = combineReducers({
    allPosts: allPosts,
    form: formReducer,
    userStatus: userCreated
});

const store = createStore(reducer);

export default store;