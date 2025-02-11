import { Routes, Route } from "react-router-dom";
import AuthProvider from 'react-auth-kit'
import HomePage from './pages/HomePage/HomePage';
import Layout from "./components/Layout/Layout";
import ShopPage from "./pages/ShopPage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";
import { Provider } from "./context/Context";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";
import createStore from 'react-auth-kit/createStore';

interface IUserData {
  name: string;
  uuid: string;
 };

function App() {
  
  return (
    <AuthProvider store={createStore<IUserData>({
      authName:'_auth',
      authType:'cookie',
      cookieDomain: window.location.hostname,
      cookieSecure: window.location.protocol === 'https:'
     })}>    
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
    </AuthProvider>
  )
}

export default App
