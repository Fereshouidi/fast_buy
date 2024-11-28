"use client";
import { useRouter } from "next/navigation";

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
