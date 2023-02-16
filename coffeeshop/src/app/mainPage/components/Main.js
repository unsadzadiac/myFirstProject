import { Header } from "../components/Header/Header";
import { MainText } from "./MainText/main";
import { OurBest } from "./BestItem/main";
import { Footer } from "./Footer/Footer";
import { AboutUsMain } from "./AboutsUsElements/main";
import { BackgroundHeader } from "../components/Header/style";

export const Main = () => {
     return (
          <>
               <BackgroundHeader>
                    <Header />
                    <MainText />
               </BackgroundHeader>
               <AboutUsMain />
               <OurBest/>
               <Footer />
          </>
     );
};
