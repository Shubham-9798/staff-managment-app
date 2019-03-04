import { FETCH_STAFFS} from './types';


export const fetchStaff = () => dispatch => {
        console.log('feching')
        fetch('http://localhost:5000/admin/getstaff', {
            method: 'POST'
        })
         .then(res => res.json())
         .then(staffs => dispatch({
             type: FETCH_STAFFS,
             payload: staffs
         }))
    

}