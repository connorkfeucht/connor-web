"use client";
import { useRouter } from "next/navigation";
import FadeIn from "../_components/animate/FadeIn";
import useDecodeEffect from "../hooks/useDecodeEffect";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HomePageContent = () => {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useDecodeEffect(); // Use the custom hook

  useEffect(() => {
    // Check initial color scheme
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
  }, []);

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
            If I'm not studying or working, you can usually find me on the basketball or tennis court, hanging out with my friends, sketching, doing pottery, or playing video games!
          </p>

          <h2 className="text-2xl text-left font-bold mb-2">CONTACT</h2>
          <p className="text-lg mb-4">
            Victoria, BC | connorkfeucht@uvic.ca | 403-992-7043
          </p>

          <h2 className="text-2xl text-left font-bold mb-2">SKILLS</h2>
          <div className="text-lg mb-4">
            <p className="mb-2">
              <span className="font-semibold">Programming:</span> Python, JavaScript, C, Java, C++, PostgreSQL, Swift, C#, TypeScript, HTML, CSS
            </p>
            <p className="mb-2">
              <span className="font-semibold">Web Development:</span> React, Expo, next.js, Supabase, Flask, Firebase
            </p>
            <p className="mb-2">
              <span className="font-semibold">Operating Systems:</span> Unix/Linux, MS Windows, Mac OSX
            </p>
            <p className="mb-2">
              <span className="font-semibold">Software:</span> Visual Studio Code, Unity, git VCS, XCode, IntelliJ IDEA, TestNG, Blender, Microsoft Office
            </p>
          </div>

          <h2 className="text-2xl text-left font-bold mb-2">JOB EXPERIENCE</h2>
          <h3 className="text-lg text-left font-bold">APPLICATION ENGINEER, SOUTHPAW TECHNOLOGY</h3>
          <p className="text-lg mb-4">
            I am currently working as an Application Engineer at Southpaw Technology, a remote position I started in September 2025.
            In this role, I design and develop an ERP web application for a multi-million dollar client company.
            I implement robust frontend and backend features using React, TACTIC, Flask, and PostgreSQL, while collaborating
            in a dynamic startup environment and handling a broad range of technical responsibilities.
          </p>

          <h3 className="text-lg text-left font-bold">HELP DESK ANALYST, UNIVERSITY OF VICTORIA</h3>
          <p className="text-lg mb-4">
            During the Fall 2024 semester, I completed my first co-op as a Help Desk Analyst at UVic Systems.
            This role provided me with invaluable experience in troubleshooting a wide range of technical issues
            faced by students and staff. Additionally, I contributed by writing test scripts for a Java web application under the guidance of my mentor.
          </p>
          
          <h2 className="text-2xl text-left font-bold mb-2">TECHNICAL PROJECTS</h2>

          <h3 className="text-lg text-left font-bold">SESHN</h3>
          <p className="text-lg mb-4">
            Seshn is a small app which aims to help students track their study sessions, and allows them to share those study sessions with their peers.
            The original inspiration for this app was to combine the pomodoro style of studying with the popular running app Strava, in order to create a 
            platform for students to get statistics about their study sessions, but also to encourage and promote studying through interactions with peers online.
          </p>
          <p className="text-lg mb-4">
            The app was created using React Native, Expo, Typescript, and Supabase, and features a fully implemented friend system, posting and liking system, and activity
            creation system, where users can add a title, description, and other things to each study session.
          </p>

          <h3 className="text-lg text-left font-bold">RESEARCH ASSISTANT</h3>
          <p className="text-lg mb-4">
            As a research assistant to Professor Teseo Schneider at the University of Victoria, I built a Python program which renders 3D models (.hdf5 files) into 
            high resolution images, implementing added flexibility by having the option to edit certain parameters, such as camera position, model position, lighting, background 
            and textures. We have hopes of writing a research paper on this topic, and bringing it to the CVPR conference in November.
          </p>

          <h3 className="text-lg text-left font-bold">ROBO RAMPAGE</h3>
          <p className="text-lg mb-4">
            Robo Rampage is a 2D platformer game that I created in 2023. It was developed in Unity with C#. This was one of my favourite projects that I've worked on because 
            of the steep but satisfying learning curve for learning Unity. Since being a game developer is pretty high on my list of possible careers, I am planning on creating 
            more video games in the near future, but I'd like to find an idea which I think is fun and unique before I commit to making another one.
          </p>
          <p className="text-lg mb-4">
            One of the best parts about this project was being able to create all of the in game assets myself, since it allowed me more creative freedom then any other 
            technical project I've done. Below is a short demo video of the gameplay.
          </p>
          <div className="flex justify-center my-8">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/QOU-uW6jd9c?si=rpELn8u92RghonIm" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
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

          <h2 className="text-2xl text-left font-bold mb-2">AWARDS AND RECOGNITION</h2>
          <div className="text-lg mb-4">
            <p className="mb-2">
              <span className="font-semibold">Most Improved Player</span> - Edge Prep Basketball, Edge School, Calgary, AB (Nov 2019 - Mar 2020)
            </p>
            <p className="mb-2">
              <span className="font-semibold">Captain</span> - Westmount Charter School Senior Varsity Basketball, Calgary, AB (Sep 2020 - June 2021)
            </p>
          </div>
        </div>


      </div>
    </motion.div>
  );
};

const Home = FadeIn(HomePageContent);

export default Home;