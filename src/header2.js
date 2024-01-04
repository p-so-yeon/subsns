import { IoMenu } from "react-icons/io5";
import "./header.css";
import { useNavigate } from "react-router-dom";
const Nav2 = () => {
  const navigate = useNavigate();
  const Movesns = () => {
    navigate("/sns");
  };
  const Movebill = () => {
    navigate("/login");
  };
  return (
    <div>
      <div className="nav">
        <div className="topbtn">
          <button className="btn11" onClick={Movesns}>
            커뮤니티
          </button>
          <button className="btn2" onClick={Movebill}>
            실시간위치
          </button>
          <button className="btn3">신고</button>
          <button className="menu">
            {" "}
            <IoMenu />
          </button>
        </div>

        <div className="direction"></div>
      </div>
    </div>
  );
};
export default Nav2;
