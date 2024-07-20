import styled from "styled-components";

export const HeaderBox = styled.header`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: clamp(4rem, 7vw, 7rem);
  text-align: left;
  color: ${(props) => props.theme.titleNavHeader};
  display: flex;
  font-weight: 900;
  width: 100%;
  flex-direction: column;
`

export const StyledSpan = styled.span`
  text-align: center;
  color: ${(props) => props.theme.titleNavHeader};
  text-align: left;
`

export const HeaderDescription = styled.p`
  width: 100%;
  line-height: 4rem;
  text-align: left;
`

export const SpanBold = styled.span`
  font-weight: 700;
`

export const HeaderLinks = styled.ul`
  width: 100%;
  display: flex;
  gap: 3rem;
`

export const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const ResumeLink = styled.a`
  width: fit-content;
  background-color: ${(props) => props.theme.buttons.background};
  color: ${(props) => props.theme.buttons.color};
  padding: 1rem 3rem;
  border-radius: .5rem;
  font-weight: 500;
`



