const url = 'https://vercel.com/fares-projects-605761dd/fast-buy-back-end-ctzb/api';
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

export const getSliserData = async() => {
    try{
        const response = await axios.get(url + '/get/slider');
        const data = response.data;
        return data;
    }catch(err){
        throw err;
    }
}

export const getAllProducts_SortedByRating = async() => {
    try{
        const response = await axios.get(url + '/get/products/byRating');
        const data = response.data;
        return data;
    }catch(err){
        throw err;
    }
}

