import React from "react";

export default function Contact() {
  return (
    <div className="w-full md:w-1/2 flex flex-col items-start  md:px-0">
      {/* Contact Info */}
      <div className="mb-8 md:mb-12 w-full">
        <h3 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-start">
          TALK TO US
        </h3>
        <div className="mb-6 md:mb-8 text-start">
          <p className="mb-1 text-gray-700">INFO@MYSITE.COM</p>
          <p className="text-gray-700">123 456 6780</p>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="mb-6 md:mb-10 w-full max-w-lg">
        <p className="mb-2 text-sm text-start font-medium">
          Subscribe to our Newsletter *
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            aria-label="Email for newsletter"
            className="border border-gray-400 bg-blue-50 h-12 w-full sm:w-80 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your email"
          />
          <button className="bg-gray-700 text-white px-6 py-2 h-12 text-lg sm:text-xl rounded-md hover:bg-gray-800 transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Checkbox */}
      <div className="flex items-center justify-center gap-3">
        <input
          type="checkbox"
          aria-label="Newsletter subscription"
          className=" h-5 w-5 border border-gray-600 rounded-sm cursor-pointer focus:ring-2 focus:ring-blue-400"
        />
        <p className="text-sm md:text-base text-gray-700">
          Yes, subscribe me to your newsletter. *
        </p>
      </div>
    </div>
  );
}
