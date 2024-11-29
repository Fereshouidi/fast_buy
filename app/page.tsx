"use client";
import { useRouter } from "next/navigation";
import english from './languages/english.json';
import arabic from './languages/arabic.json';
import LangageSwitch from "./components/sideBar/sideBarForComputers/language/language";

export default function App() {

  const router = useRouter();

  const goToHome = () => {
    router.push('/pages/home')
  }
  goToHome()
  return (

    <></>
  );
}
