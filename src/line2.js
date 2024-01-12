import "./header.css";
import { useNavigate } from "react-router-dom";
import { FaPlusSquare } from "react-icons/fa";
const Line2 = () => {
  const navigate = useNavigate();
  const nav1 = () => {
    navigate("/sns_1", { replace: true });
  };
  const navsooin = () => {
    navigate("/sns_sooin", { replace: true });
  };
  return (
    <div>
      <div className="choose">
        {" "}
        <button className="line1" onClick={nav1}>
          1호선
        </button>
        <button className="sooin" onClick={navsooin}>
          수인분당선
        </button>
        <button className="plusbutton">
          <FaPlusSquare />
        </button>
      </div>
    </div>
  );
};
export default Line2;
