import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { MdOpenInNew } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

import campMain from "../Assets/img/work/camp/main.png";
import campManage from "../Assets/img/work/camp/managepage.png";
import campMypage from "../Assets/img/work/camp/mypage.png";
import campTicketing from "../Assets/img/work/camp/ticketing.png";

import sikMain from "../Assets/img/work/sikflix/main.png";
import sikInfo from "../Assets/img/work/sikflix/info.png";
import sikRank from "../Assets/img/work/sikflix/rank.png";
import sikSearch from "../Assets/img/work/sikflix/search.png";

import coinMain from "../Assets/img/work/coin/main.png";
import coinInfo from "../Assets/img/work/coin/info.png";

import toDoMain from "../Assets/img/work/todo/main.png";
import toDoDrag from "../Assets/img/work/todo/drag.png";
import toDoRemove from "../Assets/img/work/todo/remove.png";

const campImgs = [campMain, campManage, campMypage, campTicketing];
const sikFlixImgs = [sikMain, sikInfo, sikRank, sikSearch];
const coinImgs = [coinMain, coinInfo];
const toDoImgs = [toDoMain, toDoDrag, toDoRemove];

const Item = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
`;

const ImgWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  box-sizing: border-box;
`;

const InfoWrapper = styled.div`
  position: relative;
  padding-top: 20px;
  margin: 15px auto;
  font-size: 14px;
  width: 700px;
`;

const InfoTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  padding-bottom: 15px;
`;
const InfoDesc = styled.div`
  padding-bottom: 20px;
`;
const InfoListWrapper = styled.div``;
const InfoList = styled.div`
  display: flex;
  padding: 5px 0 15px 0;
  border-top: 1px solid #999;
`;
const InfoListTitle = styled.div`
  width: 120px;
  margin-right: 5px;
  border-right: 1px solid #fff;
  font-weight: 500;
`;
const InfoListDesc = styled.div`
  width: 580px;
`;

const ImgMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  box-sizing: border-box;
  margin: 0 auto;
  height: 350px;
  margin-bottom: 15px;
  img {
    height: 350px;
  }
`;
const ImgList = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  justify-content: center;
`;
const SmallImg = styled(motion.img)<{ isSelected: boolean }>`
  width: 15%;
  max-height: 100px;
  object-fit: contain;
  filter: ${(props) => (props.isSelected ? "brightness(30%)" : "none")};
  cursor: pointer;
`;

const InfoLinkWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;
const InfoLink = styled(motion.div)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 40px;
  margin-right: 15px;
  background-color: #333;
`;
const WindowIcon = styled(MdOpenInNew)`
  width: 30px;
  height: 30px;
  padding-right: 10px;
`;
const GithubIcon = styled(FaGithub)`
  width: 30px;
  height: 30px;
  padding-right: 10px;
`;

const SmallImgVariants = {
  default: { outline: "1px solid #ffffff0" },
  select: { outline: "1px solid #ffffff", transition: { duration: 0.3 } },
};

interface SmallImgMotionProps {
  src: string;
  alt: string;
  isSelected: boolean;
  onClick: () => void;
}

const SmallImgMotion = ({
  src,
  alt,
  isSelected,
  onClick,
}: SmallImgMotionProps) => {
  return (
    <SmallImg
      isSelected={isSelected}
      src={src}
      alt={alt}
      onClick={onClick}
      variants={SmallImgVariants}
      initial="default"
      whileHover="select"
    />
  );
};

const WorkItems = ({ itemIndex }: { itemIndex: number }) => {
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const ticketpongGithubUrl = "https://github.com/Ticketpong";
  const sikflixUrl = "https://insikhwang.github.io/Sikflix/";
  const sikflixGithubUrl =
    "https://github.com/InSIkHwang/Sikflix?tab=readme-ov-file";
  const coinUrl = "https://insikhwang.github.io/Coins_Info_App/";
  const coinGithubUrl = "https://github.com/InSIkHwang/Coins_Info_App";
  const toDoUrl = "https://insikhwang.github.io/ReactDragDrop_ToDo/";
  const TodoGithubUrl = "https://github.com/InSIkHwang/ReactDragDrop_ToDo";

  useEffect(() => {
    if (itemIndex === 0) {
      setMainImage(campImgs[0]);
      setSelectedImage(campImgs[0]);
    } else if (itemIndex === 1) {
      setMainImage(sikFlixImgs[0]);
      setSelectedImage(sikFlixImgs[0]);
    } else if (itemIndex === 2) {
      setMainImage(coinImgs[0]);
      setSelectedImage(coinImgs[0]);
    } else if (itemIndex === 3) {
      setMainImage(toDoImgs[0]);
      setSelectedImage(toDoImgs[0]);
    }
  }, [itemIndex]);

  const handleImageClick = (img: string) => {
    setMainImage(img);
    setSelectedImage(img);
  };

  const items = [
    <Item key="1">
      <ImgWrapper>
        <ImgMain>
          {mainImage && itemIndex === 0 && (
            <img src={mainImage} alt="Main Image" />
          )}
        </ImgMain>
        <ImgList>
          {campImgs.map((img, index) => (
            <SmallImgMotion
              isSelected={selectedImage === img}
              key={index}
              src={img}
              alt={`Camp ${index}`}
              onClick={() => handleImageClick(img)}
            />
          ))}
        </ImgList>
      </ImgWrapper>
      <InfoWrapper>
        <InfoTitle>티켓 할인 예매 사이트 "TICKETPONG" </InfoTitle>
        <InfoDesc>
          멀티잇 프론트엔드 개발자 프로그램 참여 중 진행한 티켓 할인 예매 사이트
          "티켓퐁"입니다. 티켓 예매 사이트 티켓퐁은 독점 방지를 위한 예매사이트
          분산의 필요성과 소비자 편의성 제공을 목적으로 시작한 프로젝트입니다.
        </InfoDesc>
        <InfoListWrapper>
          <InfoList>
            <InfoListTitle>주요 기능</InfoListTitle>
            <InfoListDesc>
              로그인 및 회원 가입, 카테고리별 공연 슬라이드, 위치 기반 공연
              조회, 예매 및 결제 기능, 사용자별 기기 등록, 커뮤니티 페이지 등
            </InfoListDesc>
          </InfoList>
          <InfoList>
            <InfoListTitle>사용 기술</InfoListTitle>
            <InfoListDesc>
              JavaScript, React, NodeJS, MariaDB, ExpressJS
            </InfoListDesc>
          </InfoList>
        </InfoListWrapper>
        <InfoLinkWrapper>
          <InfoLink
            onClick={() => {
              window.open(ticketpongGithubUrl);
            }}
            variants={SmallImgVariants}
            initial="default"
            whileHover="select"
          >
            <GithubIcon />
            GitHub
          </InfoLink>
        </InfoLinkWrapper>
      </InfoWrapper>
    </Item>,
    <Item key="2">
      <ImgWrapper>
        <ImgMain>
          {mainImage && itemIndex === 1 && (
            <img src={mainImage} alt="Main Image" />
          )}
        </ImgMain>
        <ImgList>
          {sikFlixImgs.map((img, index) => (
            <SmallImgMotion
              isSelected={selectedImage === img}
              key={index}
              src={img}
              alt={`Sikflix ${index}`}
              onClick={() => handleImageClick(img)}
            />
          ))}
        </ImgList>
      </ImgWrapper>
      <InfoWrapper>
        <InfoTitle>영화, TV시리즈 검색 사이트 "SIKFLIX"</InfoTitle>
        <InfoDesc>
          영화, TV시리즈 검색 사이트 "SIKFLIX"는 사용자가 영화 정보를 쉽게
          검색하고 조회할 수 있도록 제작된 프로젝트입니다.
        </InfoDesc>
        <InfoListWrapper>
          <InfoList>
            <InfoListTitle>주요 기능</InfoListTitle>
            <InfoListDesc>
              컨텐츠 검색, 컨텐츠 상세 정보 조회, 인기 컨텐츠 목록, 장르별
              컨텐츠 목록 등
            </InfoListDesc>
          </InfoList>
          <InfoList>
            <InfoListTitle>사용 기술</InfoListTitle>
            <InfoListDesc>JavaScript, React, API</InfoListDesc>
          </InfoList>
        </InfoListWrapper>
        <InfoLinkWrapper>
          <InfoLink
            onClick={() => {
              window.open(sikflixGithubUrl);
            }}
            variants={SmallImgVariants}
            initial="default"
            whileHover="select"
          >
            <GithubIcon />
            GitHub
          </InfoLink>
          <InfoLink
            onClick={() => {
              window.open(sikflixUrl);
            }}
            variants={SmallImgVariants}
            initial="default"
            whileHover="select"
          >
            <WindowIcon />
            바로가기
          </InfoLink>
        </InfoLinkWrapper>
      </InfoWrapper>
    </Item>,
    <Item key="3">
      <ImgWrapper>
        <ImgMain>
          {mainImage && itemIndex === 2 && (
            <img src={mainImage} alt="Main Image" />
          )}
        </ImgMain>
        <ImgList>
          {coinImgs.map((img, index) => (
            <SmallImgMotion
              isSelected={selectedImage === img}
              key={index}
              src={img}
              alt={`Coin ${index}`}
              onClick={() => handleImageClick(img)}
            />
          ))}
        </ImgList>
      </ImgWrapper>
      <InfoWrapper>
        <InfoTitle>암호화폐 정보 제공 사이트 "COINS INFO"</InfoTitle>
        <InfoDesc>
          암호화폐 정보 제공 사이트 "COINS INFO"는 사용자가 다양한 암호화폐의
          정보를 조회하고, 최신 가격 변동 사항을 확인할 수 있도록 제작된
          프로젝트입니다.
        </InfoDesc>
        <InfoListWrapper>
          <InfoList>
            <InfoListTitle>주요 기능</InfoListTitle>
            <InfoListDesc>
              암호화폐 검색, 암호화폐 상세 정보 조회, 실시간 가격 정보 등
            </InfoListDesc>
          </InfoList>
          <InfoList>
            <InfoListTitle>사용 기술</InfoListTitle>
            <InfoListDesc>JavaScript, React, API</InfoListDesc>
          </InfoList>
        </InfoListWrapper>
        <InfoLinkWrapper>
          <InfoLink
            onClick={() => {
              window.open(coinGithubUrl);
            }}
            variants={SmallImgVariants}
            initial="default"
            whileHover="select"
          >
            <GithubIcon />
            GitHub
          </InfoLink>
          <InfoLink
            onClick={() => {
              window.open(coinUrl);
            }}
            variants={SmallImgVariants}
            initial="default"
            whileHover="select"
          >
            <WindowIcon />
            바로가기
          </InfoLink>
        </InfoLinkWrapper>
      </InfoWrapper>
    </Item>,
    <Item key="4">
      <ImgWrapper>
        <ImgMain>
          {mainImage && itemIndex === 3 && (
            <img src={mainImage} alt="Main Image" />
          )}
        </ImgMain>
        <ImgList>
          {toDoImgs.map((img, index) => (
            <SmallImgMotion
              isSelected={selectedImage === img}
              key={index}
              src={img}
              alt={`ToDo ${index}`}
              onClick={() => handleImageClick(img)}
            />
          ))}
        </ImgList>
      </ImgWrapper>
      <InfoWrapper>
        <InfoTitle>할 일 관리 애플리케이션 "ToDo App"</InfoTitle>
        <InfoDesc>
          할 일 관리 애플리케이션 "ToDo App"은 사용자가 할 일을 추가, 삭제,
          정리할 수 있도록 제작된 프로젝트입니다.
        </InfoDesc>
        <InfoListWrapper>
          <InfoList>
            <InfoListTitle>주요 기능</InfoListTitle>
            <InfoListDesc>
              할 일 추가, 삭제, Drag & Drop으로 순서 변경 등
            </InfoListDesc>
          </InfoList>
          <InfoList>
            <InfoListTitle>사용 기술</InfoListTitle>
            <InfoListDesc>JavaScript, React, Drag & Drop</InfoListDesc>
          </InfoList>
        </InfoListWrapper>
        <InfoLinkWrapper>
          <InfoLink
            onClick={() => {
              window.open(TodoGithubUrl);
            }}
            variants={SmallImgVariants}
            initial="default"
            whileHover="select"
          >
            <GithubIcon />
            GitHub
          </InfoLink>
          <InfoLink
            onClick={() => {
              window.open(toDoUrl);
            }}
            variants={SmallImgVariants}
            initial="default"
            whileHover="select"
          >
            <WindowIcon />
            바로가기
          </InfoLink>
        </InfoLinkWrapper>
      </InfoWrapper>
    </Item>,
  ];

  return <div>{items[itemIndex]}</div>;
};

export default WorkItems;
