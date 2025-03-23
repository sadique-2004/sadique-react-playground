import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Copy, Check } from "lucide-react"; // Icons for copy button
import { FaReact } from "react-icons/fa";

import versionControlImage from "../../assets/undraw_version-control_e4yu.svg";

const Home = () => {
    const [copied, setCopied] = useState(null);

    const handleCopy = (code, index) => {
        navigator.clipboard.writeText(code);
        setCopied(index);
        setTimeout(() => setCopied(null), 2000);
    };

    const codeSnippets = [
        {
            title: "📦 Install React Router DOM",
            code: "npm install react-router-dom",
        },
        {
            title: "🛠️ Basic Routing Setup",
            code: `import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;`,
        },
    ];

    return (
        <div className="min-h-screen bg-[#DCDCE4] text-gray-900">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center text-center py-16 px-4">

                <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-gray-700">
                    Hi, I'm <span className="">Sadique!</span> <br />
                    <span className="inline-flex items-center gap-2">
                        Welcome to My 
                        {/* <span className="relative flex items-center text-blue-500"> */}
                            {/* React */}
                            <FaReact className="text-[#61DAFB] text-6xl sm:text-7xl ml-2 mx-4 animate-[spin_8s_linear_infinite]" />
                        {/* </span> */}
                        Journey.
                    </span>
                </h1>

                <p className="mt-4 text-lg text-gray-900 max-w-2xl">
                    I'm a MERN stack enthusiast, passionate about React & web development.
                </p>

                {/* Call to Action */}
                <Link
                    to="https://reactrouter.com/"
                    target="_blank"
                    className="mt-6 inline-flex items-center  bg-gray-400 transition px-6 py-3 text-lg text-white font-extrabold rounded-lg shadow-lg"
                >
                    Follow my journey & start yours today!
                </Link>

                {/* Hero Image */}
                <div className="mt-10 w-full flex justify-center">
                    <img className="w-80 sm:w-96 drop-shadow-lg" src={versionControlImage} alt="React Router" />
                </div>
            </section>

            {/* Code Snippets Section */}
            <section className="py-16 px-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-400">Quick Start Guide ⚡</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {codeSnippets.map((snippet, index) => (
                        <div key={index} className="relative bg-gray-800 rounded-lg shadow-lg p-4">
                            <h3 className="text-lg font-semibold text-gray-300">{snippet.title}</h3>
                            <pre className="mt-2 bg-gray-900 p-3 rounded-lg text-sm text-white overflow-x-auto">
                                {snippet.code}
                            </pre>
                            {/* Copy Button */}
                            <button
                                onClick={() => handleCopy(snippet.code, index)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
                            >
                                {copied === index ? <Check size={20} color="lime" /> : <Copy size={20} />}
                            </button>
                        </div>
                    ))}
                </div>
            </section>


        </div>
    );
};

export default Home;
