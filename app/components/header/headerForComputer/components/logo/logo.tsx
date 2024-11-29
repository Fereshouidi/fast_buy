'use client';
import { CSSProperties } from 'react';
import logo from '../../../../../images/logo.png';
import english from '@/app/languages/english.json';

const Logo = () => {




    const style: CSSProperties = {
        cursor: 'pointer'
    }
    return (
        <div style={style} className='logo'>
            <img 
                src={logo.src}
                alt="Logo"   
            />
            <h1 >{english.general.appName}</h1>
        </div>
    )
}
export default Logo;
