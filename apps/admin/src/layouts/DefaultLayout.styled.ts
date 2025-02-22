import styled from "@emotion/styled";

export const DefaultLayoutGrid = styled.section`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 16rem 1fr;
  height: 100vh;
`;
export const DefaultLayoutOutletWrapper = styled.section`
  display: flex;
  flex-direction: column;
  grid-row: 2 / 3;
  overflow-y: scroll;

  .tablet & {
    grid-column: 2 / 3;
  }
  .mobile & {
    grid-column: 1 / 3;
  }
`;
