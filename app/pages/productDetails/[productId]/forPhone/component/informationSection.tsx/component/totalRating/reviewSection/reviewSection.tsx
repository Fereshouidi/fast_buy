'use client';

import { CompanyInformationContext } from "@/app/contexts/companyInformation";
import { purchaseParams } from "@/app/contexts/purchaseData";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSProperties, useContext } from "react";
import Item from "./item";
import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";

type params = {
    exist: boolean,
    setExist: (value: boolean) => void;
    reviews: purchaseParams[] | undefined,
    setReviews: (value: purchaseParams[]) => void;
}
const ReviewsSection = ({exist, setExist, reviews}: params) => {

    const primaryColor = useContext(CompanyInformationContext)?.primaryColor;
    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage;


    const styleBannerContainer: CSSProperties = {
        position: 'fixed',
        zIndex: 998,
        top: 'var(--header-height)',
        left: '0',
        backgroundColor: 'var(--black-almost-transparnt)',
        width: '100vw',
        height: 'calc(100vh - var(--header-height))',
        display: exist? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center'
    }
    const style: CSSProperties = {
        backgroundColor: 'var(--white)',
        border: `1px solid ${primaryColor}`,
        padding: '0 var(--medium-padding)',
        borderRadius: '20px',
        width: '95%',
        maxHeight: '80%',
        overflow: 'scroll',
        scrollbarWidth: 'none',
        position: 'relative'
    }
    const styleContainer: CSSProperties = {
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        // flexDirection: 'column',
        height: '100%',
        padding: 'var(--medium-padding)',
        
       // backgroundColor: 'red',
    }
    const styleHeader: CSSProperties = {
        direction: 'rtl',
        position: 'sticky',
        backgroundColor: 'var(--white)',
        width: '100%',
        top: 0,
        left: 0,
        zIndex: 999,
        padding: 'var(--large-padding)',
        margin: 0,
        borderRadius: '0 0 20px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
    const styleFaBan: CSSProperties = {
        cursor: 'pointer',
        fontSize: 'var(--primary-size)'
    }
    const styleNoReviewsDiv: CSSProperties = {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'var(--primary-size)',
        padding: 'var(--medium-padding) 0',
        opacity: 0.7
    }
    return (
        <div 
            className={exist? '': 'invisible'}
            style={styleBannerContainer}
        >

            <div style={style}>
                <div className="banner">

                <div className="header" style={styleHeader}>
                    <FontAwesomeIcon icon={faX} style={styleFaBan} onClick={() => setExist(false)}/> 
                    <h5>{activeLanguage?.reviewsW}</h5>
                    <h1></h1>
                </div>

                    <div className="content" style={styleContainer}>{

                        reviews && reviews.length > 0 ? 
                        
                        reviews.map(review => {
                            return <Item key={review._id} review={review}/>
                        }) 

                        : <div style={styleNoReviewsDiv}>{activeLanguage?.noReviewsP}</div>

                    }</div>

                </div>
            </div>

        </div>
    )
}
export default ReviewsSection;