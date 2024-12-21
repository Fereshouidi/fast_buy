'use client';
// import english from '@/app/languages/english.json';
import arabic from '@/app/languages/arabic.json';
import { shoppingCartParams } from '@/app/contexts/shoppingCart';
import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";
import { CSSProperties, useContext } from "react";
import Trash from './inputElement/trash';
import Quantity from './inputElement/quantity';
import { purchaseParams } from '@/app/contexts/purchaseData';

const CartContent = ({shoppingCart}: {shoppingCart: shoppingCartParams | undefined}) => {

    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage;

    const calcTotalPrice = (purchase: purchaseParams) => {
        if(purchase.discount){
            const totalPrice = purchase.quantity * purchase.product.discount.newPrice
            return totalPrice;
        }else {
            const totalPrice = purchase.quantity * purchase.product.price
            return totalPrice;
        }
    }

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
        backgroundColor: 'var(--white)',
        borderBottom: '0.2px solid var(--black-almost-transparnt)',
        padding: window.innerWidth > 800 ? 'var(--medium-padding) var(--medium-padding) 0 var(--medium-padding)' : 'var(--small-padding) var(--small-padding) 0 var(--small-padding)',
        borderRadius: '20px'

    }
    const styleUpperPart: CSSProperties = {
        width:'100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
    const styleIMGAndName: CSSProperties = {
        display: 'flex',
        alignItems: 'center'
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
        ...styleUpperPart,
        padding: window.innerWidth > 800 ? 'var(--medium-padding)' : 'var(--small-padding)',
        margin: window.innerWidth > 800 ? 'var(--medium-margin)' : 'var(--small-margin)' ,
        borderRadius: '20px'
    }
    const stylePrice: CSSProperties = {
       padding: window.innerWidth > 800 ? 'var(--medium-padding)' : 'var(--small-padding)',
       margin: window.innerWidth > 800 ? '0 var(--large-margin)' : 'var(--medium-margin)', 
       borderRadius: '20px'
    }
    return (
            <section className="products-section" style={style}>
                <h2 style={styleH2}>{activeLanguage?.shoppingCart} (<span>{shoppingCart.purchases.length}</span>)</h2>
                <div className="container" style={styleContainer}>{
                    shoppingCart.purchases.map((purchase, index) => {
                        return <div key={index} className='item' style={styleItem}>
                            <div className='upper-part' style={styleUpperPart}>
                                <div style={styleIMGAndName}>
                                    <img src={purchase.product.imagePrincipal} style={styleIMG} alt="" />
                                    <h4 style={styleName}>{activeLanguage == arabic ? purchase.product.name.arabic : purchase.product.name.english}</h4>
                                </div>
                                <span style={stylePrice}>{calcTotalPrice(purchase) +' '+ purchase.product.currencyType}</span>
                            </div>
                            <div className='bottom-part' style={styleBottomPart}>
                                <Trash shoppingCart={shoppingCart}/>
                                <Quantity shoppingCart={shoppingCart} purchase={purchase}/>
                            </div>
                        </div>
                    })
                }</div>
            </section>
    )
}
export default CartContent;