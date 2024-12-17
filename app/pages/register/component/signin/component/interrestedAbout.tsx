'use client';

import english from '@/app/languages/english.json';
import arabic from '@/app/languages/arabic.json';
import { LanguageSelectorContext } from '@/app/contexts/LanguageSelectorContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ChangeEvent, CSSProperties, useContext } from 'react';
import { CompanyInformationContext } from '@/app/contexts/companyInformation';
import { formDataParams } from '@/app/contexts/customerData';

type Params = {
    formData: formDataParams;
    setFormData: (data: formDataParams | ((prev: formDataParams) => formDataParams)) => void;
}
const InterrestedAbout = ({setFormData}: Params) => {
    
    const activeLanguage = useContext(LanguageSelectorContext)?.activeLanguage;
    const companyInformationContext = useContext(CompanyInformationContext);

    const handleInterrestedAbout = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev, 
            interrestedAbout: event.target.value
        }));
    }

    const styleInput: CSSProperties = {
        border: '0.7px solid' + companyInformationContext?.primaryColor,
    }
    const styleIconDiv: CSSProperties = {
        position: 'absolute',
        right: activeLanguage == 'arabic' ? '': '0',
        left: activeLanguage == 'arabic' ? '0': '',
        margin: '0 var(--medium-margin)',
        borderRadius: '50%',
        padding: "0 var(--medium-padding)",
        backgroundColor: 'var(--almost-white)',
        height: '90%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    return (
        <div className="input">
            
            <input type='text' 
                placeholder= {
                    activeLanguage == 'english' ?
                        english.areaOfInterest + ' ... '
                    : activeLanguage == "arabic" ?
                        arabic.areaOfInterest + ' ... '
                    : english.areaOfInterest + ' ... '
                }
                style={styleInput}
                onChange={(event) => handleInterrestedAbout(event)}
            />

            <div className='icon-div' style={styleIconDiv}>
                <FontAwesomeIcon icon={faStar} className="icon fa-Phone" />
            </div>
        </div>
    )
}
export default InterrestedAbout;