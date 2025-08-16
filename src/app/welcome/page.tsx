"use client";

import { useState } from "react";

export default function MyAccount() {
  const [firstName, setFirstName] = useState("Md");
  const [lastName, setLastName] = useState("Rimeil");
  const [email, setEmail] = useState("rimeil@gmail.com");
  const [address, setAddress] = useState("Kingston, 5236, United State");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSave = () => {
  
    console.log("Profile updated");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/4 bg-white p-6 shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Manage My Account</h2>
        <ul className="space-y-2 text-gray-500">
          <li className="hover:text-gray-700 cursor-pointer">My Profile</li>
          <li className="hover:text-gray-700 cursor-pointer">Address Book</li>
          <li className="hover:text-gray-700 cursor-pointer">Payment Options</li>
          <li className="hover:text-gray-700 cursor-pointer">My Orders</li>
          <li className="hover:text-gray-700 cursor-pointer">My Returns</li>
          <li className="hover:text-gray-700 cursor-pointer">My Cancellations</li>
          <li className="hover:text-gray-700 cursor-pointer">My Wishlist</li>
        </ul>
      </div>

      <div className="w-3/4 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-700">Home / My Account</h1>
          <span className="text-red-500">Welcome Md Rimeil</span>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-red-500 mb-4">Edit Your Profile</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <div>
              <label className="block text-gray-700">Address</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-gray-700">Password Changes</label>
              <input
                type="password"
                placeholder="Current Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1 mb-2"
              />
              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1 mb-2"
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-end space-x-4">
            <button
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              onClick={() => {
                setCurrentPassword("");
                setNewPassword("");
                setConfirmPassword("");
              }}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={handleSave}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}