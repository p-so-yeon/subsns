import { AiTwotoneAlert } from "react-icons/ai";
import "./report.css";
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";
import { getFirestore } from "firebase/firestore";
import {
  addDoc,
  collection,
  query,
  orderBy,
  getDocs,
} from "firebase/firestore";

import Line from "./line";
import { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { getAuth } from "firebase/auth";

const Report = () => {
  const [isLoading, setLoading] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(1);
  const [selectedReport, setSelectedReport] = useState("");
  // const [sendreport, setreport] = useState([]);
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
  const db = getFirestore(app);
  const handleReport = (value) => {
    setSelectedReport(value);
  };
  const navigate = useNavigate();
  const user = auth.currentUser;
  useEffect(() => {
    if (user) {
      console.log(user.email);
    } else {
      console.log("사용자 정보가 없습니다.");
      navigate("/");
    }
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!user || isLoading) return;
    try {
      setLoading(true);
      await addDoc(collection(db, "report"), {
        roomNumber: selectedRoom,
        content: selectedReport,
      }); //어떤 컬렉션에 다큐먼트를 정하고 싶은지
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
      alert("신고가 완료되었습니다");
    }
  };

  return (
    <div className="report_body">
      {" "}
      <div className="headerwidth">
        <Line selectedRoom={selectedRoom} onSelectRoom={setSelectedRoom}></Line>
      </div>
      <div>
        {" "}
        <div className="report_list">
          {" "}
          <div className="alerticon">
            <AiTwotoneAlert size="30px" color="red"></AiTwotoneAlert>
          </div>
          <div className="needs"> 무엇이 필요하신가요?</div>
          <div className="hot_">
            <button
              className="hot"
              value={"hot"}
              onClick={() => handleReport("hot")}
            >
              더워요🥵
            </button>{" "}
          </div>
          <div className="cold_">
            {" "}
            <button
              className="cold"
              value={"cold"}
              onClick={() => handleReport("cold")}
            >
              추워요🥶
            </button>{" "}
          </div>
          <div className="billon_">
            {" "}
            <button
              className="billon"
              value={"villon"}
              onClick={() => handleReport("villon")}
            >
              빌런 출몰😈
            </button>{" "}
          </div>
          <div className="store_">
            <button
              className="store"
              value={"store"}
              onClick={() => handleReport("store")}
            >
              불법 상인🛒
            </button>
          </div>
          <div className="noise_">
            <button
              className="noise"
              value={"noise"}
              onClick={() => handleReport("noise")}
            >
              소음 자제🤐
            </button>{" "}
          </div>
          <div className="etc_">
            {" "}
            <button
              className="etc"
              value={"etc"}
              onClick={() => handleReport("etc")}
            >
              기타🚇
            </button>{" "}
          </div>
        </div>
        <div className="btnlay">
          <button onClick={onSubmit} className="reportbtn">
            신고하기
          </button>
        </div>
      </div>
    </div>
  );
};
export default Report;
