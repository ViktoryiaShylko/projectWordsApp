import style from "./style.module.scss";
import Card from "../card/Card";
import arrowLeft from "../../assets/images/left.png";
import arrowRight from "../../assets/images/right.png";

export default function Cards() {
  return (
    <div className={style.wrapper}>
      <div className={style.arrow}>
        <svg className={style.left} viewBox="0 0 5 9">
          <path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z"></path>
        </svg>
      </div>
      <Card></Card>
      <div className={style.arrow}>
        <svg className={style.right} viewBox="0 0 5 9">
          <path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z"></path>
        </svg>
      </div>
    </div>
  );
}
