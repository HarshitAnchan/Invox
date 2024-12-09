"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft, LogOut, MoveLeft, User, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  navContainer,
  navItem,
  navList,
  navListContainer,
} from "@/lib/constants/framer.constants";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const homePaths = ["/", "/dashboard"];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  //   const handleSignout = (e: React.MouseEvent) => {
  //     e.preventDefault();
  //     toast.success("Logged out!");
  //     router.push("/");
  //   };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <motion.nav
      variants={navContainer}
      initial={"hidden"}
      animate={"visible"}
      className={`w-full py-4 md:py-10 sticky top-0 z-50 bg-[#fff] flex flex-col md:flex-row items-center ${
        pathname === "/login" ? "justify-start" : "justify-between"
      } px-5 md:px-20`}
    >
      <div className="w-full md:w-auto flex items-center justify-between">
        <motion.div variants={navItem} className="flex items-center">
          {!homePaths.includes(pathname) && (
            <button onClick={() => router.back()} className="mr-2 md:mr-0">
              <ArrowLeft className="w-6 h-6" />
            </button>
          )}
          <Image
            src="/logo.png" // Replace with the path to your logo
            alt="Invox Logo"
            width={60} // Adjust width as needed
            height={30} // Adjust height as needed
            className="object-contain p-1 mt-0" // Ensures the logo is contained within the specified size
          />
          <h3 className="font-extrabold text-2xl md:text-4xl text-[#1B201C] mx-2 md:mx-5">
            <Link href={"/"}>Invox.</Link>
          </h3>
        </motion.div>
        {pathname === "/" && (
          <button onClick={toggleMobileMenu} className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        )}
      </div>
      <motion.div
        variants={navItem}
        className={`${
          pathname !== "/" ? "hidden" : "flex flex-col md:flex-row items-center"
        } ${mobileMenuOpen ? "mt-4" : "hidden md:flex"}`}
      >
        <motion.ul
          variants={navListContainer}
          initial={"hidden"}
          animate={"visible"}
          className={`flex flex-col md:flex-row items-center text-[#1B201C] mx-4`}
        >
          <motion.li
            variants={navList}
            className="my-2 md:my-0 md:mr-10 cursor-pointer group flex items-center text-[#061014] text-xl"
          >
            <span className="inline-block transition-transform group-hover:-translate-x-2 duration-200 ease-in-out">
              <Link href={"#features"}>Features</Link>
            </span>
            <MoveLeft className="ml-1 w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-200 ease-in-out " />
          </motion.li>
          <motion.li
            variants={navList}
            className="my-2 md:my-0 md:mr-10 cursor-pointer group flex items-center text-[#061014] text-xl"
          >
            <span className="inline-block transition-transform group-hover:-translate-x-2 duration-200 ease-in-out">
              <Link href={"#faqs"}>FAQs</Link>
            </span>
            <MoveLeft className="ml-1 w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-200 ease-in-out " />
          </motion.li>
          <motion.li
            variants={navList}
            className="md:mr-10 cursor-pointer group flex items-center text-[#061014] text-xl"
          >
            <span className="inline-block transition-transform group-hover:-translate-x-2 duration-200 ease-in-out">
              <Link href={"#footer"}>Contact us</Link>
            </span>
            <MoveLeft className="ml-1 w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-200 ease-in-out " />
          </motion.li>
        </motion.ul>
        <motion.button className="group relative overflow-hidden overflow-x-hidden font-medium rounded-full text-xl py-3 px-6 bg-[#DAF872] text-black hover:border-black border border-[#DAF872] mt-4 md:mt-0">
          <span className="relative z-10">
            <Link href="/login">Login</Link>
          </span>
          <span className="absolute inset-0 overflow-hidden rounded-md">
            <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
          </span>
        </motion.button>
      </motion.div>
    </motion.nav>
  );
}
