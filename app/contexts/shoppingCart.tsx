import { productParams } from "./productSelectForShowing";
import { purchaseParams } from "./purchaseData";

export interface shoppingCartParams {
    customer: string,
    products: productParams[],
    purchases: purchaseParams[],
    status: string | null,
    paymentMethod: string
}
