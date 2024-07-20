import styled from "styled-components";
import { HeaderDescription, HeaderLinks, HeaderTitle } from "../Header/HeaderElements";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 5rem;
`

export const HeaderNavTitle = styled(HeaderTitle)`
    font-size: 7rem;
    text-align: left;
`

export const HeaderNavText= styled(HeaderDescription)`
    font-size: 2rem;
    text-align: left;
`

export const HeaderNavLinks = styled(HeaderLinks)`
    text-align: left;
`

export const HeaderNavLinksPage = styled(HeaderLinks)`
    text-align: left;
    flex-direction: column;
    margin-top: 1.5rem;
`

export const StyledLink = styled(Link)`
    color: ${(props) => props.theme.links.color};
    &:hover{
        transform: translateX(.5rem);
        transition: 0.6s ease;
    }
`

