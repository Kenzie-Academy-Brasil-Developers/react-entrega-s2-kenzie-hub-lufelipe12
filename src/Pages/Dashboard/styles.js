import styled from "styled-components";

export const Container = styled.div`
  width: 300px;

  section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  hr {
    border: 1px solid var(--grey-3);
  }
`;

export const DivTecnologies = styled.div`
  width: 285px;
  min-height: 400px;
  max-height: 700px;
  padding: 10px;
  background-color: var(--grey-3);
  display: flex;
  justify-content: center;
  align-content: flex-start;
`;

export const StyledButton = styled.button`
  width: 32px;
  height: 32px;
  background-color: var(--grey-3);
  color: var(--grey-0);
  border: 0;
  border-radius: 5px;

  :hover {
    cursor: pointer;
    background-color: var(--grey-2);
  }
`;