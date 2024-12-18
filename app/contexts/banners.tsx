import { createContext } from "react";

interface bannersParams{
    passwordsNotMatch: boolean,
    setPasswordsNotMatch: (value: boolean) => void,
    emailNotValide: boolean,
    setemailNotValide: (value: boolean) => void,
    verificatinEmailBanner: boolean,
    setVerificatinEmailBanner: (value: boolean) => void,
}

export const BannersContext = createContext<bannersParams | undefined>(undefined)