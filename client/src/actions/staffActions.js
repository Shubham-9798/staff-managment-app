import { FETCH_STAFFS, DEMO} from './types';

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

export const demo = () => dispatch => {
    // console.log('feching')
    fetch('https://jsonplaceholder.typicode.com/posts')
     .then(res => res.json())
     .then(posts => dispatch({
         type: DEMO,
         payload: posts
     }))


}
