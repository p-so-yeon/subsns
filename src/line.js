import "./header.css";
import { FaPlusSquare } from "react-icons/fa";
const Line = ({ selectedRoom, onSelectRoom }) => {
  return (
    <div>
      <div className="choose">
        {/* select 엘리먼트로 수정 */}
        <select
          value={selectedRoom}
          onChange={(e) => onSelectRoom(e.target.value)}
        >
          <option value={1}>1호선</option>
          <option value={2}>수인분당선</option>
        </select>
      </div>
    </div>
  );
};
export default Line;
