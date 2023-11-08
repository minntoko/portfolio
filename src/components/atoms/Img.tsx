import styled from "styled-components";

const SImg = styled.img`
  border: 10px solid #444;
  width: 90%;
  margin: 20px auto;
`;

const Img = () => {
  return <SImg src="./img/FlashOrder.png" alt="FlashOrder" />;
};

export default Img;