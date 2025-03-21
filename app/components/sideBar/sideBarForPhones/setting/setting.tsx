'use client'; 
import { CSSProperties, useContext } from "react";
import Account from "./account/account";
import ThemeToggle from "./ThemeToggle/themeToggle";
import LanguageSelector from "./language/language";
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";

const Setting = () => {

    const languageSelectorContext = useContext(LanguageSelectorContext);
    if(!languageSelectorContext){
        throw 'error languageSelectorContext !'
    }

    const style: CSSProperties = {
        position: 'absolute',
        bottom: '0',
        left: languageSelectorContext.activeLanguage == 'arabic' ? '' : '0',
        right: languageSelectorContext.activeLanguage == 'arabic' ? '0' : '',
        padding: '0',
        margin: '0',
        width: 'var(--side-bar-width)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }
    return(
        <div style={style}>
            <LanguageSelector/>
            <ThemeToggle/>
            <Account/>
        </div>
    )
}
export default Setting;