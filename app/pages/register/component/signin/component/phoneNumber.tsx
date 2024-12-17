'use client';

import english from '@/app/languages/english.json';
import arabic from '@/app/languages/arabic.json';
import { LanguageSelectorContext } from '@/app/contexts/LanguageSelectorContext';import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { ChangeEvent, CSSProperties, useContext } from 'react';
import { CompanyInformationContext } from '@/app/contexts/companyInformation';
import { formDataParams, handleformDataParams } from '@/app/contexts/customerData';

const PhoneNumberInput = ({setFormData}: handleformDataParams) => {
    
    const activeLanguage = useContext(LanguageSelectorContext)?.activeLanguage;
    const companyInformationContext = useContext(CompanyInformationContext)

    const handlePhone = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData((prev: formDataParams) => ({
            ...prev, 
            phone: event.target.value
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
        <div className="input userName-input">
            
            <input type='number' 
                placeholder= {
                    activeLanguage == 'english' ?
                        english.PhoneNumberW + ' ... '
                    : activeLanguage == "arabic" ?
                        arabic.PhoneNumberW + ' ... '
                    : english.PhoneNumberW + ' ... '
                }
                style={styleInput}
                onChange={(event) => handlePhone(event)}
            />

            <div className='icon-div' style={styleIconDiv}>
                <FontAwesomeIcon icon={faPhone} className="icon fa-Phone" />
            </div>
        </div>
    )
}
export default PhoneNumberInput;