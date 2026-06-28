import { useState } from "react";
import { FaRegFileAlt, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { TbBrandLinkedin } from "react-icons/tb";
import SentimentAnalysisCard from "./components/sentiment-analysis";
import Skills from "./components/skills";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-neutral-700 bg-[#2C2C2A]/90 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <p className="text-lg font-bold  text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500 hover:scale-[103%] transition ease-linear">
            <a href="https://himanshudotdev.vercel.app/">
              {"himanshu.dev"}
            </a>
          </p>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 font-poppins text-neutral-300 md:flex">
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
          <div className="flex flex-col border-t border-neutral-700 bg-[#2C2C2A] md:hidden">
            {["home", "about", "skills", "projects"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className="px-5 py-4 text-neutral-300 capitalize hover:bg-neutral-800"
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
            Himanshu Dhawale.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl font-mono text-base leading-8 text-neutral-300 sm:text-lg lg:text-2xl">
            AIML Student passionate about NLP, Computer Vision and building
            deployable ML applications.
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
              className="flex items-center rounded-lg border border-neutral-600 bg-[#2C2C2A] px-4 py-2 hover:border-blue-600 transition"
            >
              <FiGithub className="mr-2" />
              GitHub
            </a>

            <a href="https://www.linkedin.com/in/himanshu-dhawale-17b784344/?skipRedirect=true" target="_blank" className="flex items-center rounded-lg border border-neutral-600 bg-[#2C2C2A] px-4 py-2 hover:border-blue-600 transition">
              <TbBrandLinkedin className="mr-2" />
              LinkedIn
            </a>

            <a href="https://www.instagram.com/himanshuu_dhawale/" target="_blank" className="flex items-center rounded-lg border border-neutral-600 bg-[#2C2C2A] px-4 py-2 hover:border-blue-600 transition">
              <FaInstagram className="mr-2" />
              Instagram
            </a >
          </div>
        </div>
      </section>

      <section
        id="about"
        className="min-h-screen px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-6xl">
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
        </div>
      </section>

      <Skills />

      {/* Projects */}
      <section
        id="projects"
        className="min-h-screen px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24 "
      >
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Projects
          </h1>

          <p className="mt-4 text-base text-neutral-400 sm:text-lg">
            Projects that showcase my skills.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 rounded-md">
            <SentimentAnalysisCard />
          </div>
        </div>
      </section>
    </>
  );
}
