'use client';

import english from '@/app/languages/english.json';
import arabic from '@/app/languages/arabic.json';
import { LanguageSelectorContext } from '@/app/contexts/LanguageSelectorContext';import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { CSSProperties, useContext } from 'react';
import { CompanyInformationContext } from '@/app/contexts/companyInformation';

const UserNameInput = () => {
    
    const activeLanguage = useContext(LanguageSelectorContext)?.activeLanguage;
    const companyInformationContext = useContext(CompanyInformationContext)

    const styleInput: CSSProperties = {
        border: '1px solid' + companyInformationContext?.primaryColor,
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
            />

            <div className='icon-div' style={styleIconDiv}>
                <FontAwesomeIcon icon={faUser} className="icon fa-user" />
            </div>
        </div>
    )
}
export default UserNameInput