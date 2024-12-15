'use client';

import { CSSProperties } from "react";
import Name from "./component/name";
import Description from "./component/discription";
import Categorie from "./component/categorie";
import Color from "./component/colors";
import Price from "./component/price";
import PutInPurchaseBTN from "./component/putInPurchaseBTN";
import Quantity from "./component/quantity";
import Size from "./component/size";
import { productParams } from "@/app/contexts/productSelectForShowing";
import './style.css';
import TotalRating from "./component/totalRting";


const InformationSection = ({product}: {product: productParams | undefined}) => {


    const style: CSSProperties = {
        width: '100%',
        maxHeight: '100%',
        flexDirection: 'column',
        padding: 'var(--extra-large-margin)',
        boxSizing: 'border-box',
    }
    const styleInputDiv: CSSProperties = {
        //width: '100%',
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'start',
        flexDirection: 'column',

    }
    
    return (
        <div id="information-section" style={style}>
            <Name product={product}/>
            <Description product={product}/>
            <div style={styleInputDiv}>
                <Color product={product}/>
                <Size product={product}/>
                <Quantity product={product}/>
                <TotalRating product={product}/>
            </div>
            <Categorie product={product}/>
            <Price product={product}/>
            <PutInPurchaseBTN product={product}/>
        </div>
    )
}
export default InformationSection;