import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MdOpenInNew } from "react-icons/md";

import award1 from "../Assets/img/exp/camp/award1.jpg";
import award2 from "../Assets/img/exp/camp/award2.jpg";
import award3 from "../Assets/img/exp/camp/award3.png";
import certificates1 from "../Assets/img/exp/camp/certificates1.jpg";
import certificates2 from "../Assets/img/exp/camp/certificates2.jpg";
import result from "../Assets/img/exp/startup/result.jpg";

const campPDF: string = require("../Assets/pdf/exp/camp.pdf");
const defensePDF: string = require("../Assets/pdf/exp/defense.pdf");
const startUpPDF: string = require("../Assets/pdf/exp/startup.pdf");

const campImg = [award1, award2, award3, certificates1, certificates2];

const Modal = styled(motion.div)`
  position: fixed;
  width: 700px;
  height: 750px;
  background: #1b1b1e;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 80px;
  overflow-y: scroll;
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const Info = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 16px;
  line-height: 1.5;
`;

const Slider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BigImg = styled.div<{ bg: string }>`
  background-image: ${(props) => `url(${props.bg})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  width: 100%;
  height: 400px;
  margin: 10px 0;
  cursor: pointer;
`;

const SmallImgContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const SmallImg = styled.div<{ bg: string }>`
  width: 100px;
  height: 100px;
  background-image: ${(props) => `url(${props.bg})`};
  background-size: cover;
  background-position: center;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.5s ease-out;

  &:hover {
    border: 2px solid #fff;
  }
`;

const PDFBtn = styled.div`
  padding-top: 10px;
  position: relative;
  text-align: right;
  text-decoration: underline;
  font-weight: 500;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 32px;
  cursor: pointer;
  color: #fff;
`;

const ArrowBtn = styled(MdOpenInNew)`
  width: 24px;
  height: 24px;
  margin-left: 5px;
`;

const LinkP = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

interface ExperienceDetailProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  desc: string;
  date: string;
  award: string;
  role: string;
  id: number;
}

const ExperienceDetail = ({
  isOpen,
  onClose,
  title,
  desc,
  date,
  award,
  id,
  role,
}: ExperienceDetailProps) => {
  const [selectedImg, setSelectedImg] = useState(campImg[0]);

  useEffect(() => {
    if (isOpen) {
      setSelectedImg(campImg[0]);
    }
  }, [isOpen]);

  const handleImgClick = (url: string) => {
    window.open(url, "_blank");
  };

  if (!isOpen) return null;

  return (
    <>
      <Overlay
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <Modal
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
      >
        <CloseButton onClick={onClose}>×</CloseButton>
        <Title>{title}</Title>
        <Info>최종 결과: {award}</Info>
        <Info>참여 기간: {date}</Info>
        <Info>역할: {role}</Info>
        <Desc>{desc}</Desc>

        {id === 0 && (
          <>
            <PDFBtn>
              <Link to={startUpPDF} target="_blank">
                <LinkP>
                  사업계획서 PDF
                  <ArrowBtn />
                </LinkP>
              </Link>
            </PDFBtn>
            <Slider>
              <BigImg bg={result} onClick={() => handleImgClick(result!)} />
            </Slider>
          </>
        )}
        {id === 1 && (
          <>
            <PDFBtn>
              <Link to={defensePDF} target="_blank">
                <LinkP>
                  사업계획서 PDF
                  <ArrowBtn />
                </LinkP>
              </Link>
            </PDFBtn>
            <Slider />
          </>
        )}
        {id === 2 && (
          <>
            <PDFBtn>
              <Link to={campPDF} target="_blank">
                <LinkP>
                  최종 결과물(PDF)
                  <ArrowBtn />
                </LinkP>
              </Link>
            </PDFBtn>
            <Slider>
              <BigImg
                bg={selectedImg}
                onClick={() => handleImgClick(selectedImg!)}
              />
              <SmallImgContainer>
                {campImg.map((url, index) => (
                  <SmallImg
                    key={index}
                    bg={url}
                    onClick={() => setSelectedImg(url)}
                  />
                ))}
              </SmallImgContainer>
            </Slider>
          </>
        )}
      </Modal>
    </>
  );
};

export default ExperienceDetail;
