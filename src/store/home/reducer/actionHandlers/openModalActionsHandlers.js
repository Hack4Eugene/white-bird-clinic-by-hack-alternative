import {Map, Set, List, OrderedSet} from 'immutable';
let handleOpenModal = (state, payload) => {
    return state;
};
let handleOpenModalSuccess = (state, payload) => {
    console.log("modal payload: ", payload);
    let newState = state.set("agenciesModalIsOpen", true);
    newState = newState.set("_id", payload);

    return newState
};


export {
    handleOpenModal,
    handleOpenModalSuccess,
}
