const url = 'http://localhost:3002/api';
import axios from "axios";

//https://fast-buy-back-end.vercel.app/api
//http://localhost:3002/api

export const getBulletinBoard = async() => {
    try{
        const response = await axios.get(url + '/get/bullentinBoard');
        const data = response.data;
        return data
    }catch(err){
        throw err;
    }
}

export const getBulletinBoard_two = async() => {
    try{
        const response = await axios.get(url + '/get/bullentinBoard_two');
        const data = response.data;
        return data
    }catch(err){
        throw err;
    }
}

export const getSliderData = async() => {
    try{
        const response = await axios.get(url + '/get/slider');
        const data = response.data;
        return data;
    }catch(err){
        throw err;
    }
}

export const getAllProducts_SortedByRating = async(page, limit) => {
    try{
        const response = await axios.get(url + '/get/products/byRating', 
            {params: { page: page, limit: limit }});
        const data = response.data;
        return data;
    }catch(err){
        throw err;
    }
}

export const getAllCategorie = async() => {
    try{
        const response = await axios.get(url + '/get/categories/tree')
        const data = response.data;
        return data;
    }catch(err){
        throw err;
    }
}

export const getCategoriesByParent = async(id) => {
    try{
        const response = await axios.get(url + '/get/categories/by/parent', {
            params: {parentId: id}
        })
        const data = response.data;
        return data;
    }catch(err){
        throw err;
    }
}

export const getProductsByCategorie = async(id) => {
    try{
        const response = await axios.get(url + '/get/products/by/categorie', {
            params: {parentCategorieId: id}
        })
        const data = response.data;
        return data;
    }catch(err){
        throw err;
    }
}

export const getCategoriesSection = async() => {
    try{
        const categoriesSection = (await axios.get(url + '/get/categoriesSection')).data;
        return categoriesSection;
    }catch(err){
        throw err;
    }
}

export const getConpanyInformations = async() => {
    try{
        const conpanyInformations = (await axios.get(url + '/get/conpanyInformations')).data;
        return conpanyInformations;
    }catch(err){
        throw err;
    }
}

export const getBestCategories = async() => {
    try{
        const bestCategories = (await axios.get(url + '/get/bestCategories')).data;
        return bestCategories;
    }catch(err){
        throw err;
    }
}

export const getProductByBiggestDiscount = async() => {
    try{
        const bestCategories = (await axios.get(url + '/get/product/by/biggestDiscount')).data;
        return bestCategories;
    }catch(err){
        throw err;
    }
}

export const getProductById = async (id) => {
    
    try {
        const response = await axios.get(url + `/get/product/byId`, {
            params: {id}
        });
        const data = response.data;
        return data;

    } catch (err) {
        throw err;
    }
};

export const createAccount = async(customerData) => {
    try{
        const response = await axios.post(url + '/add/customer', {customerData});
        return response.data;
    }catch(err) {
        throw err
    }
}

export const sendActivationToken = async(email, username, companyEmail, companyPassword, activeLanguage, activationToken) => {
    try{
        await axios.post(url + '/send/activationToken', {
            email, username, companyEmail, companyPassword, activeLanguage, activationToken
        });
        
        return true;

    }catch(err) {
        console.log(err);        
        return false;
    }
}

export const getCustomerById = async (id) => {
    
    try {
        const response = await axios.get(url + `/get/customer/byId`, {
            params: {id}
        });
        const data = response.data;
        return data;

    } catch (err) {
        throw err;
    }
};

export const logIn = async (userName, password) => {
    
    try {
        const response = await axios.get(url + `/get/customer/byCredentials`, {
            params: {userName, password}
        });
        
        return {data: response.data, status: response.status};

    } catch (err) {
        console.log(err.response.status);
        
        return {status: err.response.status};
    }
};

export const addPurchase = async (purchase) => {   
    
    try{
        const response = await axios.post(url + '/add/purchase', purchase);
        return response.data;
    }catch(err) {
        throw err
    }
}

export const getShoppingCartsByCustomerId = async (customerId) => {
    
    try {
        const shoppingCarts = await axios.get(url + '/get/activeShoppingCart/by/customer' , {
            params: {customerId}
        })
        console.log(shoppingCarts.data);
        
        return shoppingCarts.data;
    }catch(err) {
        throw err;
    }
}

export const deletePurchaseById = async (id) => {
    try {
        const response = await axios.delete(url + '/delete/purchase/byId', {
            params: {id}
        })
        return response.data.customer;
    }catch(err) {
        throw err;
    }
}

export const updateQuantitiy = async (id, quantity) => {
    try {
        const response = await axios.put(url+ '/update/quantity', {
            id, 
            quantity
        })
        console.log(response.data);
        return response.data
    }catch (err) {
        throw err;
    }
}