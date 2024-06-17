import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";
import cssIcon from "../Assets/img/skills/css3.png";
import figmaIcon from "../Assets/img/skills/figma.png";
import gitIcon from "../Assets/img/skills/git.png";
import htmlIcon from "../Assets/img/skills/html5.png";
import jsIcon from "../Assets/img/skills/javascript.png";
import postmanIcon from "../Assets/img/skills/postman.png";
import reactIcon from "../Assets/img/skills/react.png";
import styledComponentsIcon from "../Assets/img/skills/styled-components.png";
import tsIcon from "../Assets/img/skills/typescript.png";
import vscodeIcon from "../Assets/img/skills/vscode.png";
import Media from "../Components/Media";

const Container = styled.div`
  position: relative;
  max-width: 950px;
  height: 90vh;
  margin: 0 auto;
  margin-top: 200px;
  box-sizing: border-box;
  overflow: visible;

  ${Media.small`
    margin-top: 100px;
    height: 70vh;
  `};
`;

const Title = styled(motion.div)`
  font-size: 28px;
  margin: 10px auto;
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

const Info = styled(motion.div)`
  opacity: 0;
  margin: 0 auto;
  width: 100px;
  height: 100px;
  text-align: center;
  font-size: 14px;
  position: absolute;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SkillWrapper = styled(motion.div)`
  margin: 80px auto;

  ${Media.small`
    width:90vw;
  `};
`;

const Category = styled(motion.div)`
  display: inline-block;
  padding: 5px 10px;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
  border: 1px solid #fff;
  border-style: none solid;
  border-radius: 5px;
  text-shadow: 2px 2px 2px #555;

  ${Media.small`
    font-size: 12px;
    margin-bottom: 10px;
  `};
`;

const ItemWrapper = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 130px;
  padding: 0 30px;

  ${Media.small`
    padding: 0 8px;
    min-height: 80px;
  `};
`;

const ItemRows = styled(motion.ul)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  ${Media.small`
    gap: 5px;
  `};
`;

const ItemBox = styled(motion.li)`
  position: relative;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 90px;
  height: 90px;
  background-color: #000000;
  border-radius: 5px;
  border: 1px solid rgb(30, 30, 35);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);

  ${Media.small`
    width: 50px;
  height: 50px;
  `};
`;

const Icon = styled(motion.div)`
  width: 50px;
  height: 50px;
  background-size: contain;
  background-repeat: no-repeat;

  ${Media.small`
    width: 25px;
  height: 25px;
  `};
`;

const InfoName = styled(motion.div)`
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 5px;
`;

const InfoLevel = styled(motion.div)`
  font-size: 12px;
  font-weight: 500;
`;

const IconOverlay = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #0000007d;
`;

const underlineVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1 },
};

const skillWrapperVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.2 },
  },
};

const itemBoxVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  hover: { scale: 1.05 },
};

const infoVariants = {
  hidden: { opacity: 0, y: 20 },
  hover: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const IconOverlayVariants = {
  hidden: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.3 } },
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

const frontEndSkills = [
  { icon: htmlIcon, name: "HTML5", level: "편해요" },
  { icon: cssIcon, name: "CSS3", level: "편해요" },
  { icon: jsIcon, name: "JavaScript", level: "편해요" },
  { icon: tsIcon, name: "TypeScript", level: "꽤 해봤어요" },
  { icon: reactIcon, name: "React", level: "편해요" },
  { icon: styledComponentsIcon, name: "Styled Components", level: "편해요" },
];

const tools = [
  { icon: gitIcon, name: "Git", level: "편해요" },
  { icon: figmaIcon, name: "Figma", level: "경험 있어요" },
  { icon: vscodeIcon, name: "VSCode", level: "편해요" },
  { icon: postmanIcon, name: "Postman", level: "꽤 해봤어요" },
];

const Skills = () => {
  const skillWrapperRef = useRef(null);
  const skillWrapperInView = useInView(skillWrapperRef, { once: false });

  return (
    <Container>
      <Title>
        SKILLS
        <AnimatedUnderline delay={0} />
      </Title>
      <SkillWrapper
        ref={skillWrapperRef}
        initial="hidden"
        animate={skillWrapperInView ? "visible" : "hidden"}
        variants={skillWrapperVariants}
      >
        <Category># FRONT-END</Category>
        <ItemWrapper>
          <ItemRows>
            {frontEndSkills.map((skill, index) => (
              <ItemBox
                key={index}
                variants={itemBoxVariants}
                whileHover="hover"
                initial="hidden"
                animate="visible"
              >
                <Icon style={{ backgroundImage: `url(${skill.icon})` }} />
                <IconOverlay variants={IconOverlayVariants} />
                <Info variants={infoVariants}>
                  <InfoName>{skill.name}</InfoName>
                  <InfoLevel>{skill.level}</InfoLevel>
                </Info>
              </ItemBox>
            ))}
          </ItemRows>
        </ItemWrapper>
      </SkillWrapper>
      <SkillWrapper
        initial="hidden"
        animate={skillWrapperInView ? "visible" : "hidden"}
        variants={skillWrapperVariants}
      >
        <Category># TOOLS</Category>
        <ItemWrapper>
          <ItemRows>
            {tools.map((tool, index) => (
              <ItemBox
                key={index}
                variants={itemBoxVariants}
                whileHover="hover"
                initial="hidden"
                animate="visible"
              >
                <Icon style={{ backgroundImage: `url(${tool.icon})` }} />
                <IconOverlay variants={IconOverlayVariants} />
                <Info variants={infoVariants}>
                  <InfoName>{tool.name}</InfoName>
                  <InfoLevel>{tool.level}</InfoLevel>
                </Info>
              </ItemBox>
            ))}
          </ItemRows>
        </ItemWrapper>
      </SkillWrapper>
    </Container>
  );
};

export default Skills;
