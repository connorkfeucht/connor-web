"use client";
import { useRouter } from "next/navigation";
import FadeIn from "../_components/animate/FadeIn";

const HomePageContent = () => {
    const router = useRouter();
    return (
      <>
        <h1>Home page!</h1>
      </>
    );
  };
  
  const Home = FadeIn(HomePageContent);
  
  export default Home;