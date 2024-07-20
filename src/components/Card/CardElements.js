import styled from "styled-components";

export const CardContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  background-color: #efe0cc;
  padding: 1rem;
  border-radius: .6rem;
  max-width: 70rem;
  
`;

export const CardTitle = styled.h2`
  width: 100%;
  font-size: clamp(4rem, 2.5vw, 3rem);
  color: var(--coffe);
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

export const CardText = styled.p`
  color: var(--coffe);
  line-height: 4rem;
`;

export const CardLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 2rem;
  background-color: var(--coffe);
  font-weight: 200;
  padding: 0.7rem;
  border-radius: .5rem;
  cursor: pointer;
`;

export const CardTags = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  color:var(--cream);
`;

export const Tag = styled.li`
  background-color: var(--coffe);
  font-size: 1.8rem;
  font-weight: 300;
  border-radius: .3rem;
  padding: .5rem 1rem;
`;
