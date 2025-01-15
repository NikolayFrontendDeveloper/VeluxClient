import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import Layout from "./components/Layout/Layout";
import ShopPage from "./pages/ShopPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout></Layout>}>
        <Route index element={<HomePage></HomePage>} />
        <Route path="shop" element={<ShopPage></ShopPage>} />
        <Route path="contact" element={<ContactPage></ContactPage>} />
      </Route>
    </Routes>
  )
}

export default App
