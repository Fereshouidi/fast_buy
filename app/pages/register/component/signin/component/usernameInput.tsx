'use client';

import english from '@/app/languages/english.json';
import arabic from '@/app/languages/arabic.json';
import { LanguageSelectorContext } from '@/app/contexts/LanguageSelectorContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { ChangeEvent, CSSProperties, useContext } from 'react';
import { CompanyInformationContext } from '@/app/contexts/companyInformation';
import { formDataParams } from '@/app/contexts/customerData';

type Params = {
    formData: formDataParams;
    setFormData: (data: formDataParams | ((prev: formDataParams) => formDataParams)) => void;
}
const UserNameInput = ({setFormData}: Params) => {
    
    const activeLanguage = useContext(LanguageSelectorContext)?.activeLanguage;
    const companyInformationContext = useContext(CompanyInformationContext)

    const handleUserName = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev, 
            userName: event.target.value
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
            
            <input type='text' 
                placeholder= {
                    activeLanguage == 'english' ?
                        english.userNameW + ' ... '
                    : activeLanguage == "arabic" ?
                        arabic.userNameW + ' ... '
                    : english.userNameW + ' ... '
                }
                style={styleInput}
                onChange={(event) =>  handleUserName(event)}
            />

            <div className='icon-div' style={styleIconDiv}>
                <FontAwesomeIcon icon={faUser} className="icon fa-user" />
            </div>
        </div>
    )
}
export default UserNameInput