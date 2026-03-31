import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { SmartClinic } from "./components/SmartClinic";
import { PatientJourney } from "./components/PatientJourney";
import { Future2030 } from "./components/Future2030";
import { Workflow2030 } from "./components/Workflow2030";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <SmartClinic />
        <PatientJourney />
        <Testimonials />
        <Services />
        <Future2030 />
        <Workflow2030 />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}