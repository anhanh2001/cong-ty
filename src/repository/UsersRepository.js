import Repository from "./Repository";
const resource = 'https://622a204cbe12fc4538b2f049.mockapi.io/users';
export default{
    get(){
        return Repository.get(`${resource}`);
    },
    getUser(userId){
        return Repository.get(`${resource}/${userId}`)
    },
    createUser(name,email,avatar,password){
        return Repository.post(`${resource}`,{name:name,email:email,avatar:avatar,password:password})
    },
    updateUser(name,email,avatar,password,id){
        return Repository.put(`${resource}/${id}`,{name:name,email:email,avatar:avatar,password:password})
    },
    deleteUser(id){
        return Repository.delete(`${resource}/${id}`)
    }
}