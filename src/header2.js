import { IoMenu } from "react-icons/io5";
import "./header.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Line from "./line";
import { auth, db } from "./firebase";
import { getAuth, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const Nav2 = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyDMh0wjrfapZxMYIF5ScHWrRF5xH8BAHtw",
    authDomain: "subsns-9305e.firebaseapp.com",
    projectId: "subsns-9305e",
    storageBucket: "subsns-9305e.appspot.com",
    messagingSenderId: "255762467710",
    appId: "1:255762467710:web:f469b9eb9bfdade874412f",
    measurementId: "G-X9YBYH0K27",
  };
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);
  const storage = getStorage(app);
  const auth = getAuth();

  const navigate = useNavigate();
  const Movesns = () => {
    navigate("/sns_1");
  };
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };
  const Movebill = () => {
    navigate("/login");
  };
  const Movereport = () => {
    navigate("/report");
  };
  const Logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div>
      {" "}
      <div className="nav">
        <div className="topbtn">
          <div className="leftbtn">
            <button className="btn11" onClick={Movesns}>
              커뮤니티
            </button>

            <button className="btn3" onClick={Movereport}>
              신고
            </button>
          </div>
          <button className="menu" onClick={toggleMenu}>
            {" "}
            <IoMenu />{" "}
            {isMenuVisible && (
              <div className="menubutton">
                <button className="logoutbtn" onClick={Logout}>
                  로그아웃
                </button>
                <button className="mypagebtn">마이페이지</button>
              </div>
            )}
          </button>
        </div>

        <div className="direction"></div>
      </div>
    </div>
  );
};
export default Nav2;
