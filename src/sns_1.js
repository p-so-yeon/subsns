import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  query,
  orderBy,
  getDocs,
} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { auth, db } from "./firebase";
import { FaUser } from "react-icons/fa";
import { format, formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";
import { FiLoader } from "react-icons/fi";
import Line2 from "./line2";
import Nav2 from "./header2";
import rabbit from "./image.png";
import "./sns.css";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Sns_1 = () => {
  const navigate = useNavigate();

  const [isLoading, setLoading] = useState(false);
  const [post, setpost] = useState("");
  const [file, setfile] = useState([]);
  const [tweets, setTweet] = useState([]); //탐라 불러오기
  const onChange = (e) => {
    setpost(e.target.value);
  };

  const firebaseConfig = {
    apiKey: "AIzaSyDMh0wjrfapZxMYIF5ScHWrRF5xH8BAHtw",
    authDomain: "subsns-9305e.firebaseapp.com",
    projectId: "subsns-9305e",
    storageBucket: "subsns-9305e.appspot.com",
    messagingSenderId: "255762467710",
    appId: "1:255762467710:web:f469b9eb9bfdade874412f",
    measurementId: "G-X9YBYH0K27",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);
  const storage = getStorage(app);
  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    console.log(user.email);
  } else {
    console.log("사용자 정보가 없습니다.");

    navigate("/");
  }
  const onSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    if (!user || isLoading || post === "" || data.length > 180) return;
    try {
      setLoading(true);
      await addDoc(collection(db, "subsns"), {
        post,
        createdAt: new Date(),
        username: user.displayName || "익명",
        userId: user.uid,
        useremail: user.email,
      }); //어떤 컬렉션에 다큐먼트를 정하고 싶은지
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
    window.location.reload();
  };

  const fetchsns = async () => {
    const snsquery = query(
      collection(db, "subsns"),
      orderBy("createdAt", "desc")
    );
    const snapshot = await getDocs(snsquery); //getdoc 은 스냅샷을 리턴함
    const data = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    console.log(data);
    setTweet(data);

    return data;
  };
  useEffect(() => {
    fetchsns();
  }, []);

  return (
    <div className="subsns">
      <Line2></Line2>
      <form onSubmit={onSubmit} className="submit">
        {" "}
        <div className="postbox">
          {" "}
          <textarea
            required
            className="postarea"
            rows={5}
            maxLength={180}
            onChange={onChange}
            value={post}
            placeholder="1호선 지하철에서 무슨일이 일어나고 있나요?"
          />{" "}
          <button type="submit" className="postbtn">
            {isLoading ? <FiLoader size="25" /> : <IoIosSend size="25" />}
          </button>
        </div>{" "}
      </form>
      <div className="snspost">
        {tweets.map((data) => (
          <div className="timelinebox">
            <div className="firstline">
              <div className="userinfo">
                <div className="profileimg">
                  <FaUser />
                </div>
                <div>{data.useremail}</div>
              </div>{" "}
              <div className="divline"></div>
              <div className="posttime"> {data.createdAt.seconds}</div>{" "}
            </div>
            <div className="timelineinput">
              <div key={data.id} className="timeline">
                {data.post}
              </div>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Sns_1;
