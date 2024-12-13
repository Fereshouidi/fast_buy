'use client';

const ProductDetails = ({params}: any) => {

    const {productId} = params
    return (
        <div>product details {productId} </div>
    )
}
export default ProductDetails;