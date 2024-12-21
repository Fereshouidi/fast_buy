import { productParams } from "./productSelectForShowing"

export interface purchaseParams {
    buyer: string,
    product: productParams,
    discount: string | null,
    quantity: number
}