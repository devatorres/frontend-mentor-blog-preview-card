import { Card } from "../Card";
import { useBlogCards } from "../../hooks";
import "./CardList.css";

export const CardList = () => {
  const { cards } = useBlogCards(); // Simulate call

  return (
    <section className="card-list">
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </section>
  );
};
