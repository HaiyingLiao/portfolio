import Title from "@/components/Title";
import Techs from "@/components/Techs";
import ServiceCard from "@/components/ServiceCard";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <section>{/* Hero section */}</section>

      <section>
        {/* my skill section */}
        <Title />
        <Techs />
      </section>

      <section>
        {/* Services section */}
        <Title />
        <ServiceCard />
      </section>

      <section>
        {/* Work experience section */}
        <Experience />
      </section>

      <section>
        {/* Projects section */}
        <Title />
        <Projects />
      </section>

      <section>
        {/* Testimonial section */}
        <Testimonial />
      </section>

      <section>{/* Contact section */}</section>
    </>
  );
}
