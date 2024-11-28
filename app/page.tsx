"use client";
import styles from "./page.module.css";
import ShoppingCartIcon from './svg/icons/shoppingCart';
import { useRouter } from "next/navigation";
import Home from "./pages/home/page";
import About from "./pages/about/page";

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
