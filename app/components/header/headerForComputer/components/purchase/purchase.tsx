'use client';
import ShoppingCartIcon from "@/app/svg/icons/shoppingCart";
import Link from "next/link";
import { CustomerDataContext } from "@/app/contexts/customerData";
import { useContext } from "react";


const Purchase = () => {

    const customerId = useContext(CustomerDataContext)?._id

    return (
        <div>
            <Link href={`/pages/purchase/${customerId}`}>
                <ShoppingCartIcon/>
            </Link> 
        </div>
    )
}
export default Purchase;

// function uceContext(CustomerDataContext: Context<CustomerDataParams | undefined>) {
//     throw new Error("Function not implemented.");
// }
