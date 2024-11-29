'use client';
import logo from '../../../../../images/logo.png';


const Logo = () => {
    return (
        <div className='logo'>
            <img 
                src={logo.src}
                alt="Logo"   
            />
            <h1 >{'Fast Buy'}</h1>
        </div>
    )
}
export default Logo;
