import clsx from "clsx";

function Input({ className, placeholder, value, onChange }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={clsx(
        "border border-[#6C63FF] min-h-[38px] p-1 caret-[#6C63FF] text-[#6C63FF] placeholder:pl-3 rounded outline-[#6C63FF] dark:placeholder:text-[#666666] dark:border-white dark:outline-[#FFFFFF] dark:text-white dark:caret-white",
        className
      )}
    />
  );
}

export default Input;
