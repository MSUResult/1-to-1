"use client";
import React, { useState } from "react";

const DemoForm = () => {
  const [contact, setContact] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const res = Object.fromEntries(formData.entries());
    setContact(res);
    console.log(res);

    // ✅ Send data to backend
    try {
      const data = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(res),
      });

      const result = await data.json();
      if (result.success) {
        console.log("✅ Email sent successfully");
      } else {
        console.log("❌ Email sending failed");
      }
    } catch (error) {
      console.error("Error while sending data:", error);
    }
  };

  const handleClick = () => {
    const message = encodeURIComponent(
      "Hi, I'm interested in your demo class!"
    );
    window.open(`https://wa.me/917618550475?text=${message}`);
  };

  return (
    <main className="min-h-screen flex items-center justify-center flex-col">
      <h1 className="font-bold text-3xl">Ready To Start Learning?</h1>
      <p className="mb-4">
        Book your free demo class or get in touch for any questions
      </p>

      <div className="flex gap-3 w-4/5">
        <section
          id="demo-form"
          className="bg-white shadow-xl w-4/5 p-5 rounded-2xl"
        >
          <h1 className="text-2xl font-semibold mb-2">Book Your Demo Class</h1>
          <p className="mb-4">
            Fill out the form and I'll get back to you within 24 hours.
          </p>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              placeholder="John Doe"
              id="name"
              name="name"
              required
              className="p-3 border rounded-md focus:outline-none"
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="john@example.com"
              id="email"
              name="email"
              className="p-3 border rounded-md focus:outline-none"
            />

            <label htmlFor="number">Phone Number</label>
            <input
              type="number"
              placeholder="+91 8978675643"
              id="number"
              name="number"
              className="p-3 border rounded-md focus:outline-none"
            />

            <label htmlFor="interested">Select a Course</label>
            <select
              name="interested"
              id="interested"
              className="p-3 border rounded-md focus:outline-none"
            >
              <option value="">Choose a course</option>
              <option value="1 to 1 Mentorship">1 to 1 Mentorship</option>
              <option value="Beginner to Advanced React">
                Beginner to Advanced React
              </option>
              <option value="Full-Stack Development">
                Full-Stack Development
              </option>
            </select>

            <label htmlFor="message">Message (optional)</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me about your goals and experience"
              className="p-3 border rounded-md focus:outline-none"
            />

            <button
              type="submit"
              className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </section>

        <section className="w-1/5 ml-4 shadow-3xl p-3">
          <h1 className="text-xl font-semibold">Quick Start</h1>
          <p>Prefer instant messaging? Reach out directly</p>

          <button
            onClick={handleClick}
            className="border border-gray-400 p-3 w-full text-left rounded-md hover:bg-green-100 transition"
          >
            💬 WhatsApp
          </button>
        </section>
      </div>
    </main>
  );
};

export default DemoForm;
