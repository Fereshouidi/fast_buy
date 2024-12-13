'use client';

interface Params {
    productId: string;
}
const ProductDetails = ({params}: {params: Params}) => {

    const {productId} = params
    console.log(typeof params);
    
    return (
        <div>product details {productId} </div>
    )
}
export default ProductDetails;