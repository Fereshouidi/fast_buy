'use client';
// import english from '@/app/languages/english.json';
import arabic from '@/app/languages/arabic.json';
import { shoppingCartParams } from '@/app/contexts/shoppingCart';
import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";
import { CSSProperties, useContext, useRef, useState } from "react";
import Trash from './inputElement/trash';
import Quantity from './inputElement/quantity';
import { purchaseParams } from '@/app/contexts/purchaseData';
import '@/app/pages/purchase/[customerId]/style.css'

const CartContent = ({shoppingCart}: {shoppingCart: shoppingCartParams | undefined}) => {

    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage;
    const [hoveredItemId, setHoveredItemId] = useState<string | undefined>(undefined);

    // const itemRef = useRef<HTMLDivElement>(null);


    const calcTotalPrice = (purchase: purchaseParams) => {
        if(purchase.discount){
            const totalPrice = purchase.quantity * purchase.product.discount.newPrice
            return totalPrice;
        }else {
            const totalPrice = purchase.quantity * purchase.product.price
            return totalPrice;
        }
    }

    // const handleStyle = () => {
    //     if(itemRef.current){
    //         itemRef.current.style.backgroundColor = 'red';
    //         alert('n')

    //     }
    // }

    if(!shoppingCart){
        return;
    }
    if(typeof window == 'undefined'){
        return;
    }
    const style: CSSProperties = {
        width: window.innerWidth > 800 ? '50%' : '100%',
        color: 'var(--black)'
    }
    const styleH2: CSSProperties = {
        color: 'var(--black)',
        margin: 'var(--large-margin)',
        fontSize: window.innerWidth > 800 ? 'var(--primary-size)' : 'var(--small-size)',
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
        height: 'calc(var(--double-height) * 1.5)',
        backgroundColor: 'var(--white)',
        borderBottom: '0.2px solid var(--black-almost-transparnt)',
        padding: window.innerWidth > 800 ? 'var(--medium-padding) var(--medium-padding) 0 var(--medium-padding)' : 'var(--small-padding) var(--small-padding) 0 var(--small-padding)',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    }
    const styleItemHover: CSSProperties = {
        ...styleItem,
        backgroundColor: 'var(--ashen-almost-transparent)',

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
        width: window.innerWidth > 800 ? 'calc(var(--primary-width) *1.5)' : 'var(--primary-width)',
        height: window.innerWidth > 800 ? 'calc(var(--primary-width) *1.5)' : 'var(--primary-width)',
        borderRadius: '10px'
    }
    const styleName: CSSProperties = {
        margin: window.innerWidth > 800 ? '0 var(--large-margin)' : '0 var(--medium-margin)',
        fontSize: window.innerWidth > 800 ? 'var(--primary-size)' : 'var(--small-size)'
    }
    const styleBottomPart: CSSProperties = {
        width: 'var(--large-width)',
        height: '100%',
        margin: 0,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: '20px'
    }
    const stylePrice: CSSProperties = {
       padding: window.innerWidth > 800 ? 'var(--medium-padding)' : 'var(--small-padding)',
       borderRadius: '20px',
       fontSize: window.innerWidth > 800 ? 'var(--primary-size)' : 'var(--small-size)'
    }
    return (
        <section className="products-section" style={style}>
            <h2 style={styleH2}>
                {activeLanguage?.shoppingCart} (<span>{shoppingCart.purchases.length}</span>)
            </h2>
            <div className="container" style={styleContainer}>
                {shoppingCart.purchases.map((purchase) => {
                    const isHovered = hoveredItemId === purchase._id;
                    return (
                        <div
                            key={purchase._id}
                            className="item-product"
                            style={isHovered ? styleItemHover : styleItem}
                            onMouseEnter={() => setHoveredItemId(purchase._id)}
                            onMouseLeave={() => setHoveredItemId(undefined)}
                        >
                            <div className="left-part" style={styleUpperPart}>
                                <div style={styleIMGAndName}>
                                    <img
                                        src={purchase.product.imagePrincipal}
                                        style={styleIMG}
                                        alt=""
                                    />
                                    <h4 style={styleName}>
                                        {activeLanguage == arabic
                                            ? purchase.product.name.arabic
                                            : purchase.product.name.english}
                                    </h4>
                                </div>
                                <Trash shoppingCart={shoppingCart} />
                            </div>
                            <div className="right-part" style={styleBottomPart}>
                                <span style={stylePrice}>
                                    {calcTotalPrice(purchase) +
                                        " " +
                                        purchase.product.currencyType}
                                </span>
                                <Quantity
                                    shoppingCart={shoppingCart}
                                    purchase={purchase}
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