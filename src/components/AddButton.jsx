import { FaPlus } from "react-icons/fa6";

function AddButton({ onOpen }) {
  return (
    <div className="ralative">
      <button
        onClick={onOpen}
        className="absolute top-3/5 right-1/4 bg-[#6C63FF] p-2 rounded-full text-white cursor-pointer hover:bg-[#5850DD]"
      >
        <FaPlus size={30} />
      </button>
    </div>
  );
}

export default AddButton;
