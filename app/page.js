import Image from "next/image";
import PreNav from "./components/preNav/preNav"
import Nav from "./components/nav/nav"
import Header from "./components/header/header"
import Papular from "./components/papular/papular"
import Near from "./components/near/near"
import Berand from "./components/berand/berand"
import SpecialDes from "./components/specialDestination/specialDestination"
import MostSale from "./components/mostSell/mostSell"
import Footer from "./components/footer/footer"
export default function Home() {
  return (
   <>
   <PreNav/>
   <Nav/>
   <Header/>
   <Papular/>
   <Near/>
   <Berand/>
   <SpecialDes/>
   <MostSale/>
   <Footer/>
   </>
  );
}
