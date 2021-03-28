import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test'
})

export const requestAPI = {
    post(success:boolean) {
       return axios.post('https://neko-cafe-back.herokuapp.com/auth/test',{success:success}).then(res => {
           return res.data.errorText
       }).catch(rej => rej.response.data.errorText);
    }
}