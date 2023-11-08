import styled from "styled-components";

const SHeadline = styled.h2`
  height: 52px;
  margin: 0;
  position: relative;
  padding: 1px 52px 5px 15px;
  background: #222;
  font-size: 24px;
  line-height: 45px;
  vertical-align: middle;
  color: white;
  z-index: 1;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0px;
    width: 0;
    height: 0;
    border: none;
    border-right: solid 40px #fff;
    border-top: solid 52px transparent;
  }
`;

type Props = {
  title: string;
};

const Headline = ({title}: Props) => {
  return <SHeadline>{title}</SHeadline>;
};

export default Headline;
