import { discountCodeParams } from "./discountCode"
import { productParams } from "./productSelectForShowing"

export interface purchaseParams {
    _id?: string | undefined
    buyer: string | undefined,
    product: productParams | undefined,
    shoppingCart: string | null,
    discount: string | null | undefined,
    quantity: number | undefined,
    totalPrice: number | undefined,
    discountCode?: discountCodeParams | string | null
}