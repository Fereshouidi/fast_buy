'use clint';
import { CSSProperties, useContext, useEffect, useState } from "react";
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
// import english from '@/app/languages/english.json';
// import arabic from '@/app/languages/arabic.json';
import './about.css';
import { getConpanyInformations, getCategoriesSection, getProductByBiggestDiscount } from "@/app/crud";
//import { CompanyInformationContext } from "@/app/contexts/companyInformation";

const About = () => {

  //const companyInformation = useContext(CompanyInformationContext);

    type conpanyInformationsParams = {
        name: nameParams,
        categories: categorieParams,
        primaryColor: string,
        biggestDiscount: number,
        offersDetails : string,
        entities: string[],
        originalProductsPercentage: number,
        servises: string[]
    }

    type categoriesSectionParams = {
        catgorie: categorieParams;
        products: productParams[];
    }[];

    type bigestDiscountParams = {
        catgorie: categorieParams;
        products: productParams[];
    };

    type categorieParams = {
        _id: string;
        name: nameParams;
        parentCategorie: string;
        childrenCategories: categorieParams[];
        childOpen: boolean;
        margin: number;
    };

    type productParams = {
        name: nameParams;
        imagePrincipal: string;
        price: number;
        discount: discountParams;
        totalRating: number;
        currencyType: string;
    };

    type nameParams = {
        english: string,
        arabic: string
    }

    type discountParams = {
        createdAt: Date;
        discountSticker: string;
        newPrice: number;
        oldPrice: number;
        percentage: number;
        startOfDiscount: Date;
        endOfDiscount: Date;
    };

    
    const languageContext = useContext(LanguageSelectorContext);
    const [conpanyInformations, setConpanyInformations] = useState<conpanyInformationsParams>();
    const [bestCategories, setBestCategories] = useState<categoriesSectionParams>();
    const [bigestDiscount, setBigestDiscount] = useState<bigestDiscountParams>();

    if(!languageContext){
        throw 'error languageContext';
    }


    useEffect(() => {
        const fetchData = async() => {
            const conpanyInformationsData = await getConpanyInformations();
            setConpanyInformations(conpanyInformationsData)
            const bestCategoriesData = await getCategoriesSection();
            setBestCategories(bestCategoriesData);
            const bigestDiscountData = await getProductByBiggestDiscount();
            setBigestDiscount(bigestDiscountData)
        }
        fetchData();
    }, [])

    const styleStrong: CSSProperties = {
      color: conpanyInformations?.primaryColor,
    }
    const styleH1: CSSProperties = {
      color: conpanyInformations?.primaryColor,
    }

         return (
            conpanyInformations && languageContext.activeLanguage === "english" ?
              <section id="about-section">
                <h1 style={styleH1}>{`${conpanyInformations.name.english}: The Leading E-Commerce Platform for Your Customers`}</h1>
                <p>
                  Welcome to <strong style={styleStrong}>{`${conpanyInformations.name.english}`}</strong>, your trusted partner for an exceptional online shopping experience tailored to your customers&apos; needs. We offer:
                </p>
          
                <div className="products">
                  <h2>A Wide Range of Products:</h2>
                  <ul>
                    {bestCategories?.map((categorie, index) => (
                      <li key={index}>
                        <strong style={styleStrong}>{`${categorie.catgorie.name.english}:`}</strong> such as
                        {categorie.products.slice(0, 3).map((product, index) => (
                          <span key={index}>{` ${product.name.english} `}</span>
                        ))}
                        .
                      </li>
                    ))}
                  </ul>
                </div>
          
                <div className="offers">
                  <h2>Exclusive Offers and Discounts:</h2>
                  <ul>
                    <li>
                      Enjoy discounts up to <strong  style={styleStrong}>{` ${conpanyInformations.biggestDiscount}% `}</strong>
                      on {bigestDiscount && bigestDiscount.products.length >= 0 ? ` ${bigestDiscount.products[0].name.english} ` : ''}
                    </li>
                    <li>
                      Exclusive offers such as <strong  style={styleStrong}>{` ${conpanyInformations.offersDetails} `}</strong>
                    </li>
                  </ul>
                </div>
          
                <div className="services">
                  <h2>Exceptional Services:</h2>
                  <ul>
                    {conpanyInformations.servises && conpanyInformations.servises.map((servise, index) => (
                      <li key={index}>{`${servise}.`}</li>
                    ))}
                  </ul>
                </div>
          
                <div className="guarantee">
                  <h2>Quality Guarantee:</h2>
                  <ul>
                    <li>
                      All our products are <strong  style={styleStrong}>{` ${conpanyInformations.originalProductsPercentage}% `}</strong>
                      authentic, with flexible return policies.
                    </li>
                  </ul>
                </div>
          
                <p>
                  Discover now the world of <strong  style={styleStrong}>{`${conpanyInformations.name.english}`}</strong> and be part of a shopping experience
                  that makes your life easier and more enjoyable. Don&apos;t miss the opportunity to join thousands of satisfied customers who trust us!
                </p>
              </section>
          
              : conpanyInformations && languageContext.activeLanguage === "arabic" ?
              <section id="about-section">
                <h1  style={styleH1}>{`${conpanyInformations.name.arabic}: المنصة الرائدة للتجارة الإلكترونية لعملائك`}</h1>
                <p>
                  مرحبًا بك في <strong  style={styleStrong}>{`${conpanyInformations.name.arabic}`}</strong>، شريكك الموثوق لتجربة تسوق إلكتروني استثنائية تناسب احتياجات عملائك. نحن نقدم:
                </p>
          
                <div className="products">
                  <h2>مجموعة واسعة من المنتجات:</h2>
                  <ul>
                    {bestCategories?.map((categorie, index) => (
                      <li key={index}>
                        <strong  style={styleStrong}>{`${categorie.catgorie.name.arabic}:`}</strong> مثل
                        {categorie.products.slice(0, 3).map((product, index) => (
                          <span key={index}>{` ${product.name.arabic} `}</span>
                        ))}
                        .
                      </li>
                    ))}
                  </ul>
                </div>
          
                <div className="offers">
                  <h2>عروض وخصومات حصرية:</h2>
                  <ul>
                    <li>
                      استمتع بخصومات تصل إلى <strong  style={styleStrong}>{`${conpanyInformations.biggestDiscount}% `}</strong>
                      على {bigestDiscount && bigestDiscount.products.length >= 0 ? ` ${bigestDiscount.products[0].name.arabic} ` : ''}
                    </li>
                    <li>
                      عروض حصرية مثل <strong  style={styleStrong}>{`${conpanyInformations.offersDetails}`}</strong>
                    </li>
                  </ul>
                </div>
          
                <div className="services">
                  <h2>خدمات استثنائية:</h2>
                  <ul>
                    {conpanyInformations.servises && conpanyInformations.servises.map((servise, index) => (
                      <li key={index}>{`${servise}.`}</li>
                    ))}
                  </ul>
                </div>
          
                <div className="guarantee">
                  <h2>ضمان الجودة:</h2>
                  <ul>
                    <li>
                      جميع منتجاتنا أصلية بنسبة <strong  style={styleStrong}>{` ${conpanyInformations.originalProductsPercentage}% `}</strong>
                      مع سياسات إرجاع مرنة.
                    </li>
                  </ul>
                </div>
          
                <p>
                  اكتشف الآن عالم <strong  style={styleStrong}>{`${conpanyInformations.name.arabic}`}</strong> وكن جزءًا من تجربة تسوق
                  تجعل حياتك أسهل وأكثر متعة. لا تفوت الفرصة للانضمام إلى آلاف العملاء الراضين الذين يثقون بنا!
                </p>
              </section>
          
              : ''
          )
          
          
}
export default About;