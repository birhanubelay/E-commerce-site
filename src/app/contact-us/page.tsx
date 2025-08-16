"use client";
import React, { useState } from "react";
export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted! " + JSON.stringify(formData));
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="bg-white font-sans mt-[200px] mb-[100px] max-w-6xl mx-auto px-4">
      <p className="text-sm text-gray-500 mb-6">
        Home / <span className="font-semibold">Contact</span>
      </p>

      <main className="flex flex-col md:flex-row gap-16">
        <section className="md:w-1/3 p-6 bg-white shadow rounded space-y-12">
          <div className="flex gap-4 items-start">
            <div className="bg-red-600 p-3 rounded-full text-white flex items-center justify-center">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 7.89a3 3 0 008.14-2.83l-1.09-5.5a2 2 0 00-2.66-1.58L3 8z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Call To Us</h3>
              <p className="text-gray-600 text-sm">
                We are available 24/7, 7 days a week.
              </p>
              <p className="text-gray-600 text-sm mt-1">
                Phone:{" "}
                <a href="tel:+8801611112222" className="text-red-600 hover:underline">
                  +8801611112222
                </a>
              </p>
              <hr className="border-gray-300 mt-4" />
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="bg-red-600 p-3 rounded-full text-white flex items-center justify-center">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12H8m8 4H8m8-8H8m13 6v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2h11a2 2 0 012 2z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Write To US</h3>
              <p className="text-gray-600 text-sm">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-gray-600 text-sm mt-1">
                Emails:{" "}
                <a
                  href="mailto:customer@exclusive.com"
                  className="text-red-600 hover:underline"
                >
                  customer@exclusive.com
                </a>
              </p>
              <p className="text-gray-600 text-sm mt-1">
                Emails:{" "}
                <a
                  href="mailto:support@exclusive.com"
                  className="text-red-600 hover:underline"
                >
                  support@exclusive.com
                </a>
              </p>
            </div>
          </div>
        </section>
        <form
          onSubmit={handleSubmit}
          className="md:w-2/3 bg-white p-6 shadow rounded space-y-8"
          noValidate
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name *"
              required
              className="border border-gray-300 p-3 rounded placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email *"
              required
              className="border border-gray-300 p-3 rounded placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone *"
              required
              className="border border-gray-300 p-3 rounded placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={6}
            className="w-full border border-gray-300 p-3 rounded placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition"
          >
            Send Massgage
          </button>
        </form>
      </main>
    </div>
  );
}
