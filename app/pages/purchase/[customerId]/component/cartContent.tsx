'use client';
import { shoppingCartParams } from '@/app/contexts/shoppingCart';
import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";
import { CSSProperties, useContext, useState } from "react";
import Trash from './inputElement/trash';
import Quantity from './inputElement/quantity';
import '@/app/pages/purchase/[customerId]/style.css';
import { useRouter } from 'next/navigation';
import { productParams } from '@/app/contexts/productSelectForShowing';
import { CompanyInformationContext } from '@/app/contexts/companyInformation';
import EmptyShoppingCart from '@/app/svg/icons/emptyChoppingCart';
import { purchaseParams } from '@/app/contexts/purchaseData';

type params = {
    shoppingCart: shoppingCartParams | undefined
    setShoppingCart: (value: shoppingCartParams) => void;
    purchase?: purchaseParams | undefined
    totalPriceChange: 'byDiscount' | 'byDiscountPercent' | undefined, 
    setTotalPriceChange: (value: 'byDiscount' | 'byDiscountPercent' | undefined) => void
}
const CartContent = ({shoppingCart, setShoppingCart, totalPriceChange, setTotalPriceChange}: params) => {

    const router = useRouter();
    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage;
    const companyInformationContext = useContext(CompanyInformationContext);
    const [hoveredItemId, setHoveredItemId] = useState<string | undefined>(undefined);

    const goToProductsDetaiPage = (product: productParams | undefined) => {
        if(product){
            router.push('/pages/productDetails/'+ product._id)
        }
    }


    if(typeof window == 'undefined'){
        return;
    }
    const style: CSSProperties = {
        width: window.innerWidth > 800 ? '60%' : '100%',
        color: 'var(--black)',
        marginBottom: 'var(--extra-large-margin)',
        
    }
    const styleH2: CSSProperties = {
        color: 'var(--black)',
        margin: 'var(--large-margin)',
        fontSize: window.innerWidth > 1000 ? 'var(--primary-size)' : 'var(--small-size)',
        fontWeight: 600,
        opacity: 0.5
    }
    const styleContainer: CSSProperties = {
        width: '100%',
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
       flexDirection: 'column',
    }
    const styleItem: CSSProperties = {
        width:'90%',
        height: window.innerWidth > 1000 ? 'calc(var(--double-height) * 1.3)' : 'var(--double-height)',
        backgroundColor: 'var(--white)',
        borderBottom: '0.2px solid var(--black-almost-transparnt)',
        //padding: window.innerWidth > 1000 ? 'var(--medium-padding) var(--medium-padding) var(--medium-padding)' : 'var(--small-padding) var(--small-padding) 100px var(--small-padding)',
        padding: window.innerWidth > 1000 ? '0 var(--medium-padding)' : '0 var(--small-padding)',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    }
    const styleItemHover: CSSProperties = {
        ...styleItem,
        backgroundColor: 'var(--almost-white)',

    }
    const styleUpperPart: CSSProperties = {
        width:'100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'space-between',
        flexDirection: 'column',
        borderRadius: '20px'
    }
    const styleIMGAndName: CSSProperties = {
        display: 'flex',
        alignItems: 'center',
    }
    const styleIMG: CSSProperties = {
        width: window.innerWidth > 1000 ? 'calc(var(--primary-width) *1.5)' : 'var(--primary-width)',
        height: window.innerWidth > 1000 ? 'calc(var(--primary-width) *1.5)' : 'var(--primary-width)',
        borderRadius: '10px'
    }
    const styleName: CSSProperties = {
        margin: window.innerWidth > 1000 ? '0 var(--large-margin)' : '0 var(--medium-margin)',
        fontSize: window.innerWidth > 1000 ? 'var(--primary-size)' : 'var(--small-size)'
    }
    const styleBottomPart: CSSProperties = {
        width: 'var(--large-width)',
        height: '50%',
        margin: 0,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: '20px'
    }
    const stylePrice: CSSProperties = {
       padding: window.innerWidth > 1000 ? 'var(--medium-padding)' : 'var(--small-padding)',
       borderRadius: '20px',
       fontSize: window.innerWidth > 1000 ? 'var(--primary-size)' : 'var(--small-size)'
    }
    
    return (
        <section className="products-section" style={style}>
            <h2 style={styleH2}>
                {activeLanguage?.shoppingCart} (<span>{shoppingCart?.purchases?.length || 0}</span>)
            </h2>
            <div className="container" style={styleContainer}>
                {!shoppingCart?.purchases?.length ? <EmptyShoppingCart/> : 
                shoppingCart.purchases?.map((purchase) => {
                    const isHovered = hoveredItemId === purchase._id;
                    return (
                        <div
                            key={purchase._id}
                            className="item-product"
                            style={isHovered ? styleItemHover : styleItem}
                            onMouseEnter={() => setHoveredItemId(purchase._id)}
                            onMouseLeave={() => setHoveredItemId(undefined)}
                            onClick={() => goToProductsDetaiPage(purchase.product)}
                        >
                            <div className="left-part" style={styleUpperPart}>
                                <div style={styleIMGAndName}>
                                    <img
                                        src={purchase.product?.imagePrincipal}
                                        style={styleIMG}
                                        alt=""
                                    />
                                    <h4 style={styleName}>
                                        {activeLanguage?.activeLanguage ==  'arabic'
                                            ? purchase.product?.name.arabic
                                            : purchase.product?.name.english}
                                    </h4>
                                </div>
                                <Trash
                                    shoppingCart={shoppingCart}
                                    setShoppingCart={setShoppingCart}
                                    purchase={purchase}
                                />
                            </div>
                            <div className="right-part" style={styleBottomPart}>
                                <span style={stylePrice}>
                                    {purchase.totalPrice +
                                        " " +
                                        companyInformationContext?.currencyType
                                    }
                                </span>
                                <Quantity
                                    shoppingCart={shoppingCart}
                                    setShoppingCart={setShoppingCart}
                                    purchase={purchase}
                                    totalPriceChange= {totalPriceChange}
                                    setTotalPriceChange={setTotalPriceChange}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
export default CartContent;