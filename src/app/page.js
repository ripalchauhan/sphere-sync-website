// app/page.js
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Stats from "../components/Stats"; 

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Footer />
    </div>
  );
}
