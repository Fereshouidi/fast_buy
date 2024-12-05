const url = 'https://fast-buy-back-end-ctzb.vercel.app//api';
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

export const getSliderData = async() => {
    try{
        const response = await axios.get(url + '/get/slider');
        const data = response.data;
        console.log(data);
        
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

