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
        height: '100%',
        // backgroundColor: 'var(--white)',
        margin: '0',
        borderRadius: '20px',
        padding: '0 var(--large-padding)',
        overflow: 'scroll',
       // boxShadow: '0 5px 15px var(--black-almost-transparnt)',

    }
    const styleH4: CSSProperties = {
        opacity: 0.7,
        color: 'var(--black)',
        paddingTop: 'var(--medium-padding)'
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
        color: 'var(--black)',
        opacity: '0.7'
    }
    return (
        <div style={style} className="scroll-without-bar">
            <h4 style={styleH4}>{activeLanguage?.orderStatus.failedW + ' (' + (failedOrders?.length || 0) + ') :'}</h4>
            {failedOrders && failedOrders.length > 0 ? 

                <div className="item" style={styleItemsContainer}>{
                    failedOrders?.map((order) => {
                        return <Item key={order._id} order={order}/>
                    })
                }</div>

                :  <div style={StyleEmptySuccessOrderDiv}> 
                        <FontAwesomeIcon icon={faBoxOpen} style={StyleEmptySuccessOrder}/> 
                        <p>{activeLanguage?.noFailOrderP}</p>
                    </div>
            }
        </div>
    )
}
export default FailSection;
