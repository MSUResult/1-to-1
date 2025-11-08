"use client";
import React from "react";
import { FaClock, FaUsers, FaCheckCircle } from "react-icons/fa";

const courses = [
  {
    level: "All Levels",
    title: "1-to-1 Personal Mentorship",
    popular: true,
    desc: "Completely personalized learning experience tailored to your goals",
    duration: "Flexible",
    max: "1",
    features: [
      "Personalized curriculum",
      "Flexible scheduling",
      "Live coding sessions",
      "Code reviews & feedback",
      "Career guidance",
      "Lifetime support",
    ],
    button: "Enroll Now",
  },
  {
    level: "Beginner",
    title: "Beginner to Advanced React",
    desc: "Master React from fundamentals to advanced concepts",
    duration: "12 weeks",
    max: "Max 4",
    features: [
      "React fundamentals",
      "Hooks & State Management",
      "React Router",
      "API Integration",
      "Real-world projects",
      "Recorded sessions",
    ],
    button: "Enroll Now",
  },
  {
    level: "Intermediate",
    title: "Full-Stack Development Path",
    desc: "Become a complete full-stack developer",
    duration: "16 weeks",
    max: "Max 4",
    features: [
      "Frontend: React + TypeScript",
      "Backend: Node.js",
      "Database: MongoDB/PostgreSQL",
      "Authentication & Security",
      "Deployment & DevOps",
      "Portfolio projects",
    ],
    button: "Enroll Now",
  },
];

const scrollToForm = () => {
  const formSection = document.getElementById("demo-form");
  if (formSection) {
    formSection.scrollIntoView({ behavior: "smooth" });
  }
};

const CoursesPricing = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="text-center mb-12">
        <h1 className="font-bold text-4xl mb-3">
          Choose the learning path that fits your goals
        </h1>
        <p className="text-gray-600">
          Learn web development the practical way — with real projects and
          mentorship.
        </p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {courses.map((course, index) => (
          <div
            key={index}
            className={`relative bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition p-8 flex flex-col ${
              course.popular ? "border-blue-500" : ""
            }`}
          >
            {course.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm px-4 py-1 rounded-full">
                Most Popular
              </div>
            )}

            <p className="text-sm text-gray-500 mb-2">{course.level}</p>
            <h2 className="text-2xl font-semibold mb-3">{course.title}</h2>
            <p className="text-gray-600 mb-4">{course.desc}</p>

            <div className="flex items-center text-gray-600 gap-4 mb-6">
              <div className="flex items-center gap-1">
                <FaClock size={16} />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaUsers size={16} />
                <span>{course.max}</span>
              </div>
            </div>

            <ul className="space-y-2 mb-6">
              {course.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700">
                  <FaCheckCircle className="text-blue-600" size={18} />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className="mt-auto bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
              onClick={scrollToForm}
            >
              {course.button}
            </button>
          </div>
        ))}
      </section>
    </main>
  );
};

export default CoursesPricing;
