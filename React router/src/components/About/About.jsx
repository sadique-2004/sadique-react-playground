import React from "react";
import reactLogo from "../../assets/react.svg";
import reactSadique from "../../assets/reactSadique.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="container mx-auto px-6 text-gray-700 md:px-12 xl:px-24">
        <div className="flex flex-col-reverse items-center gap-12 md:flex-row">

          {/* Text Section */}
          <div className="md:w-7/12">
            <h2 className="text-2xl font-bold text-gray-900 md:text-5xl leading-tight">
              My React Journey –
              How I Started & What I’ve Learned.
            </h2>


            <p className="mt-6 text-lg text-gray-600">
              Content:

              Your background in web development.
              Why you started learning React.
              Challenges & how you overcame them.
              Your future goals in React & development..
            </p>
            <p className="mt-4 text-gray-600">
              It enables powerful features like hooks, virtual DOM, and component-based architecture,
              making web development seamless and efficient.
            </p>

            {/* Call-to-Action Button */}
            <Link
              to="https://react.dev"
              target="_blank"
              className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium 
                        hover:bg-blue-700 transition-all duration-300 shadow-md"
            >
              Learn More
            </Link>
          </div>

          {/* Image Section */}
          <div className="md:w-5/12 flex justify-center">
            <img
              src={reactSadique}
              alt="React Logo"
              className="w-56 md:w-92 animate-spin-slow rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
