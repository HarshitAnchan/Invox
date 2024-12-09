"use client";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="max-w-full ">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}
