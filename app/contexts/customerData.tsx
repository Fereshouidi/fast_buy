import { createContext } from "react"

export interface CustomerDataParams {
    _id: string,
    userName: string,
    email: string,
    phone: number | undefined,
    dateOfBirth: Date | undefined,
    adress: string,
    interrestedAbout: string,
    password: string,
    retypePassword: string,
    saveAccount: boolean,
    verification: boolean,
    ShoppingCart: shoppingCart
}

export interface shoppingCart {
    _id: string,
    customer: string,
    products: string[],
    purchases: string[]
}



export const CustomerDataContext = createContext<CustomerDataParams | undefined>(undefined)