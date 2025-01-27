'use client';

import { CustomerDataParams } from "@/app/contexts/customerData";
import { CSSProperties, useContext, useState } from "react";
import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";
import { sendActivationToken } from "@/app/crud";
import { CompanyInformationContext } from "@/app/contexts/companyInformation";
import { BannerContext } from "@/app/contexts/bannerForEverything";
import { LoadingIconContext } from "@/app/contexts/loadingIcon";
type params = {
    customer: CustomerDataParams | undefined;
    setCustomer: (value: CustomerDataParams) => void

}

const Email = ({customer, setCustomer}: params) => {

    const setLoadingIcon = useContext(LoadingIconContext)?.setExist;
    const setBanner = useContext(BannerContext)?.setBanner;
    const companyInformation = useContext(CompanyInformationContext);
    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage;
    const [email, setEmail] = useState<string>(customer?.email?? '');

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);        
    }

    
    const verifEmail = async() => {

        const token = Math.floor(1000 + Math.random() * 9000);

        if (customer && setBanner && setLoadingIcon) {
            
            setLoadingIcon(true);

            setCustomer({
                ...customer,
                token: token
            })
          
            const emailValid = await sendActivationToken(email, 
                customer?.userName, 
                companyInformation?.email, 
                companyInformation?.password, 
                activeLanguage?.activeLanguage, 
                token
            );

            if (emailValid) {
                setCustomer({
                    ...customer,
                    email: email,
                    token: token,
                    verification: false
                });
                setBanner(true, "your email has been changed successfully and we've send you a ferification link ");
                setLoadingIcon(false);

            } else {
                setBanner(true, 'email not valid !', 'fail');
                setLoadingIcon(false);
            }

        }
    }

    const styleContainer: CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: window.innerWidth > 800 ? 'var(--large-padding)' : 'var(--medium-padding)',

    }
    const styleP: CSSProperties = {
        fontSize: 'var(--small-size)',
        padding: window.innerWidth > 800 ? 'var(--medium-padding)' : 'var(--medium-padding)',

    }
    const style_Inp_and_BTN_div: CSSProperties = {
        width: '95%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: window.innerWidth > 800 ? 'var(--medium-padding)' : 'var(--small-padding)',
    }
    const styleInput: CSSProperties = {
        padding: window.innerWidth > 800 ? 'var(--medium-padding)' : 'var(--small-padding)',
        outline: 'none',
        border: 'none',
        borderBottom: '0.02px solid var(--ashen-semi-transparent)',
        minWidth: '70%',
        borderRadius: ' 0 0 10px 0',
        opacity: 0.9
    }
    const styleButton: CSSProperties = {
        padding: window.innerWidth > 800 ? 'var(--medium-padding)' : 'var(--small-padding)',
        outline: 'none',
        border: 'none',
        borderBottom: '0.02px solid var(--ashen-semi-transparent)',
        backgroundColor: 'var(--black)',
        color: 'var(--white)',
        borderRadius: '10px 0 10px 0',
        cursor: 'pointer'
    }
    return (
        <div className="item">

            <h4>{activeLanguage?.emailW}</h4>

            <div style={styleContainer}>
                <p style={styleP}>{activeLanguage?.updateEmailP +' : '}</p>
                <div style={style_Inp_and_BTN_div}>
                    <input type="text"  
                        defaultValue={customer?.email} 
                        style={styleInput} 
                        placeholder={activeLanguage?.emailW + ' ...'}
                        onChange={(e) => handleEmail(e)}
                        maxLength={50}
                    />
                    <button style={styleButton} onClick={verifEmail}>{activeLanguage?.verif}</button>
                </div>
            </div>

        </div>
    )
}
export default Email;