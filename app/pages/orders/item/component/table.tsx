'use client';

import { CSSProperties, useContext } from "react";
import '@/app/pages/orders/item/component/style.css'
import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";
import { OrderParams } from "@/app/contexts/order";

type parmas = {
    order: OrderParams | undefined
    style?: CSSProperties
}
const TableDetails = ({order}: parmas) => {

    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage;
    

    const style: CSSProperties = {
        margin: 'var(--large-margin) 0',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column"
    }
    const styleH4: CSSProperties = {
        padding: 'var(--small-padding) var(--large-padding)',
        width: '100%',
        fontSize: 'var(--small-size)',
        opacity: 0.7,
    }
    const styleTable: CSSProperties = {
        width: '90%',
        borderCollapse: 'collapse',
        padding: 0
    }
    const styleThead: CSSProperties = {
        border: `0.2px solid var(--ashen)`,
    }
    const styleTbody: CSSProperties = {
        border: `0.2px solid var(--ashen)`
    }
    const styleTFoot: CSSProperties = {
        border: `0.2px solid var(--ashen)`
    }
    const styleColor: CSSProperties = {
        width: 'var(--short-width)',
        height: 'var(--short-width)',
        borderRadius: '50px'
    }
    return (
        <div style={style}>

            <h4 style={styleH4}>{activeLanguage?.productsDetails + ' : '}</h4>

            <table style={styleTable}>
                <thead >
                    <tr style={styleThead}>
                        <th></th>
                        <th >{activeLanguage?.colorW}</th>
                        <th>{activeLanguage?.categorieW}</th>
                        <th>{activeLanguage?.quantity}</th>
                        <th>{activeLanguage?.priceW}</th>
                    </tr>
                    
                </thead>
                <tbody style={styleTbody}>{
                    order?.purchases?.map((purchase) => {
                        return <tr key={purchase._id}>
                                    <td>{activeLanguage?.activeLanguage == 'arabic'? purchase.product?.name.arabic : purchase.product?.name.english}</td>
                                    <td style={{display: 'flex', justifyContent: 'center', border: 'none'}}> <div style={{...styleColor, backgroundColor: purchase.product?.color}}></div> </td>
                                    <td>{activeLanguage?.activeLanguage == "arabic" ? purchase.product?.categorie.name.arabic : purchase.product?.categorie.name.english}</td>
                                    <td>{purchase.quantity}</td>
                                    <td>{purchase.totalPrice}</td>
                                </tr>
                    })    
                }
                    
                </tbody>
                <tfoot style={styleTFoot}>
                    <tr>
                        <td colSpan={4} style={{textAlign: 'start', padding: '0 var(--extra-large-padding)'}}>total price</td>
                        <td>{order?.totalPrice}</td>
                    </tr>
                </tfoot>
            </table>
            
        </div>
    )
}
export default TableDetails;