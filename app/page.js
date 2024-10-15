import About from "@/components/About";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";


export default function Home() {
  return (
    <main className="relative bg-gray-900 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full  ">
      <Navbar/>
      <Hero/>
      <About/>
      <Products/>
      <Features/>
      <Contact/>
      <Footer/>
     

    </div>
    </main>
    
  );
}
