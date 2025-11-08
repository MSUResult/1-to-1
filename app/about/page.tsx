"use client";
import React from "react";
import { IoIosContact } from "react-icons/io";
import { FaAddressBook } from "react-icons/fa";
import { FaRegIdBadge } from "react-icons/fa6";

const About = () => {
  const stats = [
    {
      icon: (
        <IoIosContact className="text-6xl text-blue-500 bg-blue-100 p-3 rounded-2xl" />
      ),
      title: "100+ Students Trained",
      desc: "Guided aspiring developers from beginners to job-ready professionals with hands-on mentorship.",
    },
    {
      icon: (
        <FaAddressBook className="text-6xl text-purple-500 bg-purple-100 p-3 rounded-2xl" />
      ),
      title: "15+ Workshops Delivered",
      desc: "Conducted live coding sessions in top colleges and tech communities across the country.",
    },
    {
      icon: (
        <FaRegIdBadge className="text-6xl text-yellow-500 bg-yellow-100 p-3 rounded-2xl" />
      ),
      title: "5+ Years Experience",
      desc: "Worked on real-world projects across startups and enterprises using modern web technologies.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          About Your <span className="text-blue-600">Mentor</span>
        </h1>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
          Passionate about teaching and empowering the next generation of
          developers through practical, project-based learning.
        </p>
      </div>

      {/* Cards Section */}
      <section className="flex flex-wrap justify-center gap-8">
        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl p-8 flex flex-col items-center text-center max-w-xs"
          >
            {item.icon}
            <h3 className="mt-4 font-bold text-2xl text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-500 mt-2 text-base">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Journey Section */}
      <section className="bg-white shadow-lg rounded-3xl p-10 mt-20 max-w-4xl w-full text-gray-700 leading-relaxed">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          My <span className="text-blue-600">Journey</span>
        </h2>

        <p className="mb-6">
          I started my journey as a self-taught developer, and I deeply
          understand the challenges that come with learning to code. That’s why
          I’m passionate about making web development simple, fun, and practical
          for everyone.
        </p>

        <p className="mb-6">
          Over the past 5 years, I’ve built projects ranging from startup MVPs
          to enterprise-scale apps using technologies like{" "}
          <strong>React</strong>,<strong> JavaScript</strong>, and{" "}
          <strong>Next.js</strong>. My focus has always been on writing clean,
          maintainable, and scalable code.
        </p>

        <p>
          Teaching became a natural extension of my career. I’ve delivered
          multiple workshops and live training sessions at top colleges, helping
          students turn their curiosity into confidence — and their code into
          careers.
        </p>
      </section>
    </div>
  );
};

export default About;
