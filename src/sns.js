import { initializeApp } from "firebase/app";
import { addDoc, collection } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { useState } from "react";
import { auth, db } from "./firebase";
const Sns = () => {
  const [isLoading, setLoading] = useState(false);
  const [post, setpost] = useState("");
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

  const onSubmit = async (event) => {
    event.preventDefault();
    const user = auth.currentUser;
    const data = new FormData(event.currentTarget);
    if (!user || isLoading || post === "" || data.length > 180) return;
    try {
      setLoading(true);
      await addDoc(collection(db, "subsns"), {
        post,
        createdAt: Date.now(),
        username: user.displayName || "익명",
        userId: user.uid,
      }); //어떤 컬렉션에 다큐먼트를 정하고 싶은지
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <textarea
          rows={5}
          maxLength={180}
          onChange={onChange}
          value={post}
          placeholder="What is happening?!"
        />
        <input type="submit" value={isLoading ? "Posting..." : "Post Tweet"} />
      </form>
    </div>
  );
};
export default Sns;
