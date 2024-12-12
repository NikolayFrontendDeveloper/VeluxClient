import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout></Layout>}>
        <Route index element={<HomePage></HomePage>} />
      </Route>
    </Routes>
  )
}

export default App
