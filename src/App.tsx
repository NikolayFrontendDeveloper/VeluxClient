import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import Layout from "./components/Layout/Layout";
import ShopPage from "./pages/ShopPage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";
import { SwiperProvider } from './context/SwiperContext';

function App() {
  return (
    <SwiperProvider>
      <Routes>
        <Route path='/' element={<Layout></Layout>}>
          <Route index element={<HomePage></HomePage>} />
          <Route path="shop" element={<ShopPage></ShopPage>} />
          <Route path="contact" element={<ContactPage></ContactPage>} />
          <Route path="product" element={<ProductPage></ProductPage>} />
        </Route>
      </Routes>
    </SwiperProvider>
  )
}

export default App
