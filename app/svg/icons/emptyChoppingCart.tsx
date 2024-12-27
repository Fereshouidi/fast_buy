import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { CSSProperties, useContext } from "react";
import Link from "next/link";
import { CompanyInformationContext } from "@/app/contexts/companyInformation";
import { BannerContext } from "@/app/contexts/bannerForEverything";
import { useRouter } from "next/navigation";
import LoadingIcon_theHolePage from "./loading/loadingHoleOfThePage";

const EmptyShoppingCart = () => {

    const companyInformation = useContext(CompanyInformationContext);
    const router = useRouter();

    const goToHomePage = () => {
        <LoadingIcon_theHolePage/>
        router.push('/')
    }

    const style: CSSProperties = {
        width: '100%',
        height: '70vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#555',
    };
    const iconStyle: CSSProperties = {
        width: '90%',
        height: '',
        fontSize: 'calc(var(--double-size) *3)',
        marginBottom: '1rem',
        color: '#aaa',
    };
    const styleLink: CSSProperties = {
        color: companyInformation?.primaryColor,
        textDecoration: 'underline',
        cursor: "pointer"
    };

    return (
        <div style={style}> 
            <FontAwesomeIcon icon={faCartArrowDown} style={iconStyle} aria-label="Empty shopping cart icon" />
            <p>
                Your shopping cart is empty. Go to the <span onClick={goToHomePage} style={styleLink}>market</span> to add items!
            </p>
        </div>
    );
};

export default EmptyShoppingCart;
