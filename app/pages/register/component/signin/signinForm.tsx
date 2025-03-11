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
import { CompanyInformationContext } from '@/app/contexts/companyInformation';
import DateOfBearthInput from './component/dateOfBirth';
import Adress from './component/adress';
import InterrestedAbout from './component/interrestedAbout';
import { formDataParams } from '@/app/contexts/signinFormData';

type switchFormsParams = {
    logInExist: boolean,
    setLogInExist: (value: boolean) => void,
    signinExist: boolean,
    setSignInExist: (value: boolean) => void
}
const SigninForm = ({logInExist, setLogInExist, signinExist, setSignInExist}: switchFormsParams) => {

    const activeLanguage = useContext(LanguageSelectorContext)?.activeLanguage;
    const registerRequiredData = useContext(CompanyInformationContext)?.registerRequiredData 


    const [passwordType, setPasswordType] = useState<'text' | 'password'>('text');
    // const [formData, setFormData] = useState<formDataParams>({userName: '', email: '', password: '', retypePassword: '', dateOfBirth: undefined, adress: '', interrestedAbout: '', phone: undefined, saveAccount: false});
    const [formData, setFormData] = useState<formDataParams>({userName: '', email: '', password: '', retypePassword: '', phoneNumber: null, dateOfBearth: null, adress: '', interrestedAbout: '',});


    return (
        <div className={signinExist ? 'form' : 'invisible'}>

            <h2 className='form-name'>{
                activeLanguage == 'english' ? 
                    english.signinW 
                : activeLanguage == 'arabic' ?
                    arabic.signinW
                : english.signinW
            }</h2>

            <UserNameInput formData={formData} setFormData={setFormData}/>
            <EmailInput formData={formData} setFormData={setFormData}/>
            {registerRequiredData?.phoneNumber ? <PhoneNumberInput formData={formData} setFormData={setFormData}/> : null}
            {registerRequiredData?.dateOfBearth ? <DateOfBearthInput formData={formData} setFormData={setFormData}/> : null}
            {registerRequiredData?.adress ? <Adress formData={formData} setFormData={setFormData}/> : null}
            {registerRequiredData?.interrestedAbout ? <InterrestedAbout formData={formData} setFormData={setFormData}/> : null}

            
            <PasswordInput passwordType={passwordType} setPasswordType={setPasswordType} setFormData={setFormData}/>
            <RetypePasswordInput passwordType={passwordType} setPasswordType={setPasswordType} setFormData={setFormData}/>
            <RememberMe formData={formData} setFormData={setFormData}/> 
            <SubmateBTN formData={formData} setFormData={setFormData}/> 
            <SwitchToSignin logInExist={logInExist} setLogInExist={setLogInExist} signinExist={signinExist} setSignInExist={setSignInExist} />

        </div>
    )
}
export default SigninForm