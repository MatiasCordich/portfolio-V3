import styled from "styled-components";

export const SwitcherBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 2rem;
`;

export const ButtonLang = styled.button`
  width: fit-content;
  background-color: ${(props) => props.theme.buttons.background};
  color: ${(props) => props.theme.buttons.color};
  padding: 1rem;
  border-radius: 0.5rem;
  font-weight: 800;
  cursor: pointer;
`;
