'use client';

import { CSSProperties, useContext } from "react";
import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";
import { useRouter } from "next/navigation";
import { LoadingIconContext } from "@/app/contexts/loadingIcon";

const LogOut = () => {

    const setLoadingIcon = useContext(LoadingIconContext)?.setExist;
    const router = useRouter();
    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage;

    const logOut = () => {

        if (setLoadingIcon && typeof window != 'undefined') {
            setLoadingIcon(true);
            localStorage.removeItem('customerData');
            localStorage.removeItem('customerData');
            router.push('/pages/register')
        }
    }

    // const style: CSSProperties = {
    //     flex: '1 1 30%',
    //     backgroundColor: 'var(--white)',
    //     borderRadius: '20px',
    //     border: '0.02px solid var(--ashen-semi-transparent)',
    //     fontWeight: '100',
    //     opacity: 0.9
    // }

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
    const styleButton: CSSProperties = {
        padding: window.innerWidth > 800 ? 'var(--medium-padding)' : 'var(--medium-padding)',
        minWidth: '80%',
        borderRadius: '10px',
        textAlign: 'center',
        opacity: 1,
        color: 'white'
    }
    return (
        <div className="item" >

            <h4>{activeLanguage?.logOutW}</h4>

            <div style={styleContainer}>
                <p style={styleP}>{activeLanguage?.logOutP +' : '}</p>
                <h5 className="logOut-btn" style={styleButton} onClick={logOut}>{activeLanguage?.logOutW}</h5>
            </div>

        </div>
    )
}
export default LogOut;