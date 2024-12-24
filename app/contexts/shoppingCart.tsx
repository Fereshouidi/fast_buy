import { productParams } from "./productSelectForShowing";
import { purchaseParams } from "./purchaseData";

export interface shoppingCartParams {
    purchases: purchaseParams[] | undefined;
    customer?: string | undefined;
    products?: productParams[] | undefined;
    status?: string | null | undefined;
    paymentMethod?: 'paypal' | 'masterCart' | 'cash' | undefined;
    totalPrice?: number,
    shippingCost?: number,
}
