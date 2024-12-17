import { createContext } from "react";

interface bannersParams{
    passwordsNotMatch: boolean,
    setPasswordsNotMatch: (value: boolean) => void
}

export const BannersContext = createContext<bannersParams | undefined>(undefined)