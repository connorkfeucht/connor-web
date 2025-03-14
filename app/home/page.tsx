"use client";
import { useRouter } from "next/navigation";
import FadeIn from "../_components/animate/FadeIn";

const HomePageContent = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="p-8 max-w-2xl w-full">
        <h1 className="text-center">WELCOME</h1>
        <p className="text-lg mb-4">
          Hello! I'm a Computer Science Graphics student studying at University of Victoria, 
          and I am currently in my fourth year of studies! I am enrolled in my school's Co-op program, 
          and so far I've completed one internship for the University of Victoria (University Systems) as a Help Desk Analyst. 
          It was a fun job where I got to solve lots of new problems every day!
        </p>
        <p className="text-lg">
          If I'm not studying or working, you can usually find me on the basketball court, hanging out with my friends, shopping, or playing video games!
        </p>
      </div>
    </div>
  );
};

const Home = FadeIn(HomePageContent);

export default Home;