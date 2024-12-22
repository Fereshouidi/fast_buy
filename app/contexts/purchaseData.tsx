import { productParams } from "./productSelectForShowing"

export interface purchaseParams {
    _id?: string | undefined
    buyer: string | undefined,
    product: productParams | undefined,
    discount: string | null | undefined,
    quantity: number | undefined
}