import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";
import MeteorEffect from "../Components/Meteor";
import Media from "../Components/Media";

interface TitleWrapperProps {
  borderVisible: boolean;
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 200px auto 0 auto;

  ${Media.small`    
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 20px;
  `};
`;

const TitleWrapper = styled(motion.div)<TitleWrapperProps>`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 50px 50px;
  margin-bottom: 100px;
  border: 1px solid rgba(255, 255, 255, 0);
  transition: border-color 1s ease-in-out;
  border-color: ${(props) =>
    props.borderVisible ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)"};
  position: relative;
  background-color: #1b1b1e99;
  z-index: 2;

  ${Media.small`    
    width:  200px;
    height: 200px;
    padding: 10px 10px;
    top:7vh;
  `};
`;

const MeteorWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const BackgroundTitleWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 1000px;
  height: 600px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  justify-content: space-between;

  ${Media.small`    
    width:  300px;
    height: 230px;
    left: 50%;
    top: 50%;
  `};
`;

const BackgroundTitle = styled(motion.div)`
  font-size: 100px;
  font-weight: 700;
  color: #494949d6;
  letter-spacing: 20px;
  text-shadow: 3px 4px 5px #000000;
  z-index: 2;

  ${Media.small`    
    font-size: 25px;
  `};
`;

const Title = styled(motion.div)`
  font-size: 80px;
  font-weight: 500;
  margin: 10px auto;
  width: 100%;
  position: relative;

  ${Media.small`    
    font-size: 20px;
  `};
`;

const Arrow = styled(motion.div)`
  width: 150px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  ${Media.small`    
    position:relative;
    top:0;
    margin-top: 20px;
  `};
`;

const arrowVariants = {
  animate: (i: number) => ({
    y: [0, 20, 0],
    opacity: [1, 0.5, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 0.5,
      delay: i * 0.25,
    },
  }),
};

const titleVariants = (direction: string) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -100 : 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
});

const Intro = () => {
  const controls = useAnimation();
  const arrowControls = useAnimation();
  const [borderVisible, setBorderVisible] = useState(false);

  useEffect(() => {
    const sequence = async () => {
      await controls.start("visible");
      setBorderVisible(true);
      await arrowControls.start("visible");
    };

    sequence();
  }, [controls, arrowControls]);

  return (
    <Wrapper>
      <MeteorWrapper>
        <MeteorEffect />
      </MeteorWrapper>
      <BackgroundTitleWrapper>
        <BackgroundTitle
          style={{ textAlign: "left" }}
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          WELCOME
        </BackgroundTitle>
        <BackgroundTitle
          style={{ textAlign: "right" }}
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          HELLO!
        </BackgroundTitle>
      </BackgroundTitleWrapper>

      <TitleWrapper
        initial="hidden"
        animate={controls}
        borderVisible={borderVisible}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.3,
              when: "afterChildren",
            },
          },
        }}
      >
        {["INSIK'S", "FRONT-END", "PORTFOLIO"].map((text, index) => (
          <Title
            key={index}
            custom={index % 2 === 0 ? "left" : "right"}
            variants={titleVariants(index % 2 === 0 ? "left" : "right")}
          >
            {text}
          </Title>
        ))}
      </TitleWrapper>
      <Arrow
        initial="hidden"
        animate={arrowControls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 1 } },
        }}
      >
        <p>Scroll Down</p>
        {[0, 1].map((i) => (
          <motion.svg
            key={i}
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            variants={arrowVariants}
            custom={i}
            animate="animate"
          >
            <path
              d="M12 16L6 10L7.41 8.59L12 13.17L16.59 8.59L18 10L12 16Z"
              fill="currentColor"
            />
          </motion.svg>
        ))}
      </Arrow>
    </Wrapper>
  );
};

export default Intro;
