'use client';
import english from '@/app/languages/english.json';
import arabic from '@/app/languages/arabic.json';
import { LanguageSelectorContext } from '@/app/contexts/LanguageSelectorContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { CSSProperties, useContext } from 'react';
import { CompanyInformationContext } from '@/app/contexts/companyInformation';
import { formDataParams } from '@/app/contexts/customerData';
import { BannersContext } from '@/app/contexts/banners';
import { sendActivationToken } from '@/app/crud';
import { createAccount } from '@/app/crud';


type Params = {
    formData: formDataParams
    setFormData: (data: formDataParams | ((prev: formDataParams) => formDataParams)) => void;
}

const SubmateBTN = ({formData}: Params) => {
    
    const activeLanguage = useContext(LanguageSelectorContext)?.activeLanguage;
    const companyInformationContext = useContext(CompanyInformationContext);
    const setPasswordsNotMatchExist = useContext(BannersContext)?.setPasswordsNotMatch;
    if(!setPasswordsNotMatchExist){
        throw 'error setPasswordsNotMatchExist is undefind !'
    }

    const randomActivationCode = Math.round(Math.random() * 10000);

    const handleClick = async() => {
        if(formData.password !== formData.retypePassword){
            setPasswordsNotMatchExist(true)
        }
        await createAccount({
            userName: formData.userName, 
            email: formData.email, 
            password: formData.password, 
            adress: formData.adress, 
            interrestedAbout:formData.interrestedAbout,
            token: randomActivationCode
        })
        await sendActivationToken(
            formData.email, 
            formData.userName, 
            companyInformationContext?.email, 
            companyInformationContext?.password, 
            activeLanguage, 
            randomActivationCode
        );
        
    }

    const style: CSSProperties = {
        backgroundColor: companyInformationContext?.primaryColor
    }
    
    return (
        <div style={style} className='submate-btn' onClick={handleClick}>

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