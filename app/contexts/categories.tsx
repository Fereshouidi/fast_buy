import { discountCodeParams } from "./discountCode";


export type CategorieParams = {
    name: LanguageParams,
    discountCode?: discountCodeParams | undefined,

};

type LanguageParams = {
    english: string,
    arabic: string
}