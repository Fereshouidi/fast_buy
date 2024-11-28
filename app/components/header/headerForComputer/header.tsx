"use client";
//import { useRouter } from "next/navigation";
import Logo from "./components/logo/logo";
import Purchase from "./components/purchase/purchase";
import SearchBar from "./components/searchBar/searchBar";

const Header = () => {
  //const router = useRouter()


    return(
        <>
            <div style={headerStyle}>
                <Logo/>
                <SearchBar/>
                <Purchase/>
            </div>
        </>
    )
}
export default  Header;

const headerStyle = {
    width: '100%',
    height: 'var(--header-height)',
    backgroundColor: 'var(--white)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}