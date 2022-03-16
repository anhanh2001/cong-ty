import ProductsRepository from "./ProductsRepository";
import UsersRepository from "./UsersRepository";

const repositories = {
    products: ProductsRepository,
    users: UsersRepository
}
export const Factory = {
    get: users => repositories[users],  
    get: products => repositories[products],
}