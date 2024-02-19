import { MouseParallaxChild } from "react-parallax-mouse";

import Arrows from "../../../../assets/images/illustration/arrows.png";
import Badge01 from "../../../../assets/images/illustration/badge01.png";
import Badge02 from "../../../../assets/images/illustration/badge02.png";
import Badge03 from "../../../../assets/images/illustration/badge03.png";
import BadgeBig from "../../../../assets/images/illustration/badgeBig.png";
import LineBlack from "../../../../assets/images/illustration/lineBlack.png";
import LineWhite from "../../../../assets/images/illustration/lineWhite.png";
import RectangleBig from "../../../../assets/images/illustration/rectangleBig.png";

import "./Illustration.css";

export const Illustration = () => {
  return (
    <div className="illustration" role="img">
      <MouseParallaxChild className="wr-element" factorX={0.1} factorY={0.1}>
        <img src={Arrows} alt="Illustration element" />
      </MouseParallaxChild>
      <MouseParallaxChild className="wr-element" factorX={0.1} factorY={0.1}>
        <img src={Badge03} alt="Illustration element" />
      </MouseParallaxChild>
      <MouseParallaxChild className="wr-element" factorX={0.2} factorY={-0.1}>
        <img src={Badge02} alt="Illustration element" />
      </MouseParallaxChild>
      <MouseParallaxChild className="wr-element" factorX={0.1} factorY={0.4}>
        <img src={Badge01} alt="Illustration element" />
      </MouseParallaxChild>
      <img className="wr-element" src={BadgeBig} alt="Illustration element" />
      <MouseParallaxChild className="wr-element" factorX={0.4} factorY={0.1}>
        <img src={LineBlack} alt="Illustration element" />
      </MouseParallaxChild>
      <MouseParallaxChild className="wr-element" factorX={0.5} factorY={0.5}>
        <img src={LineWhite} alt="Illustration element" />
      </MouseParallaxChild>
      <img
        className="wr-element"
        src={RectangleBig}
        alt="Illustration element"
      />
    </div>
  );
};
