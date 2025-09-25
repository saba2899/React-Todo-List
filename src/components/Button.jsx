import clsx from "clsx";

function Button({ children, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "border px-4 py-0.5 rounded max-w-[97px] min-h-[38px]  cursor-pointer border-[#6C63FF] font-semibold",
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
