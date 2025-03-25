import { Routes, Route, Link } from "react-router-dom";
import Users from "./Users.jsx";
import Products from "./Products.jsx";

function App() {
  return (
    <div>
      <h1>FakeStore API CRUD Operations</h1>
      <nav>
        <Link to="/users">Users</Link> | <Link to="/products">Products</Link>
      </nav>
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;