import { motion } from "framer-motion";
import styled from "styled-components";
import ExperienceDetail from "./ExperienceDetail";
import { useState } from "react";

const Wrapper = styled.div`
  margin: 80px auto;
  width: 900px;
`;

const Title = styled(motion.div)`
  font-size: 26px;
  font-weight: 500;
`;

const ListWrapper = styled(motion.ul)`
  margin-top: 50px;
  display: flex;
  gap: 20px;
  height: 240px;
`;

const List = styled(motion.li).attrs(() => ({
  whileHover: { scale: 1.05, backgroundColor: "#33333a" },
  transition: { type: "Tween" },
}))`
  position: relative;
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 10px 15px;
  flex: 1;
  text-align: center;
`;

const ListTitle = styled(motion.div)`
  font-size: 17px;
  font-weight: 500;
  border-bottom: 1px solid #fff;
  padding-bottom: 5px;
`;

const ListDesc = styled(motion.div)`
  margin: 20px 0;
  font-size: 15px;
  font-weight: 300;
  text-align: left;
  line-height: 25px;
`;

const MoreBtn = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  cursor: pointer;
`;

const experienceData = [
  {
    id: 2,
    title: "프론트엔드 개발자 취업캠프",
    date: "2023.12 ~ 2024.04",
    desc: "멀티캠퍼스에서 진행하는 프론트엔드 개발자 취업캠프(React)에 참가하여 약 5개월 동안 HTML, CSS, Javascript, React 등을 배웠고 최종 프로젝트인 티켓 예매 사이트 '티켓퐁'을 개발했습니다.",
    role: "상세페이지(예매, 결제, 상세), 마이페이지(예매 확인, 후기, 사용자 기기 등록/수정), 관리자페이지(후기), 프로젝트 총괄",
    award: "최우수상",
  },
  {
    id: 0,
    title: "국민행복 서비스 발굴 창업경진대회",
    date: "2022.04 ~ 2022.07",
    desc: "보건복지부 추최의 사회보장정보와 공공·민간 빅데이터를 활용한 '국민행복 서비스 발굴·창업 경진대회'에 참가했습니다.",
    role: "관련 연구 및 현 시스템 분석, 시스템 구성",
    award: "입선",
  },
  {
    id: 1,
    title: "국방 데이터 활용 경진대회",
    date: "2022.06 ~ 2022.08",
    desc: "국방 공공데이터를 활용한 창의적 아이디어 및 비즈니스 모델 발굴을 통한 사회적 가치 창출을 위하여 '2022 국방 공공데이터 활용 창업경진대회'에 참가했습니다.",
    role: "활용 가능 데이터 조사, UI 디자인",
    award: "예선 탈락",
  },
];

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState<{
    id: number;
    title: string;
    desc: string;
    date: string;
    award: string;
    role: string;
  } | null>(null);

  const handleClose = () => {
    setSelectedExperience(null);
  };
  return (
    <Wrapper>
      <Title>EXPERIENCE</Title>
      <ListWrapper>
        {experienceData.map((experience, index) => (
          <List
            key={index}
            onClick={() =>
              setSelectedExperience({
                ...experience,
              })
            }
          >
            <ListTitle>{experience.title}</ListTitle>
            <ListDesc>{experience.desc}</ListDesc>
            <MoreBtn>More..</MoreBtn>
          </List>
        ))}
      </ListWrapper>
      {selectedExperience && (
        <ExperienceDetail
          isOpen={!!selectedExperience}
          onClose={handleClose}
          title={selectedExperience.title}
          desc={selectedExperience.desc}
          role={selectedExperience.role}
          date={selectedExperience.date}
          award={selectedExperience.award}
          id={selectedExperience.id}
        />
      )}
    </Wrapper>
  );
};

export default Experience;
