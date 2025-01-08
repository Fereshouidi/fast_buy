'use client';
import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";
import { CSSProperties, useContext, useEffect, useState } from "react";
import { CompanyInformationContext } from "@/app/contexts/companyInformation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import RateSection from "./rateSection/rateSection";
import { purchaseParams } from "@/app/contexts/purchaseData";
import { reviewParams } from "@/app/contexts/reviews";
import { getReviewByCustomerProduct } from "@/app/crud";

type params = {
    purchase: purchaseParams | undefined,
    setPurchase: (value: purchaseParams) => void;
}
const Rate = ({purchase, setPurchase}: params) => {


    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage;
    const primaryColor = useContext(CompanyInformationContext)?.primaryColor;
    const [rateSectionExist, setRateSectionExist] = useState<boolean>(false);
    const [review, setReview] = useState<reviewParams | undefined>(undefined);


    useEffect(() => {
        const fetchReview = async () => {
            const review = await getReviewByCustomerProduct(purchase?.buyer, purchase?.product);
            setReview(review);
        } 
        fetchReview()
    }, [purchase])

    const style: CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        margin: 'calc(var(--large-margin) * 1.5) var(--large-margin)',
        fontSize: 'calc(var(--big-size)/1.2)',
        fontWeight: '700',
        color: primaryColor,
        cursor: 'pointer',
    }
    const styleIcon: CSSProperties = {
        margin: '0 var(--small-margin)',
    }

    return (
        <>
            <div style={style} onClick={() => setRateSectionExist(true)}>
                <FontAwesomeIcon icon={faStar} style={styleIcon}/>
                {activeLanguage?.rateProductW }
            </div>

            <RateSection exist={rateSectionExist} setExist={setRateSectionExist} purchase={purchase} setPurchase={setPurchase} review={review}/>
        </>
    )
}
export default Rate;