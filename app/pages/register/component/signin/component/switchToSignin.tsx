'use client';
import english from '@/app/languages/english.json';
import arabic from '@/app/languages/arabic.json';
import { LanguageSelectorContext } from '@/app/contexts/LanguageSelectorContext';
import { CSSProperties, useContext } from "react";
import '@/app/pages/register/component/style.css';
import { CompanyInformationContext } from '@/app/contexts/companyInformation';

type switchFormsParams = {
    logInExist: boolean,
    setLogInExist: Function,
    signinExist: boolean,
    setSignInExist: Function
}
const SwitchToSignin = ({logInExist, setLogInExist, signinExist, setSignInExist}: switchFormsParams) => {

    const activeLanguage = useContext(LanguageSelectorContext)?.activeLanguage;
    const companyInformationContext = useContext(CompanyInformationContext)

    const handleSwitchForms = () => {
        setSignInExist(false);
        setLogInExist(true)
    }

    const styleSpan: CSSProperties = {
        margin: '0 var(--small-margin)',
        color: companyInformationContext?.primaryColor
    }
    
    return (
        <div className='switch-forms'>
            <p>{
                activeLanguage == 'english' ? 
                    english.haveAccountAlready 
                : activeLanguage == 'arabic' ?
                    arabic.haveAccountAlready
                : english.haveAccountAlready
            }</p>

            <span style={styleSpan} onClick={handleSwitchForms}>{
                activeLanguage == 'english' ? 
                    english.signinW 
                : activeLanguage == 'arabic' ?
                    arabic.signinW 
                : english.signinW  
            }</span>

        </div>
    )
}
export default SwitchToSignin