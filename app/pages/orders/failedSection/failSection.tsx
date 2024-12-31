'use client';

import { OrderParams } from "@/app/contexts/order";
import { CSSProperties, useContext, useEffect, useState } from "react";
import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";
import Item from "../item/item";

type params = {
    orders: OrderParams[] | undefined
    setOrders?: (value: OrderParams[]) => void
}
const FailSection = ({orders}: params) => {

    const [failedOrders, setFailedOrders ] = useState<OrderParams[] | undefined>(undefined)
    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage;

    useEffect(() => {
        if (orders){
            const ordersList = [];
            for (let index = 0 ; index < orders?.length ; index++) {
                if (orders[index].status == 'failed') {
                    ordersList.push(orders[index])
                }
            }
            setFailedOrders(ordersList)
        }
    }, [orders])

    

    const style: CSSProperties = {
        width: '100%',
        minHeight: '100vh',
        backgroundColor: 'var(--white)',
        //display: 'flex',
        margin: window.innerWidth > 800 ? 'var(--large-margin) 0' : '0',
        borderRadius: '20px',
        padding: 'var(--large-padding)'
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
    return (
        <div style={style}>
            <h4 style={styleH4}>{activeLanguage?.orderStatus.failedW + ' (' + (failedOrders?.length || 0) + ') :'}</h4>
            <div className="item" style={styleItemsContainer}>{
                failedOrders?.map((order) => {
                    return <Item key={order._id} order={order}/>
                })
            }</div>
        </div>
    )
}
export default FailSection;
