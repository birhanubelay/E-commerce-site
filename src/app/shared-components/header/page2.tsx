"use client";

import Link from "next/link";
import { useLanguage } from "../language/page";
import { Search, Heart, ShoppingCart, User } from "lucide-react";
import { usePathname } from "next/navigation";

const Header = () => {
  const { t, language, setLanguage } = useLanguage();
  const pathname = usePathname();

  console.log("Header is rendering");
  return (
    <div className="fixed top-0 left-0 right-0 bg-white z-20 shadow-lg">
      <div className="bg-black text-white p-2 flex justify-between items-center">
        <div className="pl-148">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </div>
        <Link href="/shop" className="text-white mr-80 decoration-[#00000] underline text-lg">
          Shop Now
        </Link>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as any)}
          className="mr-48 p-1 rounded bg-black text-white"
        >
          <option value="en">English</option>
          <option value="sw">Kiswahili</option>
          <option value="fr">French</option>
        </select>
      </div>
      <header className="p-4 flex justify-between items-center w-full bg-white">
        <div className="p-4 flex justify-between items-center w-full">
          <Link href="/" className="font-bold text-xl text-black ml-15">
            {t("logo")}
          </Link>
          <nav className="flex gap-15 pr-9">
            <Link
              href="/"
              className={`text-black text-lg hover:underline ${
                pathname === "/" ? "underline" : ""
              }`}
            >
              {t("home")}
            </Link>
            <Link
              href="/contact-us"
              className={`text-black text-lg hover:underline ${
                pathname === "/contact-us" ? "underline" : ""
              }`}
            >
              {t("contact")}
            </Link>
            <Link
              href="/about"
              className={`text-black text-lg hover:underline ${
                pathname === "/about" ? "underline" : ""
              }`}
            >
              {t("about")}
            </Link>
            <Link
              href="authentication/signUp"
              className={`text-black text-lg ${
                pathname === "/authentication/signUp" ? "underline" : ""
              }`}
            >
              {t("signup")}
            </Link>
          </nav>
          <div className="relative flex items-center space-x-4">
            <input
              type="text"
              placeholder={t("searchPlaceholder")}
              className="mr-34 pr-8 p-2 w-69 border border-gray-200 rounded"
              style={{ color: "#000000" }}
            />
            <Search
              size={20}
              color="black"
              className="absolute left-62 top-1/2 transform -translate-y-1/2"
            />
            <Link href="/wishlist">
              <Heart size={20} color="black" className="cursor-pointer" />
            </Link>
            <Link href="/cart">
              <ShoppingCart size={20} color="black" className="cursor-pointer" />
            </Link>
            <Link href="/profile">
              <User size={20} color="black" className="cursor-pointer" />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;