"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import HeaderForComputer from "../../components/header/headerForComputer/header";
import HeaderForPhone from "../../components/header/headerForPhones/header";

const Home = () => {
  const router = useRouter();

  const [screenWidth, setScreenWidth] = useState(0); 

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
    <>
      {screenWidth > 700 ? <HeaderForComputer /> : <HeaderForPhone />}
      <div>home page</div>
      <button onClick={goToAbout}>Go to About</button>
    </>
  );
};

export default Home;
