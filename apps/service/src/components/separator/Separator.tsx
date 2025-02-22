import styled from "@emotion/styled";

const SeparatorLine = styled.div`
  display: flex;

  width: 100%;

  height: 4px;

  background-color: ${({ theme }) => theme.backgroundColors.grayLight};
`;

const Separator = () => {
  return <SeparatorLine />;
};

export default Separator;
