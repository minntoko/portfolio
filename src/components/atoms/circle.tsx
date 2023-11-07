import styled from "styled-components";

type Props = {
  label: string;
  deg: number;
  color: string;
};

const Circle = ( {label, deg, color}: Props ) => {
  return (
    <SCircle deg={deg} color={color}>
      <SLabel>
        <p>{label}</p>
      </SLabel>
    </SCircle>
  );
}

const SCircle = styled.div<{deg:number, color:string}>`
  position: relative;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: ${(props) => `conic-gradient(${props.color} 0deg ${props.deg}deg, #eee ${props.deg}deg 360deg)`};
`;

const SLabel = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
  color: #333;
`;

export default Circle;