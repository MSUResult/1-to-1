// app/page.tsx (or page.js)

import React from "react";
// Assuming you have installed react-icons: npm install react-icons
import { FaStar } from "react-icons/fa";

// --- 1. Data Structure ---
const testimonials = [
  {
    quote:
      "Best investment in my career! Went from zero coding knowledge to landing my first job as a React developer in just 6 months. The mentorship was incredibly personalized.",
    name: "Priya Sharma",
    title: "Frontend Developer at TCS",
  },
  {
    quote:
      "The practical approach to teaching made all the difference. Every concept was explained with real-world examples. Now I'm confidently taking on freelance projects.",
    name: "Rahul Kumar",
    title: "Freelance Developer",
  },
  {
    quote:
      "Workshop sessions at our college were amazing! Clear explanations, hands-on practice, and patient guidance. Highly recommend for anyone serious about web development.",
    name: "Anjali Verma",
    title: "Engineering Student",
  },
];

// --- 2. Testimonial Card Component (Local) ---
// This is the reusable component for each testimonial box.
const TestimonialCard = ({
  quote,
  name,
  title,
}: {
  quote: string;
  name: string;
  title: string;
}) => {
  // Function to render 5 gold stars
  const renderStars = () => {
    return (
      <div className="flex text-yellow-500 mb-4">
        {[...Array(5)].map((_, i) => (
          // Using index as key is generally okay for static lists like this
          <FaStar key={i} className="h-5 w-5" />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100 h-full flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02]">
      <div>
        {renderStars()}
        <p className="text-gray-700 text-lg italic mb-6">"{quote}"</p>
      </div>

      <div className="mt-auto pt-4 border-t border-gray-100">
        <p className="font-semibold text-gray-900 text-lg">{name}</p>
        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </div>
  );
};

// --- 3. Main Page Component ---
export default function StudentSuccessStories() {
  return (
    <section className="py-20 md:py-28 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading Section */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-4">
          Student Success Stories
        </h1>
        <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
          Don't just take my word for it - hear from students who've transformed
          their careers
        </p>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <TestimonialCard
              key={index}
              quote={t.quote}
              name={t.name}
              title={t.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
