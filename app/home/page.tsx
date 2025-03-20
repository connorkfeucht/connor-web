"use client";
import { useRouter } from "next/navigation";
import FadeIn from "../_components/animate/FadeIn";
import useDecodeEffect from "../hooks/useDecodeEffect";
import { motion } from "framer-motion";

const HomePageContent = () => {
  const router = useRouter();
  
  useDecodeEffect(); // Use the custom hook

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center p-4 h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
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

      {/* Scrollable content */}
      <div className="w-full max-w-4xl overflow-y-auto flex-1 scrollbar-hide">
        <div className="w-full max-w-4xl p-8">
          <h1 
            className="text-center font-bold"
            data-value="WELCOME"
          >
            WELCOME
          </h1>
        </div>

        <div className="p-8">
          <h2 className="text-2xl text-left font-bold mb-2">ABOUT ME</h2>
          <p className="text-lg mb-4">
            Hi, I'm Connor! I'm currently a Computer Science major at the University of Victoria, specializing in Graphics and Gaming. 
            Originally from Calgary, Alberta, I moved to Victoria in 2022 to pursue my studies. 
            Time flies, and now I'm already in my fourth year!
          </p>
          <p className="text-lg mb-4">
            If I'm not studying or working, you can usually find me on the basketball court, hanging out with my friends, or playing video games!
          </p>

          <h2 className="text-2xl text-left font-bold mb-2">JOB EXPERIENCE</h2>
          <h3 className="text-lg text-left font-bold">HELP DESK ANALYST, UNIVERSITY OF VICTORIA</h3>
          <p className="text-lg mb-4">
            During the Fall 2024 semester, I completed my first co-op as a Help Desk Analyst at UVic Systems. 
            This role provided me with invaluable experience in troubleshooting a wide range of technical issues 
            faced by students and staff. Additionally, I contributed by writing test scripts for a Java web application under the guidance of my mentor.
          </p>
          
          <h2 className="text-2xl text-left font-bold mb-2">TECHNICAL PROJECTS</h2>
          <h3 className="text-lg text-left font-bold">NOTENUDGE</h3>
          <p className="text-lg mb-4">
              NoteNudge is a passion project that leverages AI technology to assist students in studying more effectively for their classes.
          </p>
          <p className="text-lg mb-4">
              I contributed to the development of the front end of the website using React and Next.js. 
              My responsibilities included organizing and coding the user interface. 
              This experience was highly rewarding and significantly improved my teamwork and programming skills.
          </p>
          <h3 className="text-lg text-left font-bold">PICIT</h3>
          <p className="text-lg mb-4">
            PicIt is an iOS application that my friend and I launched in the Fall of 2024. 
            It is a social media platform designed to bring people together by encouraging users 
            to recreate photos from their camera roll daily and share them with their friends.
          </p>
          <p className="text-lg mb-4">
            Developed the front end of the iOS application using Xcode, Swift, and SwiftUI. 
            My responsibilities included designing, organizing, and programming the user interface of the application.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Home = FadeIn(HomePageContent);

export default Home;