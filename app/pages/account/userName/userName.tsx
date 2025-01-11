'use client';

import { CustomerDataParams } from "@/app/contexts/customerData";
import { CSSProperties, useContext } from "react";
import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";


type params = {
    customer: CustomerDataParams | undefined
    setCustomer: (value: CustomerDataParams) => void
}

const UserName = ({customer, setCustomer}: params) => {    

    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage;

    const handleUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (customer) {
            setCustomer({
                ...customer,
                userName: event.target.value
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
    const styleH3: CSSProperties = {
        width: '100%',
        padding: 'var(--large-padding)',
        borderBottom: '0.02px solid var(--ashen-semi-transparent)'
    }
    const styleContainer: CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 'var(--large-padding)',

    }
    const styleP: CSSProperties = {
        fontSize: 'var(--small-size)',
        padding: 'var(--medium-padding)',

    }
    const styleInput: CSSProperties = {
        padding: 'var(--medium-padding)',
        outline: 'none',
        border: 'none',
        borderBottom: '0.02px solid var(--ashen-semi-transparent)',
        minWidth: '80%',
        borderRadius: ' 0 0 10px 0',
        opacity: 0.9
    }
    return (
        <div className="item">

            <h4 style={styleH3}>{activeLanguage?.userNameW}</h4>

            <div style={styleContainer}>
                <p style={styleP}>{activeLanguage?.updateUserNameP +' : '}</p>
                <input type="text"  
                    defaultValue={customer?.userName} 
                    style={styleInput} 
                    placeholder={activeLanguage?.userNameW+ ' ...'}
                    onChange={(e) => handleUserName(e)}
                />
            </div>

        </div>
    )
}
export default UserName;