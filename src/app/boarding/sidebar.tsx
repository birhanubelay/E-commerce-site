
"use client";
import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 fixed top-0 left-0 h-full bg-white shadow-lg p-4 overflow-y-auto">
      <ul className="space-y-4 font-medium">
        <li className="cursor-pointer hover:text-red-500">Woman's Fashion</li>
        <li className="cursor-pointer hover:text-red-500">Men's Fashion</li>
        <li className="cursor-pointer hover:text-red-500">Electronics</li>
        <li className="cursor-pointer hover:text-red-500">Home & Lifestyle</li>
        <li className="cursor-pointer hover:text-red-500">Medicine</li>
        <li className="cursor-pointer hover:text-red-500">Sports & Outdoor</li>
        <li className="cursor-pointer hover:text-red-500">Baby's & Toys</li>
        <li className="cursor-pointer hover:text-red-500">Groceries & Pets</li>
        <li className="cursor-pointer hover:text-red-500">Health & Beauty</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
