import {Main} from "./mainPage/components/Main"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import {SecondPage} from './secondPage/components/SecondPage'
import { ThirdPage } from './thirdPage/components/thirdpage'
import { ItemsPage } from "./secondPage/components/ItemPage/Itemspage";
import { Cart } from "./cart/cart";


function App() {

  return (
<BrowserRouter>
          <Routes>
            <Route path={'/'} element={<Main/>}/>
              <Route path={'/our_coffee'} element={<SecondPage/>}/>        
              <Route path={'/for_your_pleasure'} element={<ThirdPage/>}/>
              <Route path={'/item_page/:id'} element={<ItemsPage/>}/>
              <Route path={'/cart'} element={<Cart/>}/>
          </Routes>
</BrowserRouter>
  );

}



export default App;

