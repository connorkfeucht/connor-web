"use client";
import { useRouter } from "next/navigation";
import FadeIn from "./_components/animate/FadeIn";
import useDecodeEffect from "./hooks/useDecodeEffect";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_";

const HomeContent = () => {
  const router = useRouter();
  
  useDecodeEffect();

  const handleClick = () => {
    router.push("/home");
  };

  return (
    <>
      {/* Fixed navigation bar */}
      <div className="fixed top-4 right-4 flex space-x-4 z-10">
        <a
          href="https://github.com/connorkfeucht"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-transform duration-300 hover:scale-105"
        >
          <img
            src={'/GitHub_Invertocat_Dark.png'}
            height={25}
            width={25}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/connorkfeucht"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-transform duration-300 hover:scale-105"
        >
          <img
            src={'/InBug-Black.png'}
            height={25}
            width={25}
          />
        </a>
      </div>

      <h1
        data-value="CONNOR_FEUCHT"
        onClick={handleClick}
        className="font-bold cursor-pointer inline-block transition-transform duration-300 hover:scale-101"
      >
        CONNOR_FEUCHT
      </h1>
    </>
  );
};

const Home = FadeIn(HomeContent);

export default Home;