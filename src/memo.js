import "./report.css";
const Memo = () => {
  return (
    <div className="complain">
      <div className="complain_">불편 사항을 입력해주세요 </div>
      <form className="txtform">
        <textarea className="etcmemo" />
      </form>{" "}
      <div className="submitbtn">
        <button>제출</button>{" "}
      </div>
    </div>
  );
};
export default Memo;
