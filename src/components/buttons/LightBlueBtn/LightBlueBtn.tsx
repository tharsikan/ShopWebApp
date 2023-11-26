import { Link } from "react-router-dom";

const LightBlueBtn = ({ label }: { label?: any }) => {
  return (
    <Link to="/browse">
      <button className="bg-accentGray-400 hover:bg-accentGray-500 transition-colors rounded-[10px] h-[40px] text-blue-700 text-sm font-semibold w-full py-3">
        {label}
      </button>
    </Link>
  );
};

export default LightBlueBtn;
