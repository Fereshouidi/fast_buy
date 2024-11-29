"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import HeaderForComputer from "../../components/header/headerForComputer/header";
import HeaderForPhone from "../../components/header/headerForPhones/header";
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import { SideBarContext } from "@/app/contexts/SideBarContext";
import SideBar from "@/app/components/sideBar/sideBarForComputers/sidebar";


const Home = () => {
  const router = useRouter();

  const [screenWidth, setScreenWidth] = useState(0); 
  const [activeLanguage, setActiveLanguage] = useState("english"); 
  const [sideBarExist, setSideBarExist] = useState(false); 

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
        <SideBarContext.Provider value={{sideBarExist, setSideBarExist}}>
            {screenWidth > 700 ? <HeaderForComputer /> : <HeaderForPhone />}
            <SideBar/>
            <div>home page</div>
            <button onClick={goToAbout}>Go to About</button>
        </SideBarContext.Provider>
    </LanguageSelectorContext.Provider>
  );
};

export default Home;
