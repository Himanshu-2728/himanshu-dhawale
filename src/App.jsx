import { FaRegFileAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import ProjectCard from "./components/projectCard";
import Skills from "./components/skills";

export default function App() {
  return (
    <>
      <div className="bg-[#2C2C2A] flex justify-around h-[3vh] items-center border-b-[0.5px] border-gray-600 sticky top-0 py-10">
        <p className="text-white font-bold mx-10 z-0">
          {" himanshu.dev "}
        </p>
        <div className="text-[#A4A49A] mx-10 font-poppins flex justify-around w-[25%]">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>
      </div>
      <section id="home" className="h-[95vh] text-white flex items-center justify-center">
        <div>
          <h1 className="text-center text-7xl font-poppins">
            Himanshu Dhawale. 
          </h1>
          <p className="text-2xl font-mono mt-6">
            AIML Student passionate about NLP, Computer Vision and building deployable ML applications.
          </p>
          <div className="mt-5 text-center flex justify-center ">
            <button className="hover:border-blue-600 flex items-center bg-[#2C2C2A]  rounded-lg p-2 border-[0.5px] border-gray-600 mx-1">
              <FaRegFileAlt className="mr-1" />
                Resume
            </button> 
            <button className="hover:border-blue-600 flex items-center bg-[#2C2C2A]  rounded-lg p-2 border-[0.5px] border-gray-600 mx-1"> 
              <FiGithub className="mr-1" />
              Github
            </button>
            <button className="hover:border-blue-600 flex items-center bg-[#2C2C2A]  rounded-lg p-2 border-[0.5px] border-gray-600 mx-1">
              <TbBrandLinkedin className="mr-1" />
              LinkedIn
            </button>
            <button className="hover:border-blue-600 flex items-center bg-[#2C2C2A]  rounded-lg p-2 border-[0.5px] border-gray-600 mx-1">
              <FaInstagram  className="mr-1"/>
              Instagram
            </button>
          </div>
        </div>
      </section>
      <section id="about" className="h-[100vh] flex items-center px-8 py-24">
        <div className="text-white max-w-6xl mx-auto">
          <div>
            <h1 className="text-5xl font-bold mb-16">
              About Me
            </h1>
            <p className="mt-5 text-lg text-neutral-400 mb-16">
              I'm Himanshu, a developer with a strong interest in Machine Learning and Artificial Intelligence, focused on building practical applications that solve real-world problems. <br />

              I enjoy taking projects from idea to deployment—training machine learning models, developing backend APIs, and creating intuitive web interfaces that make those models accessible to users. Through projects in natural language processing, computer vision, and full-stack development, I've gained hands-on experience with model evaluation, feature engineering, deployment, and building end-to-end ML applications.
            </p>
          </div>
          <div>
            <h1 className="text-5xl  mt-10 text-white font-bold">
              Education
            </h1>
            <table className="mt-5 text-neutral-400">
              <tbody>
                <tr>
                  <td>
                    BTech - Artificial Intelligence And Machine Learning
                  </td>
                  <td>
                    <span className="bg-blue-600 p-1 rounded-md mx-5">Persuing</span>
                  </td>
                </tr>
                <tr>
                  <td>
                     Ycce - Yeshvantrao Chavan College of Engineering
                  </td>
                  <td>
                    <span className="mx-5 text-blue-500">Sept 2025 - Present</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      < Skills />
      <section id="projects" className="h-[100vh] px-8 py-24">
        <div className="text-white max-w-6xl mx-auto">
          <h1 className="font-bold text-5xl">
            Projects
          </h1>
          <p className="text-lg text-neutral-400 mt-5">
            Projects that showcase my skills
          </p>
          <div className="p-10 grid grid-cols-2 gap-6 max-sm:grid-cols-1">
            < ProjectCard />
            < ProjectCard />
            < ProjectCard />
            < ProjectCard />
          </div>
        </div>
      </section>
    </>
  );
}
