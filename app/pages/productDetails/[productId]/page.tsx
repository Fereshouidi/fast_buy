'use client';

import { useEffect, useState } from "react";

interface propsParams {
    params: Promise<Params>;
    searchParams: string
}
interface Params {
    productId: string;
}

const ProductDetails = (props: propsParams) => {

    const [productId, setProductId] = useState<string>();

    useEffect(() => {
        const getProductd = async() => {
            console.log( props.params);
            const productId = await props.params;
            setProductId(productId.productId)
        }
        getProductd()
    }, [])
    
    return (
        <div>product details {productId} </div>
    )
}
export default ProductDetails;