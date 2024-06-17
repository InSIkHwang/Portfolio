import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import logoImg from "../Assets/img/logo.png";

const Nav = styled(motion.div)`
  position: fixed;
  display: flex;
  top: 0;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  justify-content: space-between;
  color: white;
  font-weight: 500;
  z-index: 99;
  background-color: #1b1b1ec1;
`;

const Logo = styled.div`
  background-image: url(${logoImg});
  background-size: contain;
  background-repeat: no-repeat;
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg)
    brightness(102%) contrast(102%);
  height: 80px;
  width: 80px;
  margin-left: 20px;
  cursor: pointer;
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
`;

interface ItemProps {
  active?: boolean;
}

const Item = styled.li<ItemProps>`
  margin-right: 20px;
  color: ${(props) => (props.active ? "#fff" : "#bbb")};
  transition: color 0.3s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;

const Header = () => {
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.hash.substring(1);
    setActiveSection(currentPath || "intro");
  }, [location]);

  return (
    <Nav>
      <Logo onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
      <Items>
        <Item active={activeSection === "intro"}>
          <Link to="/#intro">INTRO</Link>
        </Item>
        <Item active={activeSection === "about"}>
          <Link to="/#about">ABOUT</Link>
        </Item>
        <Item active={activeSection === "skills"}>
          <Link to="/#skills">SKILLS</Link>
        </Item>
        <Item active={activeSection === "works"}>
          <Link to="/#works">WORKS</Link>
        </Item>
        <Item active={activeSection === "contact"}>
          <Link to="/#contact">CONTACT</Link>
        </Item>
      </Items>
    </Nav>
  );
};

export default Header;
