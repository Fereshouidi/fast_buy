'use client';
import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";
import { CSSProperties, useContext, useState } from "react";
import { CompanyInformationContext } from "@/app/contexts/companyInformation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import RateSection from "./rateSection/rateSection";
import { purchaseParams } from "@/app/contexts/purchaseData";

type params = {
    purchase: purchaseParams | undefined,
    setPurchase: (value: purchaseParams) => void;
}
const Rate = ({purchase, setPurchase}: params) => {


    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage;
    const primaryColor = useContext(CompanyInformationContext)?.primaryColor;
    const [rateSectionExist, setRateSectionExist] = useState<boolean>(false);


    const style: CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        margin: 'calc(var(--large-margin) * 1.5) var(--large-margin)',
        fontSize: 'calc(var(--big-size)/1.2)',
        fontWeight: '200',
        color: primaryColor,
        cursor: 'pointer'
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

            <RateSection exist={rateSectionExist} setExist={setRateSectionExist} purchase={purchase} setPurchase={setPurchase}/>
        </>
    )
}
export default Rate;