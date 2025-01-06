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
        flexDirection: 'column',
        margin: 'var(--large-margin)',
        fontSize: 'var(--primary-size)',
        fontWeight: '400',
        color: 'var(--black)',
    }
    const styleDivContainer: CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        width: '100%'
    }
    const styleSpan: CSSProperties = {
        marginRight: activeLanguage?.activeLanguage != 'arabic' ? 'var(--large-margin)' : '',
        marginLeft: activeLanguage?.activeLanguage != 'arabic' ? '' : 'var(--large-margin)',
        cursor: 'pointer',
        fontWeight: '400',

    }
    const styleShowReviews: CSSProperties = {
        fontSize: 'calc(var(--small-size)*1.5)',
        margin: 'var(--small-margin)',
        color: companyInformation?.primaryColor,
        textDecoration: 'underline',
        fontWeight: 700,
        cursor: 'pointer'
    }

    return (
        <div style={style}>
            <div style={styleDivContainer}>

                <span style={styleSpan} >{
                    activeLanguage?.EvaluationW + ' : '
                }</span>

                <ReactStars
                    count={5}
                    size={24} 
                    value={product.totalRating}
                    edit={false} 
                    color2={`${companyInformation?.primaryColor}`} 
                    className='react-stars'
                />

            </div>

            <span style={styleShowReviews} onClick={() => setReviewsSection(true)}>{activeLanguage?.showReviewsW}</span>

            <ReviewsSection exist={reviewsSection} setExist={setReviewsSection} reviews={reviews} setReviews={setReviews}/>
        </div>
    )
}
export default TotalRating;