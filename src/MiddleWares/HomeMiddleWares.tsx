import React from 'react';
import { ProductListParams, FetchProductsParam } from '../TypesCheck/HomeProps';
import axios from 'axios';
//import { ICatProps } from './../TypesCheck/CategoryTypes';
interface ICatProps {
    setGetCategory: React.Dispatch<React.SetStateAction<ProductListParams[]>>;
}

interface IProdByCatProps {
    catID: string;
    setGetProductsByCatID: React.Dispatch<React.SetStateAction<ProductListParams[]>>;
}

interface IProductProps {
    //catID?: string;
    setProducts: React.Dispatch<React.SetStateAction<ProductListParams[]>>;
}

export const fetchCategories = async ({ setGetCategory }: ICatProps) => {
    try {
        const response = await axios.get("http://10.106.23.34:9000/category/getAllCategories");
        console.log("API Response", response.data);

        if (Array.isArray(response.data)) {
            const fixedData = response.data.map(item => ({
                ...item,
                images: item.images.map((img: string) => 
                    img.replace("http://localhost", "http://10.106.23.34")
            )
        }));

            setGetCategory(fixedData);
        } else {
            console.warn("fetchCategories: Dữ liệu API không là mảng", response.data);
            setGetCategory([]);
        }
    } catch (error) {
        console.log("axios get error", error);
        setGetCategory([]);
    }
};

export const fetchProductsByCatID = async ({ setGetProductsByCatID, catID }: IProdByCatProps) => {
    try {
        const response: FetchProductsParam = await axios.get(`http://10.106.23.34:9000/product/getProductByCatID/${catID}`);
        console.log("API Response", response.data);

        if (Array.isArray(response.data)) {
            const fixedData = response.data.map(item => ({
                ...item,
                images: item.images.map((img: string) => 
                    img.replace("http://localhost", "http://10.106.23.34")
            )
        }));
    
            setGetProductsByCatID(fixedData);
        }   else {
            console.warn("fetchProductsByCatID: Dữ liệu API không là mảng", response.data);
            setGetProductsByCatID([]);
        }
    } catch (error) {
        console.log("axios get error", error);
        setGetProductsByCatID([]);
    }
};

// Lấy danh sách sản phẩm không nổi bật
export const fetchNonFeaturedProducts = async ({ setProducts }: IProductProps) => {
    try {
        const response = await axios.get("http://10.106.23.34:9000/product/getNonFeaturedProducts");
        console.log("API Response - Non Featured", response.data);

        if (Array.isArray(response.data)) {
            const fixedData = response.data.map(item => ({
                ...item,
                images: item.images.map((img: string) => 
                    img.replace("http://localhost", "http://10.106.23.34")
                )
            }));

            setProducts(fixedData);
        } else {
            console.warn("fetchNonFeaturedProducts: Dữ liệu API không là mảng", response.data);
            setProducts([]);
        }
    } catch (error) {
        console.error("axios get error (Non Featured Products)", error);
        setProducts([]);
    }
};

// Lấy danh sách sản phẩm nổi bật
export const fetchIsFeaturedProducts = async ({ setProducts }: IProductProps) => {
    try {
        const response = await axios.get("http://10.106.23.34:9000/product/getIsFeaturedProducts");
        console.log("API Response - Featured", response.data);

        if (Array.isArray(response.data)) {
            const fixedData = response.data.map(item => ({
                ...item,
                images: item.images.map((img: string) => 
                    img.replace("http://localhost", "http://10.106.23.34")
                )
            }));

            setProducts(fixedData);
        } else {
            console.warn("fetchIsFeaturedProducts: Dữ liệu API không là mảng", response.data);
            setProducts([]);
        }
    } catch (error) {
        console.error("axios get error (Featured Products)", error);
        setProducts([]);
    }
};






