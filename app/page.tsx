"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function App() {


  
  const [activeLanguage, setActiveLanguage] = useState(localStorage.getItem('activeLanguage') || 'english');
  const router = useRouter();

  const goToHome = () => {
    router.push('/pages/home');
  }
  goToHome();

  return (
    <></>
  );
}
