'use client';

import { OrderParams } from "@/app/contexts/order";
import { CSSProperties, useContext, useEffect, useState } from "react";
import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";
import Item from "../item/item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faBoxOpen, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

type params = {
    orders: OrderParams[] | undefined
    setOrders?: (value: OrderParams[]) => void
}
const SuccessSection = ({orders}: params) => {

    const [successOrders, setSuccessOrders ] = useState<OrderParams[] | undefined>(undefined)
    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage;

    useEffect(() => {
        if (orders){
            const ordersList = [];
            for (let index = 0 ; index < orders?.length ; index++) {
                if (orders[index].status == 'delivered') {
                    ordersList.push(orders[index])
                }
            }
            setSuccessOrders(ordersList)
        }
    }, [orders])

    // useEffect(() => {
    // console.log(successOrders);
    
    // }, [successOrders])

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
        margin: window.innerWidth > 800 ? 'var(--large-margin) 0' : '',

    }
    const StyleEmptySuccessOrderDiv: CSSProperties = {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: 'auto',
        padding: '10vh',
        opacity: 0.7
    }
    const StyleEmptySuccessOrder: CSSProperties = {
        width: '40%',
       // backgroundColor: 'blue',
        height: 'auto',
        margin: 'var(--large-margin)'
    }
    return (
        <div style={style}>
            <h4 style={styleH4}>{activeLanguage?.orderStatus.deliveredW + ' (' + (successOrders?.length || 0) + ') :'}</h4>
            {successOrders && successOrders.length > 0 ? 

                <div className="item" style={styleItemsContainer}>{
                    successOrders?.map((order) => {
                        return <Item key={order._id} order={order}/>
                    })
                }</div>

                :  <div style={StyleEmptySuccessOrderDiv}> 
                        <FontAwesomeIcon icon={faBoxOpen} style={StyleEmptySuccessOrder}/> 
                        <p>{activeLanguage?.noSuccessOrderP}</p>
                    </div>
            }
            
        </div>
    )
}
export default SuccessSection;