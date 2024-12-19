import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import Layout from "./components/Layout/Layout";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import ContactPage from "./pages/ContactPage/ContactPage";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout></Layout>}>
        <Route index element={<HomePage></HomePage>} />
        <Route path="catalog" element={<CatalogPage></CatalogPage>} />
        <Route path="contact" element={<ContactPage></ContactPage>} />
      </Route>
    </Routes>
  )
}

export default App
