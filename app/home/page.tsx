"use client";
import { useRouter } from "next/navigation";
import FadeIn from "../_components/animate/FadeIn";
import useDecodeEffect from "../hooks/useDecodeEffect";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HomePageContent = () => {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState<'about' | 'experience' | 'projects'>('about');
  const [mounted, setMounted] = useState(false);

  useDecodeEffect();

  useEffect(() => {
    setMounted(true);

    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setIsDarkMode(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setIsDarkMode(e.matches);
      };

      mediaQuery.addEventListener('change', handleChange);

      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    }
  }, []);

  return (
    <motion.div
      className="relative h-screen w-full overflow-y-auto font-mono p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Fake Browser / Path Bar - Full End-to-End Width */}
      {mounted && (
        <div className="w-full border-b border-dashed border-current pb-2 mb-6 flex flex-wrap justify-between items-center text-xs opacity-75">
          <span>HTTP://connorkfeucht.dev/home</span>
          
          {/* Social Links on the Path Bar */}
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
      )}

      {mounted && (
        <>        
          <div className="w-full max-w-4xl pb-4 px-0 ml-0 flex justify-between items-end border-b border-current mb-6">
            <h1
              className="text-left font-bold text-2xl md:text-3xl"
              data-value="CONNOR_FEUCHT"
            >
              &gt; CONNOR_FEUCHT
            </h1>
          </div>
        </>
      )}

      {/* Outer Wrapper */}
      <div className="w-full text-left py-0 px-0 ml-0 mr-auto">

        {/* Tab Navigation - Simple Retro Buttons */}
        <div className="w-full max-w-4xl mb-8 px-0 ml-0">
          <div className="flex flex-wrap gap-4 justify-start">
            <button
              onClick={() => setActiveTab('about')}
              className={`px-3 py-1 text-sm border border-current cursor-pointer transition-none ${
                activeTab === 'about'
                  ? 'bg-[#c5c6c7] text-invert font-bold'
                  : 'bg-transparent hover:bg-[#c5c6c7] hover:text-invert'
              }`}
            >
              [ABOUT ME]
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-3 py-1 text-sm border border-current cursor-pointer transition-none ${
                activeTab === 'experience'
                  ? 'bg-[#c5c6c7] text-invert font-bold'
                  : 'bg-transparent hover:bg-[#c5c6c7] hover:text-invert'
              }`}
            >
              [EXPERIENCE]
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-3 py-1 text-sm border border-current cursor-pointer transition-none ${
                activeTab === 'projects'
                  ? 'bg-[#c5c6c7] text-invert font-bold'
                  : 'bg-transparent hover:bg-[#c5c6c7] hover:text-invert'
              }`}
            >
              [TECHNICAL PROJECTS]
            </button>
          </div>
        </div>

        <div className="w-full max-w-4xl px-0 ml-0">
          {/* About Me Tab */}
          {activeTab === 'about' && (
            <>
              <h2 className="text-xl text-left font-bold mb-2">&gt;&gt; ABOUT ME</h2>
              <p className="text-base mb-4 leading-relaxed">
                Hi, I'm Connor! I'm currently a Computer Science major (Honours) at the University of Victoria.
                Originally from Calgary, Alberta, I moved to Victoria in 2022 to pursue my studies.
                Time flies, and now I'm already in my last year of studies! I am expecting to graduate in April 2027.
              </p>
              <p className="text-base mb-4 leading-relaxed">
                If I'm not studying or working, you can usually find me on the basketball court, making ambient music, reading, architecture sketching, or doing pottery!
              </p>

              <h2 className="text-xl text-left font-bold mb-2 mt-6">&gt;&gt; CONTACT</h2>
              <p className="text-base mb-4">
                Victoria, BC | connorkfeucht@uvic.ca | (403)-992-7043
              </p>

              <h2 className="text-xl text-left font-bold mb-2 mt-6">&gt;&gt; SKILLS</h2>
              <div className="text-base mb-4 space-y-1">
                <p>
                  <span className="font-semibold">Programming:</span> Python, JavaScript, C, Java, Rust, C++, PostgreSQL, C#, TypeScript, HTML, CSS, Swift
                </p>
                <p>
                  <span className="font-semibold">Web Development:</span> React, Expo, next.js, Supabase, Flask, Firebase
                </p>
                <p>
                  <span className="font-semibold">Operating Systems:</span> Unix/Linux, MS Windows, Mac OSX
                </p>
                <p>
                  <span className="font-semibold">Software:</span> Visual Studio Code, Unity, git VCS, XCode, IntelliJ IDEA, TestNG, Blender, FL Studio
                </p>
              </div>

              <h2 className="text-xl text-left font-bold mb-2 mt-6">&gt;&gt; AWARDS AND RECOGNITION</h2>
              <div className="text-base mb-4 space-y-1">
                <p>
- 
<span className="font-semibold">Most Improved Player:</span> Edge Prep Basketball, Edge School, Calgary, AB (Sep 2020 - June 2021)
                </p>
                <p>
- 
<span className="font-semibold">Captain:</span> Westmount Charter School Senior Varsity Basketball, Calgary, AB (Nov 2019 - Mar 2020)
                </p>
              </div>
            </>
          )}

          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <>
              <h2 className="text-xl text-left font-bold mb-4">&gt;&gt; EXPERIENCE</h2>
              
              <h3 className="text-base text-left font-bold">&gt; APPLICATION ENGINEER, BOOMBASTIK LABS INC.</h3>
              <p className="text-base mb-4 leading-relaxed">
                During the 2025/2026 School year, I was working as an Application Engineer at Boombastik Labs Inc.
                In this role, I designed and developed an ERP web application for a multi-million dollar client company.
                I implemented robust frontend and backend features using React, TACTIC, Flask, and PostgreSQL, while collaborating
                in a dynamic startup environment and handling a broad range of technical responsibilities. This role gave me lots of freedom to
                work on my software engineering skills, while sharpening my time management, communication, and teamwork abilities.
              </p>

              <h3 className="text-base text-left font-bold">&gt; HELP DESK ANALYST, UNIVERSITY OF VICTORIA</h3>
              <p className="text-base mb-4 leading-relaxed">
                During the Fall 2024 semester, I completed my first co-op as a Help Desk Analyst at UVic Systems.
                This role provided me with invaluable experience in troubleshooting a wide range of technical issues
                faced by students and staff. Additionally, I contributed by writing test scripts for a Java web application under the guidance of my mentor.
              </p>

              <h3 className="text-base text-left font-bold">&gt; RESEARCH ASSISTANT</h3>
              <p className="text-base mb-4 leading-relaxed">
                From May - August 2025, I was working as a Research Assistant to Dr. Teseo Schneider in the Department of Computer Science at the University of Victoria.
                I built a Python program to render .hdf5 3D models into RGB and depth images for training neural networks.
                Additionally, I utilized Blender to render images of .ply point clouds for neural network training. It was an amazing first research
                experience, and I am planning on doing more research during my last semester at UVic.
              </p>
            </>
          )}

          {/* Technical Projects Tab */}
          {activeTab === 'projects' && (
            <>
              <h2 className="text-xl text-left font-bold mb-4">&gt;&gt; TECHNICAL PROJECTS</h2>

              <h3 className="text-base text-left font-bold">&gt; SAMPULL</h3>
              <p className="text-base mb-4 leading-relaxed">
                Sampull is a project that I started with a few of my university friends in May 2026. The goal of the application is allow amateur music
                producers to discover songs to sample with the help of AI. The user enters a prompt describing a song that they would like to hear, and sampull
                finds a song that fits the users description.
              </p>

              <h3 className="text-base text-left font-bold">&gt; SESHN</h3>
              <p className="text-base mb-4 leading-relaxed">
                Seshn is a small app which aims to help students track their study sessions, and allows them to share those study sessions with their peers.
                The original inspiration for this app was to combine the pomodoro style of studying with the popular running app Strava, in order to create a 
                platform for students to get statistics about their study sessions, but also to encourage and promote studying through interactions with peers online.
              </p>
              <p className="text-base mb-4 leading-relaxed">
                The app was created using React Native, Expo, Typescript, and Supabase, and features a fully implemented friend system, posting and liking system, and activity
                creation system, where users can add a title, description, and other things to each study session.
              </p>

              <h3 className="text-base text-left font-bold">&gt; ROBO RAMPAGE</h3>
              <p className="text-base mb-4 leading-relaxed">
                Robo Rampage is a 2D platformer game that I created in 2023. It was developed in Unity with C#. This was one of my favourite projects that I've worked on because 
                of the steep but satisfying learning curve for learning Unity. Since being a game developer is pretty high on my list of possible careers, I am planning on creating 
                more video games in the near future, but I'd like to find an idea which I think is fun and unique before I commit to making another one.
              </p>
              <p className="text-base mb-4 leading-relaxed">
                One of the best parts about this project was being able to create all of the in game assets myself, since it allowed me more creative freedom then any other 
                technical project I've done. Below is a short demo video of the gameplay.
              </p>
              <div className="flex justify-start my-6 border border-current p-1 w-fit">
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

              <h3 className="text-base text-left font-bold">&gt; NOTENUDGE</h3>
              <p className="text-base mb-4 leading-relaxed">
                  NoteNudge is a passion project that leverages AI technology to assist students in studying more effectively for their classes.
              </p>
              <p className="text-base mb-4 leading-relaxed">
                  I contributed to the development of the front end of the website using React and Next.js. 
                  My responsibilities included organizing and coding the user interface. 
                  This experience was highly rewarding and significantly improved my teamwork and programming skills.
              </p>

              <h3 className="text-base text-left font-bold">&gt; PICIT</h3>
              <p className="text-base mb-4 leading-relaxed">
                PicIt is an iOS application that my friend and I launched in the Fall of 2024.
                It is a social media platform designed to bring people together by encouraging users
                to recreate photos from their camera roll daily and share them with their friends.
              </p>
              <p className="text-base mb-4 leading-relaxed">
                Developed the front end of the iOS application using Xcode, Swift, and SwiftUI.
                My responsibilities included designing, organizing, and programming the user interface of the application.
              </p>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Home = FadeIn(HomePageContent);

export default Home;