'use client';

import { OrderParams } from "@/app/contexts/order";
import { productParams } from "@/app/contexts/productSelectForShowing";
import { CSSProperties, useContext, useEffect, useState } from "react";
import ImagesDiv from "./component/images";
import IdDiv from "./component/id";
import Status from "./component/status";
import Thread from "./component/thread";
import TableDetails from "./component/table";
import OrderDetailsTable from "./component/orderDetailsTable";
import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";

const Item = ({order}: {order: OrderParams}) => {

    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage;
    const [mostProductExpensive, setMostProductExpensive] = useState<productParams[] | undefined>(undefined);
    const [detailsDisplayed, setDetailsDisplayed] = useState<boolean>(false);

    useEffect(() => {
        if (order.products) {   
            const most3ProductExpensive = [...order.products];
            most3ProductExpensive.sort((a, b) => b.price - a.price)
            .slice(0, 3)
            setMostProductExpensive(most3ProductExpensive);  
        }
    }, [])

    // const handleDate = (date: Date) => {
    //     const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    //     const date_ = new Date(date)
    //     const year = date_.getFullYear();
    //     const month = date_.getMonth() + 1;
    //     const day = date_.getDate(); 
    //     const houre = date_.getHours()

    //     console.log(`السنة: ${year}, الشهر: ${month}, اليوم: ${day} , houre: ${houre}`);
    //     return `${months[month-1]}/${day}/${year}`
    
    // }

    const style: CSSProperties = {
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
        maxHeight: detailsDisplayed? '1000px' : '100px',
        border: `0.02px solid var(--black-almost-transparnt)`,
        borderRadius: '20px',
        margin: 'var(--medium-margin) 0',
        padding: 'var(--medium-padding)',
        backgroundColor: 'var(--almost-white)',
        cursor: "pointer",
        transition: 'max-height 0.5s ease',
        color: "var(--black)"
    }
    const styleCloseItem: CSSProperties = {
        width: '100%',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: "pointer"
    }
    const style_imagesèand_id_Div: CSSProperties = {
        display: 'flex',
        alignItems: 'center'
    }
    const styleImagesDiv: CSSProperties = {
        width: 'auto',
        marginRight: activeLanguage?.activeLanguage == 'arabic'? '0' : 'calc(var(--medium-margin) *1.2',
        marginLeft: activeLanguage?.activeLanguage == 'arabic'? 'calc(var(--medium-margin) *1.2' : '0',
        height: 'var(--primary-height)',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
    //    backgroundColor: 'red',

    }
    const styleIdDiv: CSSProperties = {
        display: 'flex',
        fontSize: 'var(--small-size)',
   //     backgroundColor: 'red',

    }
    const styleStatus: CSSProperties = {
        display: 'flex',
        fontSize: 'var(--small-size)',
        margin: '0 var(--small-margin)'
    }
    const styleNote: CSSProperties = {
        display: 'flex',
        fontSize: 'var(--small-size)',
        margin: 'var(--large-margin)',
        opacity: 0.7
    }

    
    return (

        <div style={style} onClick={() => setDetailsDisplayed(!detailsDisplayed)}>

            <div style={styleCloseItem}>

                <div style={style_imagesèand_id_Div}>

                    <ImagesDiv most3ProductExpensive={mostProductExpensive} style={styleImagesDiv}/>

                    <IdDiv order={order} style={styleIdDiv}/>
                    
                </div>

                <Status order={order} style={styleStatus}/>

            </div>

            <div style={detailsDisplayed ? {opacity: 1, maxHeight: '1000px', padding: 'auto', transition: '0.5s ease'} : {opacity: 0, maxHeight: 0, padding: 0, transition: '0.5s ease'}}>

                <Thread order={order}/>

                {order.note &&  <p style={styleNote}> <strong style={{margin: '0 var(--small-margin)'}}>{activeLanguage?.noteW + ' : '}</strong> {order.note} </p>}
                <TableDetails order={order}/>
                <OrderDetailsTable order={order}/>
            </div>
            
            

        </div>

    )
}
export default Item;