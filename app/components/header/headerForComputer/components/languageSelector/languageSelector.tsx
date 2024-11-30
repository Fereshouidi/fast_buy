'use client';
import { useEffect, useState, useContext, CSSProperties } from 'react';
import { LanguageSelectorContext } from '@/app/contexts/LanguageSelectorContext';

const LanguageSelector = () => {


    const context = useContext(LanguageSelectorContext);
    const [hoveredOption, setHoveredOption] = useState<string | null>(null);


      if (!context) {
        throw new Error("LanguageSelector must be used within a LanguageSelectorContext.Provider");
    }

    const { activeLanguage, setActiveLanguage } = context;

    const handleLanguage = (value: React.ChangeEvent<HTMLSelectElement>) => {
        const languageSelected = value.target.value;
        localStorage.setItem('activeLanguage', languageSelected);
        setActiveLanguage(languageSelected);
    }

    useEffect(() => {
        const storedLanguage = localStorage.getItem('activeLanguage');
        if (storedLanguage) {
            setActiveLanguage(storedLanguage);
        }
    }, []);

    const handleMouseEnter = (value: string) => {
        setHoveredOption(value);
    };

    const handleMouseLeave = () => {
        setHoveredOption(null);
    };

    const styleSelector: CSSProperties = {
        width: 'var(--double-width)',
        outline: 'none',
        border: 'none',
        cursor: 'pointer',
        margin: 'var(--small-margin)',
        color: 'var(--black)',
        backgroundColor: 'var(--whie)',
    }

    const getOptionStyle = (optionValue: string): CSSProperties => ({
        backgroundColor: hoveredOption === optionValue ? 'var(--primary-color)' : 'var(--white)',
        outline: 'none',
    });

    return(
        <select name="languageSelector" 
            id="languageSelector" 
            value={activeLanguage} 
            onChange={(event) => handleLanguage(event)}
            style={styleSelector}
        >
            <option 
                style={getOptionStyle('english')} 
                onMouseEnter={() => handleMouseEnter('english')} 
                onMouseLeave={handleMouseLeave} 
                value="english">english
            </option>
            <option 
                style={getOptionStyle('arabic')} 
                onMouseEnter={() => handleMouseEnter('arabic')} 
                onMouseLeave={handleMouseLeave} 
                value="arabic">العربية
            </option>
        </select>
    )
}
export default LanguageSelector;