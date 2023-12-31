import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sns from "./sns";
import SignUp from "./Register";
import SignIn from "./Login";
import Main from "./main";
import Timeline from "./timeline";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="register" element={<SignUp />} />
          <Route path="login" element={<SignIn />} />
          <Route path="main" element={<Main />} />
          <Route path="sns" element={<Sns />} />
          <Route path="timeline" element={<Sns />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
