import * as select from './select';
import * as types from 'actions/types';

const createReducer = handlers => (state,action) => {
    if(!handlers.hasOwnProperty(action.type)){
        return state;
    }

    return handlers[action.type](state,action);
};

export default createReducer({
    [types.SEL_EVENTS] : select.events,
    [types.SEL_FOOD] : select.food,
    [types.SEL_MURALS] : select.murals,
});

