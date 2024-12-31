'use client';
import { CSSProperties, useContext, useEffect, useState } from "react";
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import { SideBarContext } from "@/app/contexts/SideBarContext";
import CategorieIcon from "@/app/svg/icons/categorie";
import { getAllCategorie, getCategoriesByParent } from "@/app/crud";
import '../CategoriesSelector/categorieSelector.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { CompanyInformationContext } from "@/app/contexts/companyInformation";

const CategorieSelector = () => {

    type categorieParams = {
        _id: string,
        name: nameParams,
        parentCategorie: string,
        childrenCategories: categorieParams[],
        childOpen: boolean,
        margin: number
    }

    type nameParams = {
        english: string,
        arabic: string
    }

    const [isHover, setIsHover] = useState<boolean>(false)

    const companyInformation = useContext(CompanyInformationContext)

    const languageSelectorContext = useContext(LanguageSelectorContext);
    const [allCategories, setAllCategories] = useState<categorieParams[]>([]);
    const [categorieClicked, setCategorieClicked] = useState<boolean>(false);

    
    const sideBarContext = useContext(SideBarContext);
    if (!sideBarContext) {
        throw new Error("SideBarContext must be used within a SideBarContext.Provider");
    }
    const { sideBarExist } = sideBarContext;
    if(!languageSelectorContext){
        throw 'context error !'
    }

    if(!sideBarContext){
        throw 'context error !'
    }
    if(!allCategories){
        throw '  !'
    }
    
    useEffect(() => {
        const fetchData = async() => {
            const data = await getAllCategorie();
            await data.forEach((categorie: categorieParams) => {
                categorie.margin = categorie.margin + 30;
            });
            setAllCategories(data)
        }
        fetchData()
    }, [])

    const handleCategorieSelectorClicked = (categorie: categorieParams) => {
        if(!categorie.parentCategorie){
            setCategorieClicked((prev) => !prev)
        }
    }

const getAllChildrenIds = (parent: categorieParams, categories: categorieParams[]): string[] => {
    const children = categories.filter((item) => item.parentCategorie === parent._id);
    let allIds = children.map((child) => child._id);

    children.forEach((child) => {
        allIds = [...allIds, ...getAllChildrenIds(child, categories)];
    });

    return allIds
};

    
    const handleClick = async (categorie: categorieParams) => {
    if (categorie.childrenCategories.length > 0) {
        if (!categorie.childOpen) {
            const otherCategories = await getCategoriesByParent(categorie._id);
            otherCategories.forEach((categorieChild: categorieParams) => {
                categorieChild.margin = categorie.margin + 10; //alert()
            });
            setAllCategories((prev) => {
                const targetIndex = prev.findIndex((item) => item._id === categorie._id);
                if (targetIndex !== -1) {
                    return [
                        ...prev.slice(0, targetIndex + 1),
                        ...otherCategories,
                        ...prev.slice(targetIndex + 1),
                    ];
                }
                return [...prev, ...otherCategories];
            });
            categorie.childOpen = true;
        } else {
                setAllCategories((prev) => {
                    const removeIds = getAllChildrenIds(categorie, prev);
                    return prev.filter((item) => !removeIds.includes(item._id));
                });
            
            
            categorie.childOpen = false;
        }
    }
    handleCategorieSelectorClicked(categorie)
};

const style: CSSProperties = {
    display: sideBarExist? 'flex': 'none',
    height: 'auto',
    minHeight: 'var(--primary-height)',
    padding: 0,
}

const styleDiv: CSSProperties = {
    minHeight: 'var(--primary-height)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    zIndex: 999,
    width: '100%',
}

const styleChildren: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    borderBottom: 'var(--slim-border)',
    height: 'var(--primary-height)',
    zIndex: 999,
    padding: '0 5px',
    width: '100%',
    position: 'relative',
}
const styleDownIcon: CSSProperties = {
    backgroundColor: 'transparent',
    color: 'var(--black)',
    width: 'var(--short-width)',
    height: 'var(--short-width)',
    padding: '10px',
    right: languageSelectorContext.activeLanguage == "arabic" ? '' : '5px',
    left: languageSelectorContext.activeLanguage == "arabic" ? '5px' : "",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    fontSize: 'var(--small-size)',
    zIndex: 0,
    cursor: 'pointer'
}

const styleHover: CSSProperties = {
    ...style,
    backgroundColor: companyInformation?.primaryColor
}
const styleDivHover: CSSProperties = {
    ...styleDiv,
    backgroundColor: companyInformation?.primaryColor
}
const styleChildrenHover: CSSProperties = {
    ...styleChildren,
    backgroundColor: companyInformation?.primaryColor
}


    return(
        <li style={isHover? styleHover : style}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <CategorieIcon/>
            <div style={isHover? styleDivHover : styleDiv}>{
                allCategories.map((categorie, index) => {
                    return (
                    <ul key={index} style={isHover? styleChildrenHover : styleChildren}  >
                        <ul style={languageSelectorContext.activeLanguage == 'arabic' ? {paddingRight: `${categorie.margin}px` } : {paddingLeft: `${categorie.margin}px` }} className={categorie.parentCategorie? "child" : categorieClicked? "parent-clicked": "parent"} key={categorie._id} >{languageSelectorContext.activeLanguage == 'arabic' ? categorie.name.arabic : languageSelectorContext.activeLanguage == 'english' ? categorie.name.english : categorie.name.english}</ul>
                        {categorie.childrenCategories.length > 0 ? <FontAwesomeIcon onClick={() => handleClick(categorie)} style={styleDownIcon} icon={faChevronDown } /> : null}
                    </ul>
                )
                })
            }</div>
            

        </li>
    )
}
export default CategorieSelector;