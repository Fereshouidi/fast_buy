'use client';
import OptionIcon from '@/app/svg/icons/option';
import { CSSProperties, useContext, useState } from 'react';
import { SideBarContext } from '@/app/contexts/SideBarContext';
import { CompanyInformationContext } from '@/app/contexts/companyInformation';
const Options = () => {

    const companyInformation = useContext(CompanyInformationContext)
    const [optionIconColor, setOptionIconColor] = useState('transparent')
    const sideBarContext = useContext(SideBarContext);

    if(!sideBarContext){
        throw 'side bar error !';
    }

    const handleSideBarExistance = () => {
        setOptionIconColor('var(--primary-color-semi-transparent)')
        setTimeout(() => {setOptionIconColor('transparent')}, 100)
        sideBarContext.setSideBarExist(!sideBarContext.sideBarExist);
    }

    const style: CSSProperties = {
        width: 'var(--primary-width)',
        height: 'var(--primary-height)',
        borderRadius: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: sideBarContext.sideBarExist? `${companyInformation?.primaryColor}`: 'var(--black)',
        backgroundColor: optionIconColor,
    }
    return(
        <div style={style} onClick={handleSideBarExistance}>
            <OptionIcon />
        </div>
    )
}
export default Options;