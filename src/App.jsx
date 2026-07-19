import { useState } from "react";
import { FaRegFileAlt, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { TbBrandLinkedin } from "react-icons/tb";
import Skills from "./components/skills";
import Plasma from "./components/Plasma";
import Particles from "./components/Particles";
import ShinyText from "./components/ShinyText";
import RotatingText from "./components/RotatingText";
import SkillCard from "./components/SkillCard";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {
        
      }
      {/* <Ferrofluid
        colors={["#ffffff","#ffffff","#ffffff"]}
        speed={0.5}
        scale={1.6}
        turbulence={1}
        fluidity={0.1}
        rimWidth={0.2}
        sharpness={2.5}
        shimmer={1.5}
        glow={2}
        flowDirection="down"
        opacity={1}
        mouseInteraction
        mouseStrength={1}
        mouseRadius={0.35}
      /> */}
      <div className="hidden sm:block">
      <Plasma
        color="#B497CF"
        speed={1}
        direction="forward"
        scale={1}
        opacity={1}
        mouseInteractive={false}
        />
      </div>
      <div className="block sm:hidden">
      <Particles
        particleColors={["#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover
        alphaParticles={false}
        disableRotation={false}
        pixelRatio={1}
        />
      </div>
      {/* Navbar */}
      {/* <div className="relative z-[1]"> */}

      <nav className="sticky top-5 md:top-10 max-w-[95vw] md:max-w-[70vw] m-auto rounded-3xl z-50 border  border-neutral-700 bg-[#2C2C2A]/10 sm:bg-[#2C2C2A]/30 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <p className="text-lg font-bold  text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500 hover:scale-[103%] transition ease-linear">
            <a href="https://himanshudotdev.vercel.app/">
              {"himanshu.dev"}
            </a>
          </p>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 font-poppins text-neutral-300/55 md:flex">
            <a href="#home" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white md:hidden"
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="flex flex-col border-t border-neutral-700 bg-[#2C2C2A]/20 md:hidden rounded-b-3xl">
            {["home", "about", "skills", "projects"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className="px-5 py-4 text-neutral-300 capitalize hover:bg-neutral-800 "
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="flex min-h-[92vh] items-center justify-center px-5 text-white sm:px-8 lg:px-12"
      >

        <div className="max-w-4xl text-center">
          <h1 className="font-poppins text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-neutral-600 to-neutral-200 ">
            <ShinyText
              text="Himanshu Dhawale"
              speed={2}
              delay={0}
              color="#b5b5b5"
              shineColor="#ffffff"
              spread={120}
              direction="left"
              yoyo={true}
              pauseOnHover
              disabled={false}
            />
          </h1>

          <p className="mx-auto mt-6 max-w-3xl font-mono text-base leading-8 sm:leading-none text-neutral-300 sm:text-lg lg:text-2xl">
            Hi, I'am a second year college student passionate about <br />
            <RotatingText
              texts={["Machine Learning" , "NLP" , "Computer Vision"]}
              mainClassName="px-1 sm:mt-3 sm:px-2 md:px-3 bg-[#2C2C2A]/10 backdrop-blur-lg text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
              splitBy="characters"
              auto
              loop
            />
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {/* <button className="animate-pulse flex items-center rounded-lg border border-neutral-600 bg-[#2C2C2A] px-4 py-2 hover:border-blue-600 transition">
              <FaRegFileAlt className="mr-2" />
              Resume
            </button> */}

            <a
              href="https://github.com/Himanshu-2728"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded-lg border border-neutral-600 bg-[#2C2C2A]/30 backdrop-blur-sm px-4 py-2 hover:border-neutral-400 transition"
            >
              <FiGithub className="mr-2" />
              GitHub
            </a>

            <a href="https://www.linkedin.com/in/himanshu-dhawale-17b784344/?skipRedirect=true" target="_blank" className="flex items-center rounded-lg border border-neutral-600 bg-[#2C2C2A]/30 backdrop-blur-sm  px-4 py-2 hover:border-neutral-400 transition">
              <TbBrandLinkedin className="mr-2" />
              LinkedIn
            </a>

            <a href="https://www.instagram.com/himanshuu_dhawale/" target="_blank" className="flex items-center rounded-lg border border-neutral-600 bg-[#2C2C2A]/30 backdrop-blur-sm  px-4 py-2 hover:border-neutral-400 transition">
              <FaInstagram className="mr-2" />
              Instagram
            </a >
          </div>
        </div>
      </section>
      {/* </div> */}


      <section
        id="about"
        className="min-h-screen px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24 bg-[#0f0f0f]"
      >
        <div className="mx-auto max-w-6xl mt-10">
          <h1 className="mb-10 text-4xl font-bold sm:text-5xl">
            About Me
          </h1>

          <p className="max-w-4xl text-base leading-8 text-neutral-400 sm:text-lg">
            I'm Himanshu, a developer with a strong interest in Machine Learning
            and Artificial Intelligence, focused on building practical
            applications that solve real-world problems.
            <br />
            <br />
            I enjoy taking projects from idea to deployment—training machine
            learning models, developing backend APIs, and creating intuitive web
            interfaces that make those models accessible to users. Through
            projects in natural language processing, computer vision, and
            full-stack development, I've gained hands-on experience with model
            evaluation, feature engineering, deployment, and building end-to-end
            ML applications.
          </p>

          <div className="mt-16">
            <h2 className="mb-6 text-4xl font-bold">Education</h2>

            <div className="rounded-xl border border-neutral-700 bg-neutral-900 p-6">
              <h3 className="text-xl font-semibold">
                B.Tech – Artificial Intelligence & Machine Learning
              </h3>

              <p className="mt-2 text-neutral-400">
                Yeshwantrao Chavan College of Engineering
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="rounded bg-blue-600 px-3 py-1 text-sm">
                  Pursuing
                </span>

                <span className="text-blue-400">
                  Sept 2025 – Present
                </span>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <h2 className="mb-6 text-4xl font-bold">Experience</h2>

            <div className="rounded-xl border border-neutral-700 bg-neutral-900 p-6">
              <h3 className="text-xl font-semibold">
                ACMSC - Technical Team Member
              </h3>

              <p className="mt-2 text-neutral-400">
                 Association for Computing Machinery Student Chapter YCCE
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="rounded bg-blue-600 px-3 py-1 text-sm">
                  Current
                </span>

                <span className="text-blue-400">
                  12 July 2026 – Present
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Skills/>

      {/* Projects */}
      <section
        id="projects"
        className="min-h-screen px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24 bg-[#0f0f0f] "
      >
        <div className="mx-auto max-w-6xl mt-10">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Projects
          </h1>

          <p className="mt-4 text-base text-neutral-400 sm:text-lg">
            Projects that showcase my skills.
          </p>

          <div className="mt-12 rounded-md">
            {/* <SentimentAnalysisCard /> */}
            < SkillCard />
          </div>
        </div>
      </section>
    </>
  );
}
