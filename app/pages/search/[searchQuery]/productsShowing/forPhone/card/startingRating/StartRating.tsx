
import ReactStars from 'react-stars';
import './reactStars.css';
import { LanguageSelectorContext } from '@/app/contexts/LanguageSelectorContext';
import { useContext } from 'react';
import { CompanyInformationContext } from '@/app/contexts/companyInformation';

type productParams = {
    name: LanguageParams,
    imagePrincipal: string,
    price: number,
    discount: discountParams,
    totalRating: number,
    currencyType: string

}

type LanguageParams = {
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
    
    const companyInformation = useContext(CompanyInformationContext)
    const languageContext = useContext(LanguageSelectorContext);

    return (
        <ReactStars
            count={5}
            size={10} 
            value={product.totalRating}
            //edit={false} 
            color2={`${companyInformation?.primaryColor}`} 
            className= {languageContext?.activeLanguage == 'arabic' ? 'rating-stars rating-stars-rtl' : 'rating-stars rating-stars-ltr'}
        />
    );
};

export default StarRating;
