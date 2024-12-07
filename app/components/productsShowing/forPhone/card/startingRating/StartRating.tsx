
import ReactStars from 'react-stars';
import './reactStars.css';

type productParams = {
    name: string,
    imagePrincipal: string,
    price: number,
    discount: discountParams,
    totalRating: number,
    currencyType: string

}

type discountParams = {
    createdAt: Date,
    discountSticker: string,
    newPrice: number,
    oldPrice: number,
    percentage: number,
    startOfDiscount: Date, 
    endOfDiscount: Date
};

const StarRating = ({product}: {product : productParams}) => {


    return (
        <ReactStars
            count={5}
            size={12} 
            value={product.totalRating}
            edit={false} 
            color2={'var(--primary-color)'} 
            className='react-stars'
        />
    );
};

export default StarRating;
