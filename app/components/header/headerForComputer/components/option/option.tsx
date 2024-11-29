'use client';
import OptionIcon from '@/app/svg/icons/option';
import { CSSProperties, useContext } from 'react';
import { SideBarContext } from '@/app/contexts/SideBarContext';
const Options = () => {

    const sideBarContext = useContext(SideBarContext);

    if(!sideBarContext){
        throw 'side bar error !';
    }

    const handleSideBarExistance = () => {
        sideBarContext.setSideBarExist(!sideBarContext.sideBarExist);
    }

    const style: CSSProperties = {
        cursor: 'pointer',
        color: sideBarContext.sideBarExist? 'var(--primary-color)': 'var(--black)',
    }
    return(
        <div style={style} onClick={handleSideBarExistance}>
            <OptionIcon />
        </div>
    )
}
export default Options;