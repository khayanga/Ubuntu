import About from "@/components/About";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";


export default function Home() {
  return (
    <div className="bg-gray-900 w-full min-h-screen">
      <Navbar/>
      <Hero/>
      <About/>
      <Products/>
      <Features/>
      <Contact/>
      <Footer/>
     

    </div>
  );
}
