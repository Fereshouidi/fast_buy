'use client';
import english from '@/app/languages/english.json';
import arabic from '@/app/languages/arabic.json';
import { LanguageSelectorContext } from '@/app/contexts/LanguageSelectorContext';
import UserNameInput from "./component/usernameInput";
import PasswordInput from "./component/passwordInput";
import RememberMe from './component/rememberMe';
import SubmateBTN from './component/submateBTN';
import SwitchToSignin from './component/switchToSignin';
import { useContext, useState } from "react";
import '@/app/pages/register/component/style.css';

type switchFormsParams = {
    logInExist: boolean,
    setLogInExist: (value: boolean) => void,
    signinExist: boolean,
    setSignInExist: (value: boolean) => void
}
const LoginForm = ({logInExist, setLogInExist, signinExist, setSignInExist}: switchFormsParams) => {

    const activeLanguage = useContext(LanguageSelectorContext)?.activeLanguage;

    const [passwordType, setPasswordType] = useState<'text' | 'password'>('text')
    

    // const style: CSSProperties = {
    //     padding: 'var(--medium-padding)',
    //     backgroundColor: 'var(--white)'
    // }
    
    return (
        <div className={logInExist ? 'form' : 'invisible'}>

            <h2 className='form-name'>{
                activeLanguage == 'english' ? 
                    english.loginW 
                : activeLanguage == 'arabic' ?
                    arabic.loginW
                : english.loginW
            }</h2>

            <UserNameInput/>
            <PasswordInput passwordType={passwordType} setPasswordType={setPasswordType}/>
            <RememberMe/>
            <SubmateBTN/>
            <SwitchToSignin logInExist={logInExist} setLogInExist={setLogInExist} signinExist={signinExist} setSignInExist={setSignInExist} />

        </div>
    )
}
export default LoginForm