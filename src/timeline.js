import { collection, getDoc, orderBy, query } from "firebase/firestore";
import { useState } from "react";
import { auth, db } from "./firebase";
const Timeline = () => {
  const [tweets, setTweet] = useState([]);
  const fetchTweets = async () => {
    const query = query(
      collection(db, "subsns")
      //orderBy("createdAt","desc") 시간순으로 데이터 가져오기
    );
    const snapshot = await getDoc(query);
    snapshot.docs.forEach((doc) => console.log(doc.data()));
  };
  return <div></div>;
};
export default Timeline;
