export function Option({ value, onChange }) {
  return (
    <select
      name=""
      id=""
      className="bg-[#6C63FF] text-white rounded hover:bg-[#5850DD] cursor-pointer"
      value={value}
      onChange={onChange}
    >
      <option value="All" className="bg-white text-[#6C63FF] ">
        All
      </option>
      <option value="Complete" className="bg-white text-[#6C63FF]">
        Complete
      </option>
      <option value="Incomplete" className="bg-white text-[#6C63FF]">
        Incomplete
      </option>
    </select>
  );
}
