'use client';

type productParams = {
    _id: string,
    name: nameParams,
    imagePrincipal: string,
    price: number,
    discount: discountParams,
    totalRating: number,
    currencyType: string

}

type nameParams = {
    english: string,
    arabic: string
}

type discountParams = {
    createdAt: Date,
    discountSticker: string,
    newPrice: number,
    oldPrice: number,
    percentage: number,
    startOfDiscount: Date, 
    endOfDiscount: Date
};

const PageForPhone = ({product}: {product: productParams | undefined}) => {

    return (
        <div>page for phone</div>
    )
}
export default PageForPhone;