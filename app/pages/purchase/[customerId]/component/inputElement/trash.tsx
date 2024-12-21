'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { shoppingCartParams } from "@/app/contexts/shoppingCart";
import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";
import { CSSProperties, useContext } from "react";

const Trash = ({shoppingCart}: {shoppingCart: shoppingCartParams | undefined}) => {

    console.log(shoppingCart);
    
    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage;

    if(typeof window == 'undefined'){
        return;
    }
    const style: CSSProperties = {
        color: 'red',
        fontSize: window.innerWidth > 800 ? 'var(--primary-size)' : 'var(--small-size)'
    }
    return (
        <div style={style}>
            <FontAwesomeIcon icon={faTrash}/> {activeLanguage?.deleteW}
        </div>
    )
}
export default Trash;