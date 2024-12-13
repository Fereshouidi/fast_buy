const ProductDetails = ({params, searchParams}: any) => {

    const {productId} = params
    return (
        <div>product details {productId} </div>
    )
}
export default ProductDetails;