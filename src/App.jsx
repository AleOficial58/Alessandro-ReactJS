import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemList from "./components/ItemList";
import ItemDetail from "./components/ItemDetail";
import { ShopContext } from "./Contexts/Context";
import Document from "./components/Document";
import Collection from "./components/Document";

const App = () => {

  return (
    <>

    {/*<ShopContext>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </ShopContext> */}

    {/*<Document/>*/}
    <Collection/>

    </>

  );
};



export default App;
