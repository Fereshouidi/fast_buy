"use client";
import { useRouter } from "next/navigation";
//import { useState } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

export default function App() {


  
  //const [activeLanguage, setActiveLanguage] = useState(localStorage.getItem('activeLanguage') || 'english');
  const router = useRouter();

  const goToHome = () => {
    router.push('/pages/home');
  }
  goToHome();

  return (
    <></>
  );
}
