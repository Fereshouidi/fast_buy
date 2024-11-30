"use client";


const Home = () => {
//   const router = useRouter();

//   const [screenWidth, setScreenWidth] = useState(null); // Use null as initial state to prevent SSR mismatch
//   const [theme, setTheme] = useState(() => {
//     if (typeof window !== "undefined") {
//       return localStorage.getItem("activeTheme") || "light";
//     }
//     return "light";
//   });
//   const [activeLanguage, setActiveLanguage] = useState("english");
//   const [sideBarExist, setSideBarExist] = useState(false);

//   // Handle screen width
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       setScreenWidth(window.innerWidth);

//       const handleResize = () => {
//         setScreenWidth(window.innerWidth);
//       };

//       window.addEventListener("resize", handleResize);

//       return () => {
//         window.removeEventListener("resize", handleResize);
//       };
//     }
//   }, []);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const savedTheme = localStorage.getItem("activeTheme");
//       if (savedTheme) {
//         setTheme(savedTheme);
//       }
//     }
//   }, []);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       localStorage.setItem("activeTheme", theme);
//     }
//   }, [theme]);

//   useEffect(() => {
//     document.body.className = theme;
//   }, [theme]);

//   const goToAbout = () => {
//     router.push("/pages/about");
//   };

//   if (screenWidth === null) {
//     return <div>Loading...</div>; // Render a loader while determining screen width
//   }

  return (
    // <LanguageSelectorContext.Provider value={{ activeLanguage, setActiveLanguage }}>
    //   <ThemeContext.Provider value={{ theme, setTheme }}>
    //     <SideBarContext.Provider value={{ sideBarExist, setSideBarExist }}>
    //       {screenWidth > 700 ? <HeaderForComputer /> : <HeaderForPhone />}
    //       <SideBar />
    //       <div>home page</div>
    //       <button onClick={goToAbout}>Go to About</button>
    //     </SideBarContext.Provider>
    //   </ThemeContext.Provider>
    // </LanguageSelectorContext.Provider>

    <>hi</>
  );
};

export default Home;
