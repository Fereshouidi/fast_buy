
import ReactStars from 'react-stars';
import './reactStars.css';
import { LanguageSelectorContext } from '@/app/contexts/LanguageSelectorContext';
import { useContext } from 'react';

type productParams = {
    name: nameParams,
    imagePrincipal: string,
    price: number,
    discount: discountParams,
    totalRating: number,
    currencyType: string

}

type nameParams = {
    english: string,
    arabic: string
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

    const languageContext = useContext(LanguageSelectorContext);

    return (
        <ReactStars
            count={5}
            size={10} 
            value={product.totalRating}
            //edit={false} 
            color2={'var(--primary-color)'} 
            className= {languageContext?.activeLanguage == 'arabic' ? 'rating-stars-rtl' : 'rating-stars-ltr'}
        />
    );
};

export default StarRating;
