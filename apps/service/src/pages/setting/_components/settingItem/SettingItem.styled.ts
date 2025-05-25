import styled from "@emotion/styled";

export const SettingItemComponentWrapper = styled.button`
  display: flex;

  padding: 1.25rem 0.25rem;

  border-bottom: 1px solid ${({ theme }) => theme.borderColors.grayLight};

  cursor: pointer;
`;
