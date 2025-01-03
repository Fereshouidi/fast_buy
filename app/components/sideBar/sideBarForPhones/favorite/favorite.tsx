'use client';
import { CSSProperties, useContext, useEffect, useState } from "react";
import english from "@/app/languages/english.json";
import arabic from "@/app/languages/arabic.json";
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import { SideBarContext } from "@/app/contexts/SideBarContext";
import FavoriteIcon from "@/app/svg/icons/favotite";
import { CompanyInformationContext } from "@/app/contexts/companyInformation";
import { useRouter } from "next/navigation";
import { LoadingIconContext } from "@/app/contexts/loadingIcon";

const Favorite = () => {

    const [activeLanguage, setActiveLanguage] = useState(english);
    const languageSelectorContext = useContext(LanguageSelectorContext);
    const [isHover, setIsHover] = useState<boolean>(false)
    const router = useRouter();

    const companyInformation = useContext(CompanyInformationContext);
    const setLoadingIcon = useContext(LoadingIconContext)?.setExist
    
    const sideBarContext = useContext(SideBarContext);

    useEffect(() => {
        if(languageSelectorContext?.activeLanguage == 'english'){
            setActiveLanguage(english);
        }else if(languageSelectorContext?.activeLanguage == 'arabic'){
            setActiveLanguage(arabic);
        }else{
            setActiveLanguage(english);
        }
    }, [languageSelectorContext])

    if (!sideBarContext) {
        throw new Error("SideBarContext must be used within a SideBarContext.Provider");
    }
    const { sideBarExist, setSideBarExist } = sideBarContext;

    if(!sideBarContext || !languageSelectorContext || !setLoadingIcon){
        throw 'context error !'
    }
    const handleClick = () => {
        setLoadingIcon(true);
        router.push('/pages/favorite')
        setSideBarExist(false)
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
        >            <FavoriteIcon/>
            <span>{activeLanguage.sideBar.favorite}</span>
        </li>
    )
}
export default Favorite;