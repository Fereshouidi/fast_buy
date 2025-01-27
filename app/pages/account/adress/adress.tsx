'use client';

import { CustomerDataParams } from "@/app/contexts/customerData";
import { CSSProperties, useContext } from "react";
import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";

type params = {
    customer: CustomerDataParams | undefined;
    setCustomer: (value: CustomerDataParams) => void

}

const Adress = ({customer, setCustomer}: params) => {

    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage;

    const handleAdress = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (customer) {
            setCustomer({
                ...customer,
                adress: event.target.value
            })
        }         
    }

    // const style: CSSProperties = {
    //     flex: '1 1 30%',
    //     backgroundColor: 'var(--white)',
    //     borderRadius: '20px',
    //     border: '0.02px solid var(--ashen-semi-transparent)',
    //     fontWeight: '100',
    //     opacity: 0.7
    // }

    const styleContainer: CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: window.innerWidth > 800 ? 'var(--large-padding)' : 'var(--medium-padding)',

    }
    const styleP: CSSProperties = {
        fontSize: 'var(--small-size)',
        padding: window.innerWidth > 800 ? 'var(--medium-padding)' : 'var(--medium-padding)',
        opacity: 1
    }
    const styleInput: CSSProperties = {
        padding: window.innerWidth > 800 ? 'var(--medium-padding)' : 'var(--small-padding)',
        outline: 'none',
        border: 'none',
        borderBottom: '0.02px solid var(--ashen-semi-transparent)',
        minWidth: '80%',
        borderRadius: ' 0 0 10px 0',
        opacity: 0.9
    }

    return (
        <div className="item">

            <h4>{activeLanguage?.fullAdressW}</h4>

            <div style={styleContainer}>
                <p style={styleP}>{activeLanguage?.updateAdressP +' : '}</p>
                <input type="text" 
                    defaultValue={customer?.adress} 
                    style={styleInput}
                    placeholder={activeLanguage?.fullAdressW +' ...'}
                    onChange={(e) => handleAdress(e)}
                    maxLength={100}
                />
            </div>

        </div>
    )
}
export default Adress;