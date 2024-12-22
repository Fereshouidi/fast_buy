import { productParams } from "./productSelectForShowing"

export interface purchaseParams {
    _id?: string,
    buyer: string,
    product: productParams,
    discount: string | null,
    quantity: number
}