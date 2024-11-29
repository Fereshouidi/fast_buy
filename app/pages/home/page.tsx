"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect, createContext } from "react";
import HeaderForComputer from "../../components/header/headerForComputer/header";
import HeaderForPhone from "../../components/header/headerForPhones/header";
import LanguageSelector from "@/app/components/header/headerForComputer/components/languageSelector/languageSelector";

interface LanguageContextType {
    activeLanguage: string;
    setActiveLanguage: React.Dispatch<React.SetStateAction<string>>;
  }
  
  export const LanguageSelectorContext = createContext<LanguageContextType | undefined>(undefined);
  
const Home = () => {
  const router = useRouter();

  const [screenWidth, setScreenWidth] = useState(0); 
  const [activeLanguage, setActiveLanguage] = useState("english"); 

  // handle screen width
  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);

      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const goToAbout = () => {
    router.push("/pages/about");
  };

  return (
    <LanguageSelectorContext.Provider value={{activeLanguage, setActiveLanguage}}>
      {screenWidth > 700 ? <HeaderForComputer /> : <HeaderForPhone />}
      <div>home page</div>
      <button onClick={goToAbout}>Go to About</button>
    </LanguageSelectorContext.Provider>
  );
};

export default Home;
