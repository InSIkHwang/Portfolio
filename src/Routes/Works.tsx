import React, { useState, useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import WorkItems from "../Components/WorkItems";
import Media from "../Components/Media";

const Wrapper = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
`;

const Title = styled(motion.div)`
  font-size: 28px;
  margin: 10px auto;
  margin-bottom: 150px;
  width: 100px;
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

const HeaderItemWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  font-size: 20px;
  font-weight: 700;
  width: 900px;

  ${Media.small`
    width: 90vw;
  `};
`;

const HeaderItemUnderline = styled(motion.div)<{ selected: boolean }>`
  position: absolute;
  left: 0;
  bottom: -5px;
  height: 2px;
  width: 100%;
  background-color: #f1f1f1;
  transform-origin: center;
  transform: scaleX(${(props) => (props.selected ? 1 : 0)});
  transition: transform 0.3s;
`;

const HeaderItem = styled.div<{ selected: boolean }>`
  cursor: pointer;
  color: ${(props) => (props.selected ? "#fff" : "#bbb")};
  transition: color 0.3s;
  position: relative;
  &:hover ${HeaderItemUnderline} {
    transform: scaleX(1);
    transition: transform 0.3s;
  }

  ${Media.small`
    font-size: 10px;
  `};
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5vh;
`;

const wrapperVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.2 },
  },
};

const underlineVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1 },
};

const worksVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
};

interface AnimatedUnderlineProps {
  delay: number;
}

const AnimatedUnderline = ({ delay }: AnimatedUnderlineProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <Underline
      initial="hidden"
      ref={ref}
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.3, delay }}
      variants={underlineVariants}
    />
  );
};

const Works = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const headers = ["TICKETPONG", "SIKFLIX", "COINS INFO", "TODO APP"];

  return (
    <Wrapper>
      <Title>
        WORKS
        <AnimatedUnderline delay={0} />
      </Title>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={wrapperVariants}
      >
        <Header>
          {headers.map((header, index) => (
            <HeaderItemWrapper key={index}>
              <HeaderItem
                selected={selectedIndex === index}
                onClick={() => setSelectedIndex(index)}
              >
                {header}
                <HeaderItemUnderline selected={selectedIndex === index} />
              </HeaderItem>
            </HeaderItemWrapper>
          ))}
        </Header>
        <Body>
          <motion.div
            initial="initial"
            animate="animate"
            variants={worksVariants}
          >
            <WorkItems itemIndex={selectedIndex} />
          </motion.div>
        </Body>
      </motion.div>
    </Wrapper>
  );
};

export default Works;
