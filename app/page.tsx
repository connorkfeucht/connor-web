"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import FadeIn from "./_components/animate/FadeIn";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_";

const HomeContent = () => {
  const router = useRouter();
  
  useEffect(() => {
    const h1 = document.querySelector("h1");
    if (h1) {
      h1.onmouseover = (event) => {
        let iterations = 0;
        const interval = setInterval(() => {
          const target = event.target as HTMLElement;
          if (target) {
            target.innerText = target.innerText.split("")
              .map((letter, index) => {
                if (index < iterations) {
                  return target.dataset.value?.[index] || "";
                }
                return letters[Math.floor(Math.random() * 27)];
              })
              .join("");

            if (iterations >= (target.dataset.value?.length || 0)) {
              clearInterval(interval);
            }

            iterations += 1 / 5;
          }
        }, 50);
      };
    }
  }, []);

  const handleClick = () => {
    router.push("/home");
  };

  return (
    <>
      <h1 
        data-value="CONNOR_FEUCHT"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        CONNOR_FEUCHT
      </h1>
    </>
  );
};

const Home = FadeIn(HomeContent);

export default Home;