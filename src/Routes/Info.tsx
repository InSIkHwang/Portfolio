import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import styled from "styled-components";
import ProfileCard from "../Components/ProfileCard";
import Experience from "../Components/Experience";

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const Title = styled(motion.div)`
  font-size: 28px;
  margin: 10px auto;
  text-align: center;

  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    height: 2px;
    width: 100%;
    background-color: #f1f1f1;
    transform-origin: left;
    transform: scaleX(0);
  }
`;

const Underline = styled(motion.div)`
  position: absolute;
  left: 0;
  bottom: -5px;
  height: 2px;
  width: 100%;
  background-color: #f1f1f1;
  transform-origin: center;
`;

const underlineVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1 },
};

interface AnimatedUnderlineProps {
  delay: number;
}

const wrapperVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.2 },
  },
};

const AnimatedUnderline = ({ delay }: AnimatedUnderlineProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <Underline
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.3, delay }}
      variants={underlineVariants}
    />
  );
};

const Info = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <Container>
      <Title>
        ABOUT
        <AnimatedUnderline delay={0} />
      </Title>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={wrapperVariants}
      >
        <ProfileCard />
        <Experience />
      </motion.div>
    </Container>
  );
};

export default Info;
