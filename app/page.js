import PreNav from "./components/preNav/PreNav";
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import Papular from "./components/papular/Papular";
import Near from "./components/near/Near";
import Berands from "./components/berands/Berands";
import SpecialDes from "./components/specialDestination/specialDestination";
import MostSale from "./components/mostSell/MostSell";
import Footer from "./components/footer/Footer";
export default function Home() {
  return (
    <>
      <PreNav />
      <Nav />
      <Header />
      <Papular />
      <Near />
      <Berands />
      <SpecialDes />
      <MostSale />
      <Footer />
    </>
  );
}
