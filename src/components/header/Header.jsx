import style from "./style.module.scss";

export default function Header() {
  return (
    <div className={style.wrapper}>
      <div className={style.logo}>
        <img src="#" alt="logo" />
      </div>
      <div className={style.navigation}>
        <div className={style.home}>
          <a href="#">home</a>
        </div>
        <div className={style.words}>
          <a href="#">words</a>
        </div>
        <div className={style.cards}>
          <a href="#">cards</a>
        </div>
        <div className={style.page}>
          <a href="#">
            <img src="#" alt="photo" />
          </a>
        </div>
      </div>
    </div>
  );
}
