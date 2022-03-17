import axios from 'axios'
const baseDomain = "https://622a204cbe12fc4538b2f049.mockapi.io";
export default axios.create({
    baseDomain
    // ,
    // headers:{"Authorization":"Barrer your token"}
})