import {FETCH_STAFFS, DEMO} from '../actions/types';

const initialState = {
    items: [],
    item:{},
    test:[]
}

export default function(state = initialState, action) {
    const { payload } = action;
    switch(action.type) {
      
        case FETCH_STAFFS:
         console.log("staff")
         console.log(payload)
         return {
             ...state,
             items: payload.staffs
         };

         case DEMO:
         console.log("demo")
         console.log(action.payload)
         return {
             ...state,
            test: action.payload
         }
        default:
         return state;
    }
}