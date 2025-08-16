"use client";

import { FaShippingFast, FaHeadset, FaUndo, FaFacebookF, FaTwitter, FaInstagram, FaUsers, FaMoneyBillWave, FaUserFriends, FaChartLine } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white font-sans mt-[180px] mb-[200px] w-[80%] mx-auto">
      <main className="flex flex-col md:flex-row p-4">
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-6 text-center md:text-left">Our Story</h1>
          <p className="text-gray-600 text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="w-full md:w-1/2 p-4 flex justify-center">
          <img
            src="/images/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1 (1).png"
            alt="Shopping Image"
            className="w-3/5 h-auto"
          />
        </div>
      </main>
      <section className="flex justify-around items-center mt-20 p-4 bg-gray-100">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center ml-3 mb-2">
            <FaUsers size={24} className="text-gray-600" />
          </div>
          <p className="text-lg">10.5k</p>
          <p className="text-gray-500 text-sm">Followers site</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center ml-6 mb-5">
            <FaMoneyBillWave size={24} className="text-white" />
          </div>
          <p className="text-lg">33k</p>
          <p className="text-gray-500 text-sm">Monthly profit site</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center ml-7 mb-2">
            <FaUserFriends size={24} className="text-gray-600" />
          </div>
          <p className="text-lg">45.5k</p>
          <p className="text-gray-500 text-sm">Customer active site</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center ml-5 mb-2">
            <FaChartLine size={24} className="text-gray-600" />
          </div>
          <p className="text-lg">25k</p>
          <p className="text-gray-500 text-sm">Annual gross site</p>
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-around items-center mt-20 p-4">
        <div className="text-center mb-4 md:mb-0">
          <img
            src="/images/Frame 874.png"
            alt="Tom Cruise"
            className="w-70 h-70 rounded-full mx-auto mb-2"
          />
          <h3 className="text-lg font-semibold">Tom Cruise</h3>
          <p className="text-gray-500">CEO</p>
          <div className="flex justify-center mt-2">
            <Link href="https://facebook.com" target="_blank" className="text-blue-600 mx-1">
              <FaFacebookF size={20} />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="text-blue-400 mx-1">
              <FaTwitter size={20} />
            </Link>
            <Link href="https://instagram.com" target="_blank" className="text-pink-500 mx-1">
              <FaInstagram size={20} />
            </Link>
          </div>
        </div>
        <div className="text-center mb-4 md:mb-0">
          <img
            src="/images/Frame 875.png"
            alt="Emma Watson"
            className="w-70 h-70 rounded-full mx-auto mb-2"
          />
          <h3 className="text-lg font-semibold">Emma Watson</h3>
          <p className="text-gray-500">Designer</p>
          <div className="flex justify-center mt-2">
            <Link href="https://facebook.com" target="_blank" className="text-blue-600 mx-1">
              <FaFacebookF size={20} />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="text-blue-400 mx-1">
              <FaTwitter size={20} />
            </Link>
            <Link href="https://instagram.com" target="_blank" className="text-pink-500 mx-1">
              <FaInstagram size={20} />
            </Link>
          </div>
        </div>
        <div className="text-center">
          <img
            src="/images/Frame 876.png"
            alt="Will Smith"
            className="w-70 h-70 rounded-full mx-auto mb-2"
          />
          <h3 className="text-lg font-semibold">Will Smith</h3>
          <p className="text-gray-500">Designer</p>
          <div className="flex justify-center mt-2">
            <Link href="https://facebook.com" target="_blank" className="text-blue-600 mx-1">
              <FaFacebookF size={20} />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="text-blue-400 mx-1">
              <FaTwitter size={20} />
            </Link>
            <Link href="https://instagram.com" target="_blank" className="text-pink-500 mx-1">
              <FaInstagram size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="flex justify-center gap-16 mt-20 py-10">
        <div className="text-center max-w-xs">
          <FaShippingFast
            size={64}
            className="mx-auto mb-2 text-white bg-black rounded-full p-3"
          />
          <p className="font-bold uppercase text-lg">Free and Fast Delivery</p>
          <p className="text-gray-800 text-xs mt-2">
            Free delivery for all orders over $140
          </p>
        </div>
        <div className="text-center max-w-xs">
          <FaHeadset
            size={64}
            className="mx-auto mb-2 text-white bg-black rounded-full p-3"
          />
          <p className="font-bold uppercase text-lg">24/7 Customer Service</p>
          <p className="text-gray-800 text-xs mt-2">Friendly 24/7 customer support</p>
        </div>
        <div className="text-center max-w-xs">
          <FaUndo
            size={64}
            className="mx-auto mb-2 bg-black w-[64px] h-[64px] text-white rounded-full p-3"
          />
          <p className="font-bold uppercase text-lg">Money Back Guarantee</p>
          <p className="text-gray-800 text-xs mt-2">We return money within 30 days</p>
        </div>
      </section>
    </div>
  );
}