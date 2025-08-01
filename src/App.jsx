import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import HowItWorks from "./components/HowItWorks";
import Model from "./components/Model";
import NavBar from "./components/NavBar";
import * as Sentry from "@sentry/react";
function App() {
  return (
    <div className="bg-black">
      <NavBar />
      <Hero />
      <Highlights />
      <Model />
      <Features/>
      <HowItWorks/>
      <Footer/>
    </div>
  );
}

export default Sentry.withProfiler(App);
