import Repository from "./Repository";
const resource = 'https://622a204cbe12fc4538b2f049.mockapi.io/products';
export default{
    get(){
        return Repository.get(`${resource}`);
    },
    getProduct(productId){
        return Repository.get(`${resource}/${productId}`)
    },
    createProduct(name,price,avatar,description){
        return Repository.post(`${resource}`,{name:name,price:price,avatar:avatar,description:description})
    },
    updateProduct(name,price,avatar,description,id){
        return Repository.put(`${resource}/${id}`,{name:name,price:price,avatar:avatar,description:description})
    },
    deleteProduct(id){
        return Repository.delete(`${resource}/${id}`)
    }
}