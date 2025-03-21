'use client';
import { CSSProperties, useContext, useEffect, useState } from "react";
import english from "@/app/languages/english.json";
import arabic from "@/app/languages/arabic.json";
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import { SideBarContext } from "@/app/contexts/SideBarContext";
import AccountIcon from "@/app/svg/icons/account";
import { CompanyInformationContext } from "@/app/contexts/companyInformation";
import { useRouter } from "next/navigation";
import { CustomerDataContext } from "@/app/contexts/customerData";
import { LoadingIconContext } from "@/app/contexts/loadingIcon";

const Account = () => {

    const [activeLanguage, setActiveLanguage] = useState(english);
    const languageSelectorContext = useContext(LanguageSelectorContext);
    const [isHover, setIsHover] = useState<boolean>(false);
    const customer = useContext(CustomerDataContext);
    const setLoadingIcon = useContext(LoadingIconContext)?.setExist;
    const companyInformation = useContext(CompanyInformationContext);

    const router = useRouter();
    
    const sideBarContext = useContext(SideBarContext);
    if (!sideBarContext) {
        throw new Error("SideBarContext must be used within a SideBarContext.Provider");
    }
    const { sideBarExist, setSideBarExist } = sideBarContext;
    if(!languageSelectorContext){
        throw 'context error !'
    }

    if(!sideBarContext || !setLoadingIcon){
        throw 'context error !'
    }

    useEffect(() => {
        if(languageSelectorContext.activeLanguage == 'english'){
            setActiveLanguage(english);
        }else if(languageSelectorContext.activeLanguage == 'arabic'){
            setActiveLanguage(arabic);
        }else{
            setActiveLanguage(english);
        }
    }, [languageSelectorContext])

    const handleClick = () => {
        setLoadingIcon(true);
        setSideBarExist(false);
        if (customer) {
            router.push('/pages/account');
        } else {
            router.push('/pages/register');
        }
    }


    const style: CSSProperties = {
        display: sideBarExist? 'flex': 'none',
    }
    const styleHover: CSSProperties = {
        ...style,
        backgroundColor: companyInformation?.primaryColor
    }
    return(
        <li style={isHover? styleHover : style} 
            onClick={handleClick}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >  
            <AccountIcon/>
            <span>{activeLanguage.sideBar.accountW}</span>
        </li>
    )
}
export default Account;