"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import FadeIn from "./_components/animate/FadeIn";
// import useDecodeEffect from "./hooks/useDecodeEffect";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_";

const HomeContent = () => {
  const router = useRouter();
  
  // useDecodeEffect(); // TODO: FIX

  // temporary until above TODO is fixed
  useEffect(() => { // makes the decoding effect
    const h1 = document.querySelector("h1");
    let interval: NodeJS.Timeout;
    if (h1) {
      const decodeEffect = (target: HTMLElement) => {
        let iterations = 0;
        const interval = setInterval(() => {
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

      const h1 = document.querySelector("h1");
      if (h1) {
        decodeEffect(h1); // Trigger effect on page load
        h1.onmouseover = (event) => {
          decodeEffect(event.target as HTMLElement); // Trigger effect on mouse over
        };
      }
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
        className="font-bold cursor-pointer"
      >
        CONNOR_FEUCHT
      </h1>
    </>
  );
};

const Home = FadeIn(HomeContent);

export default Home;