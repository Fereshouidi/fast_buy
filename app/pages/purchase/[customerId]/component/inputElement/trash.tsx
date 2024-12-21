'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { shoppingCartParams } from "@/app/contexts/shoppingCart";
import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";
import { CSSProperties, useContext } from "react";

const Trash = ({shoppingCart}: {shoppingCart: shoppingCartParams | undefined}) => {

    console.log(shoppingCart);
    
    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage;

    const style: CSSProperties = {
        color: 'red'
    }
    return (
        <div style={style}>
            <FontAwesomeIcon icon={faTrash}/> {activeLanguage?.deleteW}
        </div>
    )
}
export default Trash;