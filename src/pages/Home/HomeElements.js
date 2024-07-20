import { Link } from "react-router-dom";
import styled from "styled-components";

export const SectionBox = styled.section`
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
export const SectionTitle = styled.h2`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: ${(props) => props.theme.titleSection.color};
    width: 100%;
    font-size: clamp(4rem, 7vw, 5rem);
`
export const Line = styled.div`
    background-color: ${(props) => props.theme.lineColor.background};
    max-width: 70rem;
    width: 100%;
    height: .2rem;
`

export const Description = styled.p`
    margin-top: 2rem;
    font-size: 2rem;
    max-width: 90rem;
    line-height: 3.5rem;
   
`

export const StyledLinkButton = styled(Link)`
    background-color: ${(props) => props.theme.buttons.background};
    color: ${(props) => props.theme.buttons.color};
    padding: 1rem;
    border-radius: .4rem;
    margin-top: 1em;
    font-weight: 500;
`