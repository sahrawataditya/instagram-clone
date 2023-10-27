import NavBar from "./components/NavBar";
import {
  useEffect,
  createContext,
  useReducer,
  useContext,
} from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Screen/Home";
import Login from "./components/Screen/Login";
import Signup from "./components/Screen/Signup";
import Profile from "./components/Screen/Profile";
import Createpost from "./components/Screen/Createpost";
import { initialState, userReducer } from "./reducers/userReducer";

export const Usercontext = createContext();

const Routing = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(Usercontext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "USER", payload: user });
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/create-post" element={<Createpost />} />
    </Routes>
  );
};

function App() {
    const [state, dispatch] = useReducer(userReducer, initialState);
    return (
      <Usercontext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <NavBar></NavBar>
          <Routing></Routing>
        </BrowserRouter>
      </Usercontext.Provider>
    );
  }

export default App;
