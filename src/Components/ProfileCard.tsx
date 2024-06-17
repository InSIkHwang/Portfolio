import { motion, useInView } from "framer-motion";
import styled from "styled-components";
import idPhoto from "../Assets/img/IDphoto.jpg";
import { useRef } from "react";
import Media from "./Media";

const CardBox = styled(motion.div)`
  margin: 80px auto;
  width: 950px;
  border: 1px solid #f1f1f1;
  border-radius: 10px;

  ${Media.small`    
    width:90vw;
  `};
`;
const CardImgWrapper = styled(motion.div)`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-content: flex-start;
`;

const CardImgBox = styled(motion.div)`
  background-image: url(${idPhoto});
  background-size: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  width: 150px;
  height: 200px;
  margin: auto 30px;
  border-radius: 10px;

  ${Media.small`  
    width: 56.25px;  
    height: 75px;
  `};
`;

const CardInfo = styled(motion.div)`
  width: 80%;
  margin: 50px auto;

  ${Media.small`  
    margin: 10px auto 20px auto;
    width: 90%;
  `};
`;

const CardValues = styled(motion.div)`
  margin-top: 20px;
  width: 60%;
  h1 {
    font-size: 30px;
    margin-bottom: 10px;
  }
  h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  h3 {
    font-size: 28px;
    margin-bottom: 10px;
    text-shadow: 3px 3px 2px #666666;
    &:last-child {
      margin-left: 250px;
    }
  }

  ${Media.small`  
    width: 60%;

    h1 {
    font-size: 12px;
    margin-bottom: 5px;
  }
  h2 {
    font-size: 12px;
    margin-bottom: 5px;
  }
  h3 {
    font-size: 12px;
    margin-bottom: 5px;
    text-shadow: 3px 3px 2px #666666;
    &:last-child {
      margin-left: 0px;
    }    
  }
  `};
`;
const Education = styled(motion.div)`
  margin: 10px auto;
  display: flex;
  flex-wrap: wrap;
`;
const EducationTitle = styled(motion.div)`
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #fff;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;

  ${Media.small`  
    font-size: 10px;
  `};
`;
const EducationInfo = styled(motion.div)`
  margin-top: 10px;
  padding: 0 10px;
  border-left: 1px solid #fff;
  &.major {
    width: 50%;
  }
  &.name {
    padding-right: 10px;
    border: none;
  }

  ${Media.small`  
    margin-top: 3px;
  padding: 0 3px;
    font-size: 8px;
    &.major {
    width: 50%;
  }
  &.name {
    padding-right: 3px;
    border: none;
  }
  `};
`;

const cardItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ProfileCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <>
      <CardBox
        initial="hidden"
        ref={ref}
        animate={isInView ? "visible" : "hidden"}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <CardImgWrapper>
          <CardImgBox variants={cardItemVariants} />
          <CardValues>
            <motion.h1 variants={cardItemVariants}>황인식</motion.h1>
            <motion.h2 variants={cardItemVariants}>1998. 05. 17.</motion.h2>
            <motion.h3
              style={{
                marginLeft: 20,
              }}
              variants={cardItemVariants}
            >
              ❝ 많이 질문하고, 많이 찾아보는
            </motion.h3>
            <motion.h3 variants={cardItemVariants}>
              개발자 황인식입니다! ❞
            </motion.h3>
          </CardValues>
        </CardImgWrapper>
        <CardInfo>
          <Education variants={cardItemVariants}>
            <EducationTitle>학력</EducationTitle>
            <EducationInfo className="name">동서대학교 </EducationInfo>
            <EducationInfo>2017.03 ~ 2023.02</EducationInfo>
            <EducationInfo className="major">
              컴퓨터공학 전공 / 빅데이터과 복수 전공
            </EducationInfo>{" "}
          </Education>
          <Education variants={cardItemVariants}>
            <EducationInfo className="name">부산진고등학교</EducationInfo>
            <EducationInfo>2014.03 ~ 2017.02</EducationInfo>
            <EducationInfo className="major">자연계</EducationInfo>
          </Education>
          <Education variants={cardItemVariants}>
            <EducationTitle>자격증</EducationTitle>
            <EducationInfo className="name">정보처리기사 </EducationInfo>
            <EducationInfo>2024.06.18</EducationInfo>
            <EducationInfo>필기, 실기</EducationInfo>{" "}
          </Education>{" "}
          <Education variants={cardItemVariants}>
            <EducationInfo className="name">
              2종보통 자동차운전면허
            </EducationInfo>
            <EducationInfo>2018.01.26</EducationInfo>
          </Education>
        </CardInfo>
      </CardBox>
    </>
  );
};

export default ProfileCard;
