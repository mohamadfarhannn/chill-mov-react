import { Routes, Route } from "react-router";
import WrapPage from "./WrapPage.jsx";
import Homepage from "./components/5-pages/Homepage.jsx";
import Login from "./components/5-pages/Login.jsx";
import Register from "./components/5-pages/Register.jsx";
import Series from "./components/5-pages/Series.jsx";
import Film from "./components/5-pages/Film.jsx";
import MyList from "./components/5-pages/MyList.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WrapPage />}>
        <Route index element={<Homepage />} />
        <Route path="series" element={<Series />} />
        <Route path="film" element={<Film />} />
        <Route path="mylist" element={<MyList />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
