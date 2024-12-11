
import { createContext } from "react";

interface companyInformationsParams {
    name: nameParams,
    logo: string,
    primaryColor: string,
    biggestDiscount: number,
    offersDetails : string,
    entities: string[],
    originalProductsPercentage: number,
    servises: string[]
}

type nameParams = {
    arabic: string,
    english: string
}

export const CompanyInformationContext = createContext<companyInformationsParams | undefined>(undefined);