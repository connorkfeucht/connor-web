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
      {/* Top Header / Path Bar */}
      {mounted && (
        <div className="fixed top-0 left-0 w-full p-4 md:p-8 z-10 font-mono">
          <div className="w-full border-b border-dashed border-current pb-2 flex flex-wrap justify-between items-center text-xs opacity-75">
            <span>HTTP://connorkfeucht.dev/</span>
            
            <div className="flex space-x-3 text-xs">
              <a
                href="https://github.com/connorkfeucht"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                [GITHUB]
              </a>
              <a
                href="https://www.linkedin.com/in/connorkfeucht"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                [LINKEDIN]
              </a>
              <a
                href="https://soundcloud.com/ckf100"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                [SOUNDCLOUD]
              </a>
            </div>
          </div>
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