import React from "react";
import {
  CardContainer,
  CardImage,
  CardLink,
  CardTags,
  CardText,
  CardTitle,
  Tag,
} from "./CardElements";
import { PiDesktop, PiGithubLogo } from "react-icons/pi";

const Card = ({ title, image, text, link1, link2, tags }) => {
  return (
    <CardContainer>
      <CardTitle>
        {title}
        <div style={{ display: "flex", gap: "2rem" }}>
          {link1 && (
            <CardLink href={link1} target="_blank">
              <PiGithubLogo style={{ color: "var(--cream)" }} />
            </CardLink>
          )}

          {link2 && (
            <CardLink href={link2} target="_blank">
              <PiDesktop style={{ color: "var(--cream)" }} />
            </CardLink>
          )}
        </div>
      </CardTitle>
      <CardImage src={image} alt="card-image-fasd" />
      <CardText>{text}</CardText>
      <CardTags>
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </CardTags>
    </CardContainer>
  );
};

export default Card;
