import { IoMenu } from "react-icons/io5";
import "./header.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Nav2 = () => {
  const navigate = useNavigate();
  const Movesns = () => {
    navigate("/sns");
  };
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };
  const Movebill = () => {
    navigate("/login");
  };
  return (
    <div>
      <div className="nav">
        <div className="topbtn">
          <div className="leftbtn">
            <button className="btn11" onClick={Movesns}>
              커뮤니티
            </button>
            <button className="btn2" onClick={Movebill}>
              실시간위치
            </button>
            <button className="btn3">신고📢</button>
          </div>
          <button className="menu" onClick={toggleMenu}>
            {" "}
            <IoMenu />{" "}
            {isMenuVisible && (
              <div className="menubutton">
                <button className="logoutbtn">로그아웃</button>
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
