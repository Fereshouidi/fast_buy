'use client';
import english from '@/app/languages/english.json';
import arabic from '@/app/languages/arabic.json';
import { LanguageSelectorContext } from '@/app/contexts/LanguageSelectorContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { CSSProperties, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { CompanyInformationContext } from '@/app/contexts/companyInformation';
import { formDataParams } from '@/app/contexts/signinFormData';
import { BannersContext } from '@/app/contexts/banners';
import { sendActivationToken } from '@/app/crud';
import { createAccount } from '@/app/crud';
import { useRouter } from 'next/navigation';
import { LoadingIconContext } from '@/app/contexts/loadingIcon';
import { darken } from 'polished';



type Params = {
    formData: formDataParams
    setFormData: (data: formDataParams | ((prev: formDataParams) => formDataParams)) => void;
}

const SubmateBTN = ({formData}: Params) => {

    const router = useRouter();
    
    const activeLanguage = useContext(LanguageSelectorContext)?.activeLanguage;
    const companyInformationContext = useContext(CompanyInformationContext);
    const setPasswordsNotMatchExist = useContext(BannersContext)?.setPasswordsNotMatch;
    const setEmailNotValidBanner = useContext(BannersContext)?.setemailNotValide;
    const setVerificationBanner = useContext(BannersContext)?.setVerificatinEmailBanner;
    const loadingIconContext = useContext(LoadingIconContext);
    const [isButtonWork, setIsButtonWork] = useState<boolean>(false);

    const btnRef = useRef<HTMLDivElement | null>(null);

    if(!setPasswordsNotMatchExist || !setEmailNotValidBanner || !setVerificationBanner){
        throw 'error banner is undefind !'
    }


    const randomActivationCode = Math.round(Math.random() * 10000);

    useEffect(() => {
        if (
            formData.userName.trim() &&
            formData.email.trim() &&
            formData.password.trim() &&
            formData.retypePassword.trim()
        ) {
            let allRequiredFieldsFilled = true;
    
            Object.entries(companyInformationContext?.registerRequiredData || {}).forEach(([key, isRequired]) => {
                if (isRequired) {
                    if (!formData[key]?.toString().trim()) {
                        allRequiredFieldsFilled = false;
                    }
                }
            });
    
            setIsButtonWork(allRequiredFieldsFilled);
        } else {
            setIsButtonWork(false); 
        }
    
    }, [formData]);
    


    const handleClick = async() => {

        if (!isButtonWork) {
            return;
        }
        
        if(btnRef.current){
            btnRef.current.style.backgroundColor = darken(0.1,  companyInformationContext?.primaryColor || '');
            setTimeout(() => {
                if (btnRef.current) {
                    btnRef.current.style.backgroundColor = companyInformationContext?.primaryColor || '';
                }
            }, 100);
        }

        loadingIconContext?.setExist(true);

        if(formData.password !== formData.retypePassword){
            setPasswordsNotMatchExist(true);
            loadingIconContext?.setExist(false);
            return;
        }
        
        
        const isActivationTokenSended = await sendActivationToken(
            formData.email, 
            formData.userName, 
            companyInformationContext?.email, 
            companyInformationContext?.password, 
            activeLanguage, 
            randomActivationCode
        );

        if(!isActivationTokenSended){
            setEmailNotValidBanner(true);
            loadingIconContext?.setExist(false);
            return;
        }

        const customerAccount = await createAccount({
            userName: formData.userName, 
            email: formData.email, 
            password: formData.password, 
            adress: formData.adress, 
            interrestedAbout:formData.interrestedAbout,
            token: randomActivationCode
        })

        localStorage.setItem('customerData', JSON.stringify(customerAccount))

        if(companyInformationContext?.activateAccountWhileSignin){
            setVerificationBanner(true);
            loadingIconContext?.setExist(false)
            return;
        }

        router.push('/');
    
        
    }

    const style: CSSProperties = {
        backgroundColor: isButtonWork ? companyInformationContext?.primaryColor : 'var(--ashen-almost-white)'
    }
    
    return (
        <div style={style} className='submate-btn' onClick={handleClick} ref={btnRef}>

            <FontAwesomeIcon icon={faRightToBracket}/>

            <span>{
                activeLanguage == 'english' ?
                    english.signinW
                : activeLanguage == 'arabic' ?
                    arabic.signinW
                : english.signinW
            }</span>

        </div>
    )
}
export default SubmateBTN