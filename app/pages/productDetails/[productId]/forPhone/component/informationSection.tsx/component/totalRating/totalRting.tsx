'use client';
import ReactStars from "react-stars";
import { productParams } from "@/app/contexts/productSelectForShowing";
import { CompanyInformationContext } from "@/app/contexts/companyInformation";
import { CSSProperties, useContext, useEffect, useState } from "react";
import ReviewsSection from "./reviewSection/reviewSection";
import { getReviewsByProduct } from "@/app/crud";
import { purchaseParams } from "@/app/contexts/purchaseData";
import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";

const TotalRating = ({product}: {product: productParams | undefined}) => {

    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage;
    const companyInformation = useContext(CompanyInformationContext);
    const [reviewsSection, setReviewsSection] = useState<boolean>(false);
    const [reviews, setReviews] = useState<purchaseParams[] | undefined>(undefined)

    let x = 0;
    useEffect(() => {
        const fetchData = async() => {
            const reviews = await getReviewsByProduct(product?._id);
            setReviews(reviews);
            console.log(reviews);
            
        }
        if (x != 1) {
            fetchData()
            x = 1;
        } 
    }, [product])

    if(!product){
        return;
    }

    const style: CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        margin: 'var(--large-margin)',
        fontSize: 'var(--primary-size)',
        fontWeight: '200',
        color: 'var(--black)',
    }
    const styleSpan: CSSProperties = {
        marginRight: activeLanguage?.activeLanguage != 'arabic' ? 'var(--large-margin)' : '',
        marginLeft: activeLanguage?.activeLanguage != 'arabic' ? '' : 'var(--large-margin)',
        cursor: 'pointer',
    }
    const styleSHowReviews: CSSProperties = {
        fontSize: 'var(--small-size)',
        margin: 'var(--small-margin)',
        color: companyInformation?.primaryColor,
        textDecoration: 'underline',
        fontWeight: 700,
        cursor: 'pointer'
    }

    return (
        <div style={style}>
            <span style={styleSpan} >{
                activeLanguage?.EvaluationW
            }</span>

            <ReactStars
                count={5}
                size={20} 
                value={product.totalRating}
                edit={false} 
                color2={`${companyInformation?.primaryColor}`} 
                className='react-stars'
            />

            <span style={styleSHowReviews} onClick={() => setReviewsSection(true)}>{activeLanguage?.showReviewsW}</span>

            <ReviewsSection exist={reviewsSection} setExist={setReviewsSection} reviews={reviews} setReviews={setReviews}/>
        </div>
    )
}
export default TotalRating;