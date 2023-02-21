import style from "./style.module.scss";

export default function Words() {
  return (
    <div className={style.wrapper}>
      <table className={style.table}>
        <tr className={style.header}>
          <th className={style.count}>#</th>
          <th>English</th>
          <th>Transcription</th>
          <th>Russian</th>
          <th>Edit</th>
        </tr>
        <tr className={style.content}>
          <td className={style.count}></td>
          <td>
            <input type="text" />
          </td>
          <td>
            <input type="text" />
          </td>
          <td>
            <input type="text" />
          </td>
          <td className={style.edit}>
            <button>Save</button>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
