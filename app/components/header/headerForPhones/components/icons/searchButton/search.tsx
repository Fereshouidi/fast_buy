'use client';
import { LoadingIconContext } from "@/app/contexts/loadingIcon";
import SearchIcon_ from "@/app/svg/icons/search_";
import { useRouter } from "next/navigation";
import { CSSProperties, useContext } from "react";

const Search = () => {

    const router = useRouter()
    const setLoadingIcon = useContext(LoadingIconContext)?.setExist;

    if (!setLoadingIcon) {
        throw 'error setLoadingIcon'
    }
    const goToSearchPage = () => {
        setLoadingIcon(true);
        router.push('/pages/search/_' );
        
    }

    const style: CSSProperties = {
        width: 'var(--primary-width)',
        height: 'var(--primary-height)',
        borderRadius: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: 'var(--black)',
        padding: '10px'
    }
    
    return(
        <div style={style} onClick={goToSearchPage}>
            <SearchIcon_ />
        </div>
    )
}
export default Search;