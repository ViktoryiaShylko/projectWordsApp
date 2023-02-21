import style from "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Words from "./components/words/Words";
import Cards from "./components/cards/Cards";
import Card from "./components/card/Card";

export default function App() {
  return (
    <div className={style.App}>
      <Header></Header>
      <Words></Words>
      <Cards></Cards>
      <Footer></Footer>
    </div>
  );
}
