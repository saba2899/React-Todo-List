export function Option({ value, onChange }) {
  return (
    <select
      className="bg-[#6C63FF] text-white rounded hover:bg-[#5850DD] cursor-pointer lg:w-fit w-fit"
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
