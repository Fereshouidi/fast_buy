import { createContext } from "react";

interface Params {
    accountSaved: boolean,
    setAccountSaved: Function
}

export const AccountSavedContext = createContext<Params | undefined>(undefined);