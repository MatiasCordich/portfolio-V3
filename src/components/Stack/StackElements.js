import styled from "styled-components";

export const StackContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    margin-top: 2rem;
    color: var(--coffe);
`

export const StackTitle = styled.h3`
    font-size: 2.5rem;
    color: ${(props) => props.theme.color};
`

export const StackList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
`

export const StackItem = styled.li`
    color: ${(props) => props.theme.color};
`