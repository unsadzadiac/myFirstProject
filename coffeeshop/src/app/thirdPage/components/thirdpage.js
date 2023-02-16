import { Items } from "../../secondPage/components/Main/Item/items";
import { MainAboutOurBeans } from "./Main/AboutOurBeans/main";
import { initialData } from "../../secondPage/components/Main/constants";
import { Footer } from "../../secondPage/components/Footer/Footer";
import { Header } from "../../secondPage/components/Header/Header";

export const ThirdPage = () => {
     return (
          <>
               <Header title={"For your pleasure"} />

               <MainAboutOurBeans />
               <Items items={initialData} />
               <Footer />
          </>
     );
};
