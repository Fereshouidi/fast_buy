const url = 'https://fast-buy-back-end-ctzb.vercel.app/api';
import axios from "axios";



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






