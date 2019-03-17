import  {combineReducers} from 'redux';
import staffReducer from './staffReducer';
import formReducer from './formReducer'

export default combineReducers ({
    staffs : staffReducer,
    form : formReducer
     
})