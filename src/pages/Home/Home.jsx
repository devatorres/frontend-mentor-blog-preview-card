import { CardList, ResponsiveWrapper } from "../../components";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <ResponsiveWrapper>
        <CardList />
      </ResponsiveWrapper>
    </div>
  );
};
