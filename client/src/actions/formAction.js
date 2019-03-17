import { LOGIN} from './types'

function handleResponse(response) {
    if(response.ok) {
        return response.json();
    }else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error
    }
}

export const login =  (credentials) => dispatch => {
       
    return fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(credentials)
    }).then(handleResponse)



}