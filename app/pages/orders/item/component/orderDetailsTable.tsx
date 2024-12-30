'use client';

import { CSSProperties, useContext } from "react";
import '@/app/pages/orders/item/component/style.css'
import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";
import { OrderParams } from "@/app/contexts/order";

type parmas = {
    order: OrderParams | undefined
    style?: CSSProperties
}
const OrderDetailsTable = ({order}: parmas) => {

    // const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage;

    const timeFormat = (date: Date) => {
        const date_ = new Date(date);

        const year = date_.getFullYear();
        const month = date_.getMonth();
        const day = date_.getDay();
        const hour = date_.getHours();
        const munite = date_.getMinutes();


        return `${year}/${month}/${day}  ${hour}:${munite}`
    }
    

    const style: CSSProperties = {
        margin: 'var(--large-margin) 0',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column"
    }
    const styleTable: CSSProperties = {
        width: '90%',
        borderCollapse: 'collapse',
        padding: 0
    }
    return (
        <div style={style}>

            <table style={styleTable}>
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Adress</th>
                        <th>Payment Method</th>
                        <th>Order date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{typeof order?.customer != 'string' ? order?.customer?.userName : ''}</td>
                        <td>{typeof order?.customer != 'string' ? order?.customer?.adress : ''}</td>
                        <td>{typeof order?.customer != 'string' ? order?.paymentMethod : ''}</td>
                        <td>{order?.createdAt? timeFormat(order.createdAt) : undefined}</td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    )
}
export default OrderDetailsTable;