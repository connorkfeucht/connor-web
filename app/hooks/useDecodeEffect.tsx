import { useEffect } from "react";
// IMPORT FOR USE OF DECODEEFFECT IN PARTS OF PROGRAM
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_";

const useDecodeEffect = () => {
  useEffect(() => {
    const h1 = document.querySelector("h1");
    let interval: NodeJS.Timeout;
    if (h1) {
      const decodeEffect = (target: HTMLElement) => {
        let iterations = 0;
        clearInterval(interval);
        interval = setInterval(() => {
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

      decodeEffect(h1); // Trigger effect on page load
      // h1.onmouseover = (event) => {
      //   decodeEffect(event.target as HTMLElement); // Trigger effect on mouse over
      // };
    }

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
};

export default useDecodeEffect;