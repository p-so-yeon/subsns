import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sns_1 from "./sns_1";
import SignUp from "./Register";
import SignIn from "./Login";
import Timeline from "./timeline";
import Report from "./report";
import Nav2 from "./header2";
import Memo from "./memo";
import Line from "./line";

import Sns_sooin from "./sooin";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav2></Nav2>
        <Routes>
          {" "}
          <Route path="/" element={<SignIn />} />
          <Route path="register" element={<SignUp />} />
          <Route path="login" element={<SignIn />} />
          <Route path="sns_1" element={<Sns_1 />} />
          <Route path="sns_sooin" element={<Sns_sooin />} />
          <Route path="report" element={<Report />} />
          <Route path="memo" element={<Memo />} />
        </Routes>{" "}
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
