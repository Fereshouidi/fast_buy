'use client';

type productParams = {
    name: string
}
const Card = ({product}: {product : productParams}) => {

    return(
        <div>{product.name}</div>
    )
}
export default Card;