import styled, { keyframes } from "styled-components";

interface LoadingSpinProps {
  strokeColor?: string;
  size?: number;
  margin?: string;
}

function LoadingSpin({
  strokeColor = "black",
  size = 100,
  margin = "0px",
}: LoadingSpinProps) {
  return (
    <Svg
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      margin={margin}
    >
      <Circle
        cx={size / 2}
        cy={size / 2}
        r={size * 0.4}
        strokeWidth={size * 0.1}
        strokeColor={strokeColor}
      />
    </Svg>
  );
}

export default LoadingSpin;

// https://glennmccomb.com/articles/building-a-pure-css-animated-svg-spinner/

const rotate = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg)
  }
`;

const circleAnimation = keyframes`
  0%,
  25% {
    stroke-dashoffset: 280;
    transform: rotate(0);
  }
  
  50%,
  75% {
    stroke-dashoffset: 75;
    transform: rotate(45deg);
  }
  
  100% {
    stroke-dashoffset: 280;
    transform: rotate(360deg);
  }
`;

interface CircleProps {
  strokeColor: string;
}

const Circle = styled.circle<CircleProps>`
  animation: ${circleAnimation} 1.4s ease-in-out infinite both;
  display: block;
  fill: transparent;
  stroke: ${(props) => props.strokeColor};
  stroke-linecap: round;
  stroke-dasharray: 283;
  stroke-dashoffset: 280;
  stroke-width: ${(props) => props.strokeWidth};
  transform-origin: 50% 50%;
`;

const Svg = styled.svg<{ margin: string }>`
  animation: ${rotate} 2s linear infinite;
  margin: ${(props) => props.margin};
`;
