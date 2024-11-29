"use client";
import { CSSProperties } from "react";
import Logo from "./components/logo/logo";
import Purchase from "./components/purchase/purchase";
import SearchBar from "./components/searchBar/searchBar";
import CategorieSelector from "./components/CategoriesSelector/CategoriesSelector";

const Header = () => {
  //const router = useRouter()


    return(
        <>
            <div style={headerStyle}>
                <Logo/>
                <SearchBar/>
                <CategorieSelector/>
                <Purchase/>
            </div>
        </>
    )
}
export default  Header;

const headerStyle :CSSProperties = {
    width: '100vw',
    height: 'var(--header-height)',
    backgroundColor: 'var(--white)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 5%',
    boxSizing: 'border-box'
}