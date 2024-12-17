'use client';

import english from '@/app/languages/english.json';
import arabic from '@/app/languages/arabic.json';
import { LanguageSelectorContext } from '@/app/contexts/LanguageSelectorContext';import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { ChangeEvent, CSSProperties, useContext } from 'react';
import { CompanyInformationContext } from '@/app/contexts/companyInformation';
import { formDataParams, handleformDataParams } from '@/app/contexts/customerData';

const Adress = ({setFormData}: handleformDataParams) => {
    
    const activeLanguage = useContext(LanguageSelectorContext)?.activeLanguage;
    const companyInformationContext = useContext(CompanyInformationContext)

    const handleAdress = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData((prev: formDataParams) => ({
            ...prev, 
            adress: event.target.value
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
                        english.fullAdressW + ' ... '
                    : activeLanguage == "arabic" ?
                        arabic.fullAdressW + ' ... '
                    : english.fullAdressW + ' ... '
                }
                style={styleInput}
                onChange={(event) => {handleAdress(event)}}
            />

            <div className='icon-div' style={styleIconDiv}>
                <FontAwesomeIcon icon={faLocation} className="icon fa-Phone" />
            </div>
        </div>
    )
}
export default Adress;