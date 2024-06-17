import styled from "styled-components";
import Info from "./Info";
import Skills from "./Skills";
import Intro from "./Intro";
import Works from "./Works";
import Contact from "./Contact";
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Section = styled.section`
  padding: 50px 0;
`;

const Home = () => {
  const { hash } = useLocation();
  const navigate = useNavigate();
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  useEffect(() => {
    const handleScroll = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navigate(`#${id}`, { replace: true });
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.6,
    });

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [navigate]);

  return (
    <Wrapper>
      <Section id="intro" ref={(el) => (sectionsRef.current[0] = el)}>
        <Intro />
      </Section>
      <Section id="about" ref={(el) => (sectionsRef.current[1] = el)}>
        <Info />
      </Section>
      <Section id="skills" ref={(el) => (sectionsRef.current[2] = el)}>
        <Skills />
      </Section>
      <Section id="works" ref={(el) => (sectionsRef.current[3] = el)}>
        <Works />
      </Section>
      <Section id="contact" ref={(el) => (sectionsRef.current[4] = el)}>
        <Contact />
      </Section>
    </Wrapper>
  );
};

export default Home;
