import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Copy, Check } from "lucide-react"; // Icons for copy button
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
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center text-center py-16 px-4">
                <h1 className="text-4xl sm:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                    Master React Router DOM 🚀
                </h1>
                <p className="mt-4 text-lg text-gray-300 max-w-2xl">
                    Learn how to navigate seamlessly between pages in your React app using React Router DOM.
                </p>

                {/* Call to Action */}
                <Link
                    to="https://reactrouter.com/"
                    target="_blank"
                    className="mt-6 inline-flex items-center bg-blue-600 hover:bg-blue-700 transition px-6 py-3 text-lg font-medium rounded-lg shadow-lg"
                >
                    🌍 Visit Official Docs
                </Link>

                {/* Hero Image */}
                <div className="mt-10 w-full flex justify-center">
                    <img className="w-80 sm:w-96 drop-shadow-lg" src={versionControlImage} alt="React Router" />
                </div>
            </section>

            {/* Code Snippets Section */}
            <section className="py-16 px-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-400">Quick Start Guide ⚡</h2>
                <div className="mt-8 grid gap-6 max-w-3xl mx-auto">
                    {codeSnippets.map((snippet, index) => (
                        <div key={index} className="relative bg-gray-800 rounded-lg shadow-lg p-4">
                            <h3 className="text-lg font-semibold text-gray-300">{snippet.title}</h3>
                            <pre className="mt-2 bg-gray-900 p-3 rounded-lg text-sm overflow-x-auto">
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
