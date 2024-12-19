// import { createContext } from "react";


// export interface purchaseParams {
//     buyer: string,
//     product: string,
//     discount: string,
//     quantity: number
// }
export interface purchaseParams {
    buyer: string,
    product: string,
    discount: string | null,
    quantity: number
}