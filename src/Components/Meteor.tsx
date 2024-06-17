import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Media from "./Media";

interface MeteorEffectProps {
  count?: number;
  maxDelay?: number;
  minSpeed?: number;
  maxSpeed?: number;
  angle?: number;
  direction?: "left" | "right";
}

const MeteorKeyframe = (
  direction: "left" | "right",
  angle: number
) => keyframes`
  0% {
    top: -10vh;
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    top: 110vh;
    transform: translateX(${direction === "left" ? "-" : "+"}${
  120 / Math.tan((angle * Math.PI) / 180)
}vh);
    opacity: 1;
  }
`;

const MeteorLayout = styled.div<{
  $direction: "left" | "right";
  $angle: number;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .star {
    position: relative;
    top: 50%;
    border-radius: 50%;
    background-color: white;
    opacity: 0;
    animation: ${({ $direction, $angle }) => MeteorKeyframe($direction, $angle)}
      4s ease-in infinite;

    &::after {
      position: absolute;
      top: calc(50% - 1px);
      left: -950%;
      width: 2000%;
      height: 2px;
      background: linear-gradient(to left, #fff0, #ffffff);
      content: "";
      transform: ${({ $direction, $angle }) =>
          $direction === "left"
            ? `rotateZ(-${$angle}deg)`
            : `rotateZ(-${180 - $angle}deg)`}
        translateX(50%);
    }
  }
`;

const MeteorEffect = ({
  count = 8,
  maxDelay = 15,
  minSpeed = 2,
  maxSpeed = 3,
  angle = 30,
  direction = "right",
}: MeteorEffectProps) => {
  const [starInterval, setStarInterval] = useState(0);

  useEffect(() => {
    const calcStarInterval = () => {
      const innerWidth = window.innerWidth;
      setStarInterval(Math.floor((innerWidth * 1.5) / (count * 5)));
    };

    calcStarInterval();
    window.addEventListener("resize", calcStarInterval);
    return () => {
      window.removeEventListener("resize", calcStarInterval);
    };
  }, [count]);

  const starCount = Math.min(count, 10);

  return (
    <MeteorLayout $direction={direction} $angle={angle}>
      {Array(starCount)
        .fill(0)
        .map((_, idx) => {
          const left =
            direction === "left"
              ? `${Math.random() * count * 5 * starInterval}px`
              : `${
                  window.innerHeight - Math.random() * count * 5 * starInterval
                }px`;
          const animationDelay = `${Math.random() * maxDelay}s`;
          const animationDuration =
            maxSpeed > minSpeed
              ? `${minSpeed + Math.random() * maxSpeed}s`
              : `${2 + Math.random() * 4}`;
          const size = `${2 + Math.floor(Math.random() * 5)}px`;
          const boxShadow = `0px 0px 10px 2px #ffffff`;

          return (
            <div
              key={idx}
              style={{
                left,
                animationDelay,
                animationDuration,
                boxShadow,
                width: size,
                height: size,
              }}
              className="star"
            />
          );
        })}
    </MeteorLayout>
  );
};

export default MeteorEffect;
