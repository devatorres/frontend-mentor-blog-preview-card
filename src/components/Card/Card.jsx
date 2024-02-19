import { Illustration } from "./components";
import { Body, Subtitle, Title } from "../Texts";
import { Badge, Avatar } from "../../components";
import "./Card.css";

export const Card = ({ card }) => {
  return (
    <article id={card.id} role="card" className="card cartoon">
      <Illustration />
      <Badge color="yellow">{card.badge}</Badge>
      <Subtitle mt={1} mb={1}>
        {card.subtitle}
      </Subtitle>
      <Title link={card.title.link}>{card.title.content}</Title>
      <Body mt={1} mb={1.5}>
        {card.body}
      </Body>
      <Avatar avatar={card.avatar} />
    </article>
  );
};
