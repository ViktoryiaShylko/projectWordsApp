import style from "./style.module.scss";

export default function Card() {
  return (
    <div className={style.wrapper}>
      <div className={style.front}>
        <div className={style.word}>Word</div>
        <div className={style.transcription}>[transcription]</div>
      </div>
      <div className={style.back}>
        <div className={style.translate}>Translate</div>
      </div>
    </div>
  );
}
