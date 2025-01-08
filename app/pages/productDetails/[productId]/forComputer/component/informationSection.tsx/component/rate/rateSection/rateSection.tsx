'use client';

import { purchaseParams } from "@/app/contexts/purchaseData";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSProperties, useContext, useEffect, useState } from "react";
import ReactStars from "react-stars";
import '@/app/pages/productDetails/[productId]/forComputer/component/informationSection.tsx/component/rate/style.css';
import { CompanyInformationContext } from "@/app/contexts/companyInformation";
import { updateReview } from "@/app/crud";
import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";
import { BannerContext } from "@/app/contexts/bannerForEverything";
import { LoadingIconContext } from "@/app/contexts/loadingIcon";


type params = {
    exist: boolean,
    setExist: (value: boolean) => void;
    setStarsNum?: (value: number) => void;
    setNote?: (value: string) => void;
    purchase: purchaseParams | undefined,
    setPurchase: (value: purchaseParams) => void;
}
const RateSection = ({exist, setExist, purchase }: params) => {

    const setBanner = useContext(BannerContext)?.setBanner;
    const setLoadingIcon = useContext(LoadingIconContext)?.setExist;
    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage;
    const primaryColor = useContext(CompanyInformationContext)?.primaryColor;
    const [starsNum, setStarsNum] = useState<number>(0);
    const [note, setNote] = useState<string>('');
    const [isEdit, setIsEdit] = useState<boolean>(false);


    const handleRate = (starsNum: number) => {
        setIsEdit(true);
        setStarsNum(starsNum)
    }
    const handleComment = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNote(event.target.value)
    }

    useEffect(() => {
        setStarsNum(purchase?.customerRating?? 0)
    }, [])

    const submate = () => {
        if (purchase && starsNum && setLoadingIcon && setBanner) {             
            if (starsNum) { 
                setLoadingIcon(true);
                setExist(false);
                updateReview(purchase._id, purchase.buyer, purchase.product , starsNum, note);
                setBanner(true, 'your review has been sended successfully', 'success');
                setLoadingIcon(false);
                setIsEdit(false);
            }
        }
    }
    const style: CSSProperties = {
        position: 'fixed',
        zIndex: 998,
        top: '40%',
        left: '50%',
        transform: 'translate(-50%)',
        backgroundColor: 'var(--white)',
        border: `1px solid ${primaryColor}`,
        padding: 'var(--medium-padding)',
        borderRadius: '20px',
        width: 'var(--extra-long-width)'
    }
    const styleContainer: CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 'var(--medium-padding)',
    }
    const styleHeader: CSSProperties = {
        direction: 'rtl'
    }
    const styleFaBan: CSSProperties = {
        cursor: 'pointer',
        color: 'var(--black)'
    }
    const styleTextArea: CSSProperties = {
        margin: 'var(--large-margin)',
        padding: 'var(--small-padding)',
        borderRadius: '10px',
        outline: 'none',
        width: '80%',
        height: 'var(--primary-height)'
    }
    const styleButton: CSSProperties = {
        padding: 'calc(var(--medium-padding) *1.3)',
        margin: 'calc(var(--medium-margin) *1.3)',
        backgroundColor: primaryColor,
        color: 'white',
        borderRadius: '50px',
        cursor: 'pointer'
    }
    
    return (
        <div 
            className={exist? '': 'invisible'}
            style={style}
        >
            <div className="banner">

            <div className="header" style={styleHeader}> <FontAwesomeIcon icon={faX} style={styleFaBan} onClick={() => setExist(false)}/> </div>

                <div className="content" style={styleContainer}> 
                    <ReactStars 
                        className="ReactStars"
                        color1={'var(--ashen-semi-transparent)'}
                        color2={primaryColor}
                        count={5}
                        value={starsNum}
                        size={35}
                        edit={true}
                        onChange={(e)=>handleRate(e)}
                    />
                    {  isEdit && <textarea placeholder={activeLanguage?.commentW + " ..."} style={styleTextArea} onChange={(e) => handleComment(e)}></textarea>}
                    <button style={styleButton} onClick={submate}>{activeLanguage?.submateW}</button>
                </div>

            </div>
        </div>
    )
}
export default RateSection;