'use client';
import english from '@/app/languages/english.json';
import arabic from '@/app/languages/arabic.json';
import { LanguageSelectorContext } from '@/app/contexts/LanguageSelectorContext';
import UserNameInput from './component/usernameInput';
import PasswordInput from "./component/passwordInput";
import RememberMe from './component/rememberMe';
import SubmateBTN from './component/submateBTN';
import SwitchToSignin from './component/switchToSignin';
import { useContext, useState } from "react";
import '@/app/pages/register/component/style.css';
import EmailInput from './component/emailInput';
import PhoneNumberInput from './component/phoneNumber';
import RetypePasswordInput from './component/retypePassword';

type switchFormsParams = {
    logInExist: boolean,
    setLogInExist: (value: boolean) => void,
    signinExist: boolean,
    setSignInExist: (value: boolean) => void
}
const SigninForm = ({logInExist, setLogInExist, signinExist, setSignInExist}: switchFormsParams) => {

    const activeLanguage = useContext(LanguageSelectorContext)?.activeLanguage;

    const [passwordType, setPasswordType] = useState<'text' | 'password'>('text')
    

    // const style: CSSProperties = {
    //     padding: 'var(--medium-padding)',
    //     backgroundColor: 'var(--white)'
    // }
    
    return (
        <div className={signinExist ? 'form' : 'invisible'}>

            <h2 className='form-name'>{
                activeLanguage == 'english' ? 
                    english.signinW 
                : activeLanguage == 'arabic' ?
                    arabic.signinW
                : english.signinW
            }</h2>

            <UserNameInput/>
            <EmailInput/>
            <PhoneNumberInput/>
            <PasswordInput passwordType={passwordType} setPasswordType={setPasswordType}/>
            <RetypePasswordInput passwordType={passwordType} setPasswordType={setPasswordType}/>
            <RememberMe/>
            <SubmateBTN/>
            <SwitchToSignin logInExist={logInExist} setLogInExist={setLogInExist} signinExist={signinExist} setSignInExist={setSignInExist} />

        </div>
    )
}
export default SigninForm