'use client';
import english from '@/app/languages/english.json';
import arabic from '@/app/languages/arabic.json';
import { LanguageSelectorContext } from '@/app/contexts/LanguageSelectorContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { CSSProperties, useContext } from 'react';
import { CompanyInformationContext } from '@/app/contexts/companyInformation';



const SubmateBTN = () => {
    
    const activeLanguage = useContext(LanguageSelectorContext)?.activeLanguage;
    const companyInformationContext = useContext(CompanyInformationContext)

    const style: CSSProperties = {
        backgroundColor: companyInformationContext?.primaryColor
    }
    
    return (
        <div style={style} className='submate-btn'>

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