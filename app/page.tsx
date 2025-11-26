"use client";
import { useRouter } from "next/navigation";
import FadeIn from "./_components/animate/FadeIn";
import useDecodeEffect from "./hooks/useDecodeEffect";
import { useEffect, useState } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_";

const HomeContent = () => {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useDecodeEffect();

  useEffect(() => {
    setMounted(true);

    // Check initial color scheme
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setIsDarkMode(mediaQuery.matches);

      // Listen for changes to color scheme
      const handleChange = (e: MediaQueryListEvent) => {
        setIsDarkMode(e.matches);
      };

      mediaQuery.addEventListener('change', handleChange);

      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    }
  }, []);

  const handleClick = () => {
    router.push("/home");
  };

  return (
    <>
      {/* Fixed navigation bar */}
      {mounted && (
        <div className="fixed top-4 right-4 flex space-x-4 z-10">
          <a
            href="https://github.com/connorkfeucht"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform duration-300 hover:scale-105"
          >
            <img
              src={isDarkMode ? '/GitHub_Invertocat_Dark.png' : '/GitHub_Invertocat_Light.png'}
              height={25}
              width={25}
              alt="GitHub"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/connorkfeucht"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform duration-300 hover:scale-105"
          >
            <img
              src={isDarkMode ? '/InBug-Black.png' : '/InBug-White.png'}
              height={25}
              width={25}
              alt="LinkedIn"
            />
          </a>
        </div>
      )}

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