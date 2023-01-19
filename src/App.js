import { Routes, Route } from "react-router-dom";
import Hats from "./routes/hats/hats.component";
import Jackets from "./routes/jackets/jackets.component";
import Sneakers from "./routes/sneakers/sneakers.component";
import Mens from "./routes/mens/mens.component";
import Womens from "./routes/womens/womens.component";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.components";
import CheckOut from "./routes/checkout/checkout.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="jackets" element={<Jackets />} />
        <Route path="hats" element={<Hats />} />
        <Route path="womens" element={<Womens />} />
        <Route path="mens" element={<Mens />} />
        <Route path="sneakers" element={<Sneakers />} />
      </Route>
      <Route path="checkout" element={<CheckOut />} />
    </Routes>
  );
};

export default App;
