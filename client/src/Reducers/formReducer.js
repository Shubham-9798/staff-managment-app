import {LOGIN} from '../actions/types';

const initialState = {
    item:{},

}

export default function(state = initialState, action) {
    const { payload } = action;
    switch(action.type) {

         case LOGIN:

         console.log("payload login")
         return {
             ...state,
            item: payload
         }
        default:
         return state;
    }
}