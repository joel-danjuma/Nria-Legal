import Hero from "@/components/hero";
import Nav from "@/components/nav";
import About from "@/components/about";
import Contact from "@/components/contact";
import Services from "@/components/services";
import Services2 from "@/components/services-2";
import Testimonials from "@/components/testimonials";
import Testimonials2 from "@/components/testimonials-2";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      {/* <About /> */}
      {/* <Services /> */}
      <Services2 />
      <Testimonials />
      {/* <Testimonials2 /> */}
      <Contact />
    </main>
  );
}
