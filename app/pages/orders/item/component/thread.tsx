'use client';

import { OrderParams } from "@/app/contexts/order";
import { CSSProperties, useContext } from "react";
import { CompanyInformationContext } from "@/app/contexts/companyInformation";
import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";

type parmas = {
    order: OrderParams | undefined
    style?: CSSProperties
}
const Thread = ({order}: parmas) => {

    const primaryColor = useContext(CompanyInformationContext)?.primaryColor;
    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage;
    

    const style: CSSProperties = {
        margin: 'var(--medium-margin) 0',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
    const styleH4: CSSProperties = {
        padding: 'var(--small-padding) var(--large-padding)',
        width: '100%',
        fontSize: 'var(--small-size)',
        opacity: 0.7,
    }
    const styleThread: CSSProperties = {
        width: '90%',
        height: '2px',
        backgroundColor: 'var(--ashen)',
        opacity: 0.7,
        display: 'flex',
        alignItems: 'center',
        margin: 'var(--medium-margin) 0',

    }
    const styleStatus: CSSProperties = {
        width: '90%',
        display: 'flex',
        fontSize: 'var(--small-size)',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'var(--ashen)',
    }
    const styleCurentPoint: CSSProperties = {
        width: '10px',
        height: '10px',
        backgroundColor: 'var(--ashen)',
        borderRadius: '50px',
    }
    const fromOrderedToProcessing: CSSProperties = {
        width: '25%',
        height: '100%',
        backgroundColor: order?.status == 'processing'? primaryColor : '',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
    const fromProcessingToPackeget: CSSProperties = {
        width: '25%',
        height: '100%',
        backgroundColor: order?.status == 'packaged' ? primaryColor : 'var(--ashen)',
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center'
    }
    const frompackagedToShipped: CSSProperties = {
        width: '25%',
        height: '100%',
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center'
    }
    const fromShippedToDelivered: CSSProperties = {
        width: '25%',
        height: '100%',
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center'
    }
    return (
        <div style={style}>
            <h4 style={styleH4}>{activeLanguage?.deliveryStagesW + ' : '}</h4>

            <div style={styleThread}>

                <div id="fromOrderedToProcessing" style={{...fromOrderedToProcessing, backgroundColor: order?.status == 'processing' || order?.status == 'packaged' || order?.status == 'shipped' || order?.status == 'delivered' || order?.status == 'failed'   ? primaryColor : 'var(--ashen)'}}>
                    <div style={{...styleCurentPoint, backgroundColor: order?.status == 'processing' || order?.status == 'packaged' || order?.status == 'shipped' || order?.status == 'delivered' || order?.status == 'failed'   ? primaryColor : 'var(--ashen)'}}></div>
                    <div style={{...styleCurentPoint, backgroundColor: order?.status == 'processing' || order?.status == 'packaged' || order?.status == 'shipped' || order?.status == 'delivered' || order?.status == 'failed'   ? primaryColor : 'var(--ashen)'}}></div>
                </div>

                <div id="fromProcessingToPackeget" style={{...fromProcessingToPackeget, backgroundColor: order?.status == 'packaged' || order?.status == 'shipped' || order?.status == 'delivered' || order?.status == 'failed'  ? primaryColor : 'var(--ashen)',}}>
                    <div style={{...styleCurentPoint, backgroundColor: order?.status == 'packaged' || order?.status == 'shipped' || order?.status == 'delivered' || order?.status == 'failed'   ? primaryColor : 'var(--ashen)'}}></div>
                </div>

                <div id="frompackagedToShipped" style={{...frompackagedToShipped, backgroundColor: order?.status == 'shipped' || order?.status == 'delivered' || order?.status == 'failed'  ? primaryColor : 'var(--ashen)'}}>
                    <div style={{...styleCurentPoint, backgroundColor: order?.status == 'shipped' || order?.status == 'delivered' || order?.status == 'failed'  ? primaryColor : 'var(--ashen)'}}></div>
                </div>

                <div id="finalStep" style={{...fromShippedToDelivered, backgroundColor: order?.status == 'delivered' ? 'green' : order?.status == 'failed' ? 'red' :  'var(--ashen)'}}>
                    <div style={{...styleCurentPoint, backgroundColor: order?.status == 'delivered' ? 'green' : order?.status == 'failed' ? 'red' :  'var(--ashen)'}}></div>
                </div>

               

            </div>
            
            <div style={styleStatus}>

                <span>{activeLanguage?.orderStatus.orderedW}</span>
                <span>{activeLanguage?.orderStatus.processingW}</span>
                <span>{activeLanguage?.orderStatus.packagedW}</span>
                <span>{activeLanguage?.orderStatus.shippedW}</span>
                <span>{ order?.status == 'failed' ? activeLanguage?.orderStatus.failedW : activeLanguage?.orderStatus.deliveredW}</span>

            </div>

        </div>
    )
}
export default Thread;