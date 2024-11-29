'use client';
import { useEffect, useState } from 'react';

const LanguageSelector = () => {

    const [activeLanguage, setActiveLanguage] = useState(localStorage.getItem('activeLanguage') || 'english');

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

    return(
        <select name="languageSelector" id="languageSelector" onChange={(event) => handleLanguage(event)}>
            <option value="english">english</option>
            <option value="arabic">arabic</option>
        </select>
    )
}
export default LanguageSelector;