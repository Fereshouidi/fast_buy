'use client';

import { OrderParams } from "@/app/contexts/order";
import { CSSProperties, useContext, useEffect, useState } from "react";
import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";
import Item from "../item/item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";

type params = {
    orders: OrderParams[] | undefined
    setOrders?: (value: OrderParams[]) => void
}
const ProccessiongSection = ({orders}: params) => {

    const [proccessingOrders, setProccessingOrders ] = useState<OrderParams[] | undefined>(undefined)
    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage;

    useEffect(() => {
        if (orders){
            const ordersList = [];
            for (let index = 0 ; index < orders?.length ; index++) {
                if (orders[index].status != 'delivered' && orders[index].status != 'failed') {
                    ordersList.push(orders[index])
                }
            }
            setProccessingOrders(ordersList)
        }
    }, [orders])

    

    if (typeof window == 'undefined') {
        return;
    }
    
    const style: CSSProperties = {
        width: window.innerWidth > 800 ? '50%' : '100%',
        //minHeight: '100vh',
        height: 'calc(100vh - var(--header-height) *1.8 )',
        // backgroundColor: window?.innerWidth > 800 ? 'var(--white-semi-transparent)' : 'var(--almost-white)',
        margin: window.innerWidth > 800 ? 'var(--large-margin) 0' : '0',
        borderRadius: '20px',
        padding: 'var(--large-padding)',
        overflow: 'scroll',
        boxShadow: window.innerWidth > 800 ? '0 5px 15px var(--black-almost-transparnt)' : '0 0 0',

    }
    const styleH4: CSSProperties = {
        opacity: 0.7,
        color: 'var(--black)'
    }
    const styleItemsContainer: CSSProperties = {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        margin: 'var(--large-margin) 0',

    }
    const StyleEmptySuccessOrderDiv: CSSProperties = {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: 'auto',
        padding: '10vh',
        opacity: 0.7,
        color: 'var(--black)',    
    }
    const StyleEmptySuccessOrder: CSSProperties = {
        width: '40%',
        height: 'auto',
        margin: 'var(--large-margin)',
        opacity: 0.7,
        color: 'var(--black)',
    }
    return (
        <div style={style} className="scroll-without-bar">
            <h4 style={styleH4}>{activeLanguage?.proccessingW + ' (' + (proccessingOrders?.length || 0) + ') :'}</h4>
            {proccessingOrders && proccessingOrders.length > 0 ? 

                <div className="item" style={styleItemsContainer}>{
                    proccessingOrders?.map((order) => {
                        return <Item key={order._id} order={order}/>
                    })
                }</div>

                :  <div style={StyleEmptySuccessOrderDiv}> 
                        <FontAwesomeIcon icon={faBoxOpen} style={StyleEmptySuccessOrder}/> 
                        <p>{activeLanguage?.noProcessingOrderP}</p>
                    </div>
                }

        </div>
    )
}
export default ProccessiongSection;