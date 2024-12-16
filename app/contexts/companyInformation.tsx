
import { createContext } from "react";

export interface companyInformationsParams {
    name: nameParams,
    logo: string,
    primaryColor: string,
    biggestDiscount: number,
    offersDetails : string,
    entities: string[],
    originalProductsPercentage: number,
    servises: string[],
    backgroundOfRegisterPage: string
}

type nameParams = {
    arabic: string,
    english: string
}

export const CompanyInformationContext = createContext<companyInformationsParams | undefined>(undefined);