import { createContext, Dispatch, SetStateAction } from "react";

interface Params {
    accountSaved: boolean,
    setAccountSaved:  (value: boolean) => void
}

export const AccountSavedContext = createContext<Params | undefined>(undefined);