import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import Layout from "./components/Layout/Layout";
import ShopPage from "./pages/ShopPage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";
import { Provider } from "./context/Context";

function App() {
  return (
    <Provider>
      <Routes>
        <Route path='/' element={<Layout></Layout>}>
          <Route index element={<HomePage></HomePage>} />
          <Route path="shop" element={<ShopPage></ShopPage>} />
          <Route path="contact" element={<ContactPage></ContactPage>} />
          <Route path="product" element={<ProductPage></ProductPage>} />
          <Route path="authentication" element={<ProductPage></ProductPage>} />
        </Route>
      </Routes>
    </Provider>
  )
}

export default App
