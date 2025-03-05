
import { createContext } from "react";

export interface companyInformationsParams {
    name?: nameParams,
    logo?: string,
    primaryColor?: string,
    biggestDiscount?: number,
    entities?: nameParams,
    originalProductsPercentage?: number,
    servises?: nameParams,
    qualityAssurance?: nameParams,
    offersDetails? : nameParams,    
    backgroundOfRegisterPage?: string,
    backgroundsPages: {
        homePage: string,
        registerPage: string
        accountPage: string
        ordersPage: string
        shoppingCartPage: string
    },
    registerRequiredData?: registerRequiredDataParams,
    email?: string,
    password?: string,
    activateAccountWhileSignin?: boolean,
    companyInformations?: string,
    currencyType?: string
    shippingCost: string
    socialMediaLinks?: socialMediaParams

}

type nameParams = {
    arabic: string,
    english: string
}

type registerRequiredDataParams = {
    dateOfBearth: {
        type: boolean,
    },
    phoneNumber: {
        type: boolean,
    },
    adress: {
        type: boolean,
    },
    interrestedAbout: {
        type: boolean,
    }
}

export type socialMediaParams = {
    facebook?: string
    instagram?: string
    messanger?: string
    whatsApp?: string
    youtube?: string
    x?: string
}

export const CompanyInformationContext = createContext<companyInformationsParams | undefined>(undefined);