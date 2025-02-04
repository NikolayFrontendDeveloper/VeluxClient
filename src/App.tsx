import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import Layout from "./components/Layout/Layout";
import ShopPage from "./pages/ShopPage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";
import { Provider } from "./context/Context";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <Provider>
      <Routes>
        <Route path='/' element={<Layout></Layout>}>
          <Route index element={<HomePage></HomePage>} />
          <Route path="shop" element={<ShopPage></ShopPage>} />
          <Route path="contact" element={<ContactPage></ContactPage>} />
          <Route path="product" element={<ProductPage></ProductPage>} />
          <Route path="profile" element={<ProfilePage></ProfilePage>} />
          <Route path="log-in" element={<LogInPage></LogInPage>} />
          <Route path="sign-up" element={<SignUpPage></SignUpPage>} />
        </Route>
      </Routes>
    </Provider>
  )
}

export default App
