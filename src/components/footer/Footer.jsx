import React from "react";
import style from "./style.module.scss";

export default function Footer() {
  return (
    <div className={style.wrapper}>
      <div className={style.contacts}>
        <div className={style.logo}>
          <img src="#" alt="logo" />
        </div>
        <div className={style.adress}>Maple Street 72</div>
        <div className={style.phone}>+1 (912) 564 45 63</div>
      </div>
      <div className={style.social}>
        <a href="#">
          <img src="#" alt="logo" />
          <p>facebook</p>
        </a>
        <a href="#">
          <img src="#" alt="logo" />
          <p>instagram</p>
        </a>
        <a href="#">
          <img src="#" alt="logo" />
          <p>vk</p>
        </a>
      </div>
    </div>
  );
}
