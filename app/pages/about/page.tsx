
"use client";
import { useRouter } from "next/navigation";


const About = () => {

    
  const router = useRouter()

  const goToHome = () => {
    router.push('/pages/home');
  }

    return(
        <>
            <div>about page</div>
            <button onClick={goToHome}></button>
        </>
    )
}
export default  About;