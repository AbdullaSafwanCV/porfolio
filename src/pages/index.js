// pages/index.js
import { useEffect, useState } from "react";
import Head from "next/head";

export default function Home() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <Head>
        <title>Abdulla Safwan CV | Portfolio</title>
        <meta name="description" content="Fullstack Developer Portfolio" />
      </Head>

      <main className="font-sans min-h-screen bg-gradient-to-br from-blue-500 via-white to-blue-400 text-gray-900">
        <header
          className={`bg-white/90 backdrop-blur shadow-lg sticky top-0 z-20 transition-transform duration-300 ${
            showHeader ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
            <h1 className="text-xl sm:text-2xl font-extrabold text-blue-700 tracking-tight text-center sm:text-left">
              Abdulla Safwan CV
            </h1>
            <nav className="space-x-2 sm:space-x-6 text-base sm:text-lg font-medium flex flex-wrap justify-center sm:justify-end">
              <a href="#about" className="hover:text-blue-600 transition block">
                About
              </a>
              <a
                href="#skills"
                className="hover:text-blue-600 transition block"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="hover:text-blue-600 transition block"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="hover:text-blue-600 transition block"
              >
                Contact
              </a>
            </nav>
          </div>
        </header>

        <section className="bg-gradient-to-r from-blue-100 via-blue-50 to-white text-center py-12 sm:py-20 mb-8 shadow-sm px-2 sm:px-0">
          <div className=" flex flex-col items-center justify-center mb-6">
            <img
              src="/safwan.svg"
              alt="Abdulla Safwan Profile"
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full shadow-lg object-cover border-4 border-blue-200 mb-4"
            />
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-blue-800 mb-2 sm:mb-4 drop-shadow">
              Hi, I&apos;m Abdulla Safwan
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-4 sm:mb-6">
              BCA Student <span className="mx-2 text-blue-400">|</span>{" "}
              Fullstack Developer
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-4">
              <a
                href="#projects"
                className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-full shadow hover:bg-blue-700 transition font-semibold text-base sm:text-lg"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="bg-white border border-blue-600 text-blue-600 px-4 sm:px-6 py-2 rounded-full shadow hover:bg-blue-50 transition font-semibold text-base sm:text-lg"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="max-w-4xl mx-auto px-4 py-8 sm:px-6 sm:py-10 bg-white rounded-xl shadow border-l-4 border-blue-200 mb-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-700 text-left">
            About Me
          </h2>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            I&apos;m a BCA second-year student with a strong interest in
            fullstack web development. I enjoy learning how both the frontend
            and backend of web applications work together. Technologies:
            <span className="text-blue-500">
              HTML, CSS, JavaScript, React, Next.js, Django, and more.
            </span>
            I love building small projects that challenge me and help me grow.
            Debugging, experimenting, and watching my code turn into something
            useful gives me a real sense of accomplishment. In the future, I
            hope to contribute to open-source projects and collaborate with
            other developers. This is just the start of my journey, and I&apos;m
            excited for what&apos;s ahead.
          </p>
        </section>

        <section
          id="skills"
          className="bg-white py-8 sm:py-12 mb-8 shadow rounded-xl max-w-4xl mx-auto px-3 sm:px-6"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-blue-700">
            Skills
          </h2>
          <ul className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-gray-800 text-base sm:text-lg font-medium">
            <li className="hover:scale-105 transition bg-blue-50 rounded px-3 py-2 sm:px-4 sm:py-2 shadow flex items-center gap-2">
              <img
                src="/html.svg"
                alt="HTML"
                className="h-5 w-5 sm:h-6 sm:w-6"
              />
              <img src="/css.svg" alt="CSS" className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="truncate">HTML & CSS</span>
            </li>
            <li className="hover:scale-105 transition bg-blue-50 rounded px-3 py-2 sm:px-4 sm:py-2 shadow flex items-center gap-2">
              <img
                src="/javascript.svg"
                alt="JavaScript"
                className="h-5 w-5 sm:h-6 sm:w-6"
              />
              <span className="truncate">JavaScript</span>
            </li>
            <li className="hover:scale-105 transition bg-blue-50 rounded px-3 py-2 sm:px-4 sm:py-2 shadow flex items-center gap-2">
              <img
                src="/react.svg"
                alt="React"
                className="h-5 w-5 sm:h-6 sm:w-6"
              />
              <span className="truncate">React</span>
            </li>
            <li className="hover:scale-105 transition bg-blue-50 rounded px-3 py-2 sm:px-4 sm:py-2 shadow flex items-center gap-2">
              <img
                src="/next.svg"
                alt="Next.js"
                className="h-5 w-5 sm:h-6 sm:w-6"
              />
              <span className="truncate">Next.js</span>
            </li>
            <li className="hover:scale-105 transition bg-blue-50 rounded px-3 py-2 sm:px-4 sm:py-2 shadow flex items-center gap-2">
              <img
                src="/node-js.svg"
                alt="Node.js"
                className="h-5 w-5 sm:h-6 sm:w-6"
              />
              <span className="truncate">Node.js</span>
            </li>
            <li className="hover:scale-105 transition bg-blue-50 rounded px-3 py-2 sm:px-4 sm:py-2 shadow flex items-center gap-2">
              <img
                src="/django.svg"
                alt="Django"
                className="h-5 w-5 sm:h-6 sm:w-6"
              />
              <span className="truncate">Django / DRF</span>
            </li>
            <li className="hover:scale-105 transition bg-blue-50 rounded px-3 py-2 sm:px-4 sm:py-2 shadow flex items-center gap-2">
              <img src="/c.svg" alt="C" className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="truncate">C</span>
            </li>
            <li className="hover:scale-105 transition bg-blue-50 rounded px-3 py-2 sm:px-4 sm:py-2 shadow flex items-center gap-2">
              <img
                src="/bootstrap.svg"
                alt="Bootstrap"
                className="h-5 w-5 sm:h-6 sm:w-6"
              />
              <span className="truncate">Bootstrap</span>
            </li>
            <li className="hover:scale-105 transition bg-blue-50 rounded px-3 py-2 sm:px-4 sm:py-2 shadow flex items-center gap-2">
              <img
                src="/tailwindcss.svg"
                alt="Tailwind CSS"
                className="h-5 w-5 sm:h-6 sm:w-6"
              />
              <span className="truncate">Tailwind CSS</span>
            </li>
          </ul>
        </section>

        <section
          id="projects"
          className="max-w-4xl mx-auto px-3 sm:px-6 py-8 sm:py-12 mb-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-blue-700">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                title: "Sticky Wall",
                desc: "A sticky-note task board built with Django and React for managing to-dos.",
                linkSourceCode: "https://github.com/AbdullaSafwanCV/TodoApp",
              },
              {
                title: "Reminder App",
                desc: "A React-based app for setting reminders with date and descriptions.",
                linkSourceCode: "https://github.com/AbdullaSafwanCV/reminder",
              },
              {
                title: "Portfolio",
                desc: "This portfolio website built with Next.js and Tailwind.",
                linkSourceCode: "https://github.com/AbdullaSafwanCV/portfolio",
              },
              {
                title: "Rock Paper Scissors",
                desc: "A fun web-based game built with React where players can play Rock Paper Scissors against the computer.",
                linkSourceCode:
                  "https://github.com/AbdullaSafwanCV/Rock--Paper--Scissors-",
                  liveDemo: "https://rock-paper-scissors-two-psi-48.vercel.app/"
              },
            ].map((project, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:scale-105 transition flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-1 sm:mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm sm:text-base">
                    {project.desc}
                  </p>
                </div>
                <div className="mt-auto flex gap-3">
                  <a
                    href={project.liveDemo}
                    className="bg-blue-600 text-white px-3 py-1.5 rounded-full text-sm sm:text-base font-medium hover:bg-blue-700 transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.linkSourceCode || "#"}
                    className="border border-blue-600 text-blue-600 px-3 py-1.5 rounded-full text-sm sm:text-base font-medium hover:bg-blue-50 transition"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="bg-gradient-to-r from-blue-100 via-blue-50 to-white py-8 sm:py-12 mb-8 rounded-xl shadow max-w-4xl mx-auto px-3 sm:px-6"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-blue-700">
            Contact
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-2 sm:mb-4">
            Always open to discussing new opportunities and interesting projects
          </p>
          <ul className="mt-2 sm:mt-4 space-y-2 sm:space-y-3 text-base sm:text-lg">
            <li>
              <span className="font-semibold text-blue-600">Email:</span>{" "}
              abdullasafwancv@gmail.com
            </li>
            <li>
              <span className="font-semibold text-blue-600">Phone:</span> +91
              9633368598
            </li>
            <li>
              <span className="font-semibold text-blue-600">Location:</span>{" "}
              Nadapuram, Kerala, India
            </li>
            <li>
              <span className="font-semibold text-blue-600">GitHub:</span>{" "}
              <a
                style={{ textDecoration: "none" }}
                href="https://github.com/AbdullaSafwanCV"
                className="text-blue-600 underline hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                AbdullaSafwanCV
              </a>
            </li>
            <li>
              <span className="font-semibold text-blue-600">LinkedIn:</span>{" "}
              <a
                style={{ textDecoration: "none" }}
                href="https://www.linkedin.com/in/abdulla-safwan-cv-2317a2338/"
                className="text-blue-600 underline hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Abdulla Safwan CV
              </a>
            </li>
          </ul>
        </section>

        <footer className="bg-blue-900 text-white text-center py-4 sm:py-6 mt-8 shadow-inner text-base sm:text-lg">
          <p>
            &copy; 2025 Abdulla Safwan CV. Built with precision and passion.
          </p>
        </footer>
      </main>
    </>
  );
}
