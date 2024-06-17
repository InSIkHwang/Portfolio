import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import styled from "styled-components";
import { FaGithub, FaInstagram } from "react-icons/fa";
import Toast from "../Components/Toast";
import Media from "../Components/Media";

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
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

const ContactWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  border: 1px solid #fff;
  padding: 50px;

  ${Media.small`
    padding: 30px;
  `};
`;

const ContactItem = styled(motion.div)`
  font-size: 18px;
  margin-bottom: 10px;
  cursor: pointer;

  ${Media.small`
    font-size: 14px;
  `};
`;

const ContactIconWrapper = styled(motion.div)`
  display: flex;
  margin-top: 50px;
  justify-content: center;
`;

const StyledFaGithub = styled(FaGithub)`
  width: 50px;
  height: 50px;
  margin: 0 15px;
  cursor: pointer;

  ${Media.small`
    width: 30px;
    height: 30px;
  `};
`;

const StyledFaInstagram = styled(FaInstagram)`
  width: 50px;
  height: 50px;
  margin: 0 15px;
  cursor: pointer;

  ${Media.small`
    width: 30px;
    height: 30px;
  `};
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

const Footer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  height: 100px;
  font-size: 13px;
  color: rgb(124, 124, 124);
  border-top: 1px solid rgb(124, 124, 124);
`;

const underlineVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1 },
};

const wrapperVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hoverColor: {
    color: "#aaa",
    transition: { duration: 0.5, staggerChildren: 0.2 },
  },
  hoverSize: {
    scale: 1.2,
    transition: { duration: 0.5, staggerChildren: 0.2 },
  },
};

interface AnimatedUnderlineProps {
  delay: number;
}

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

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [toast, setToast] = useState(false);

  const githubUrl = "https://github.com/InSIkHwang";
  const instaUrl = "https://www.instagram.com/in_sikkk/";

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setToast(true);
  };

  return (
    <Container>
      <Title>
        CONTACT
        <AnimatedUnderline delay={0} />
      </Title>
      <ContactWrapper
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={wrapperVariants}
      >
        <ContactItem
          whileHover="hoverColor"
          variants={itemVariants}
          onClick={() => copyToClipboard("010-2446-5023")}
        >
          PHONE : 010-2446-5023
        </ContactItem>
        <ContactItem
          whileHover="hoverColor"
          variants={itemVariants}
          onClick={() => copyToClipboard("hwanginsick@gmail.com")}
        >
          E-MAIL : hwanginsick@gmail.com
        </ContactItem>
        <ContactIconWrapper>
          <motion.div
            whileHover="hoverSize"
            variants={itemVariants}
            onClick={() => {
              window.open(githubUrl);
            }}
          >
            <StyledFaGithub />
          </motion.div>
          <motion.div
            whileHover="hoverSize"
            variants={itemVariants}
            onClick={() => {
              window.open(instaUrl);
            }}
          >
            <StyledFaInstagram />
          </motion.div>
        </ContactIconWrapper>
      </ContactWrapper>
      {toast && (
        <Toast setToast={setToast} text="🖇 클립보드에 복사되었습니다." />
      )}
      <Footer>© Copyright 2024. INSIK All rights reserved.</Footer>
    </Container>
  );
};

export default Contact;
