"use client";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const pricingPlans = [
  {
    title: "Demo Class",
    subtitle: "Try before you commit",
    price: "Free",
    period: "",
    features: [
      "1 hour session",
      "Course overview",
      "Learning path discussion",
      "Q&A session",
      "No obligations",
    ],
    buttonText: "Book Free Demo",
    highlight: false,
  },
  {
    title: "1-to-1 Mentorship",
    subtitle: "Complete personalized attention",
    price: "₹8,999",
    period: "/per month",
    features: [
      "8 sessions per month",
      "Flexible scheduling",
      "Personalized curriculum",
      "Code reviews",
      "Lifetime support",
      "Career guidance",
      "Portfolio building",
    ],
    buttonText: "Get Started",
    highlight: true,
  },
  {
    title: "Small Group Batch",
    subtitle: "Learn with peers (max 4 students)",
    price: "₹4,999",
    period: "/per month",
    features: [
      "12 sessions per month",
      "Fixed schedule",
      "Structured curriculum",
      "Group projects",
      "Recorded sessions",
      "Community support",
      "Certificate on completion",
    ],
    buttonText: "Join Batch",
    highlight: false,
  },
];

const handleClickk = () => {
  const formSection = document.getElementById("demo-form");
  if (formSection) {
    formSection.scrollIntoView({ behavior: "smooth" });
  }
};

const PricingSection = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="font-bold text-4xl mb-3 text-blue-800">
          Simple, Transparent Pricing
        </h1>
        <p className="text-gray-600">
          Choose a plan that works for your learning style and budget
        </p>
      </div>

      {/* Pricing Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-white border rounded-2xl shadow-sm hover:shadow-xl transition p-8 flex flex-col ${
              plan.highlight ? "border-blue-500" : "border-gray-200"
            }`}
          >
            {plan.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm px-4 py-1 rounded-full">
                Best Value
              </div>
            )}

            <h2 className="text-xl font-semibold mb-1 text-gray-800">
              {plan.title}
            </h2>
            <p className="text-gray-500 mb-4">{plan.subtitle}</p>

            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">
                {plan.price}
              </span>
              <span className="text-gray-500">{plan.period}</span>
            </div>

            <ul className="space-y-2 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700">
                  <FaCheckCircle className="text-blue-600" size={16} />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`mt-auto py-3 rounded-md text-center font-medium transition ${
                plan.highlight
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "border border-gray-400 text-gray-700 hover:bg-gray-100"
              }`}
              onClick={handleClickk}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </section>

      {/* Footer Note */}
      <div className="text-center mt-12 text-gray-600 text-sm">
        <p>
          💡 <strong>Flexible payment options available</strong> — EMI, monthly
          installments, or full payment.
        </p>
        <p className="mt-2">
          All prices are in <strong>Indian Rupees (INR)</strong>. International
          students, please contact for pricing.
        </p>
      </div>
    </main>
  );
};

export default PricingSection;
