import { createContext } from "react"

export interface handleformDataParams {
    formData: formDataParams | undefined,
    setFormData: (data: formDataParams | ((prev: formDataParams) => formDataParams)) => void;
}

export interface formDataParams {
    userName?: string,
    email?: string,
    phoneNumber?: number | undefined,
    dateOfBearth?: Date | undefined,
    adress?: string,
    interrestedAbout?: string,
    password?: string,
    retypePassword?: string,
    saveAccount?: boolean
}

export const formDataContext = createContext<formDataParams | undefined>(undefined)