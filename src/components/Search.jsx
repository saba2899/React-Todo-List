import Input from "./Input";

export function Search({ value, onChange }) {
  return (
    <div className="relative w-fit">
      <Input
        placeholder="Search note ..."
        className="lg:min-w-[595px]"
        value={value}
        onChange={onChange}
      />
      <span className="absolute right-4 top-1/2 -translate-y-1/2 pl-3">
        <svg
          className="w-5 h-5 text-[#6C63FF] dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </span>
    </div>
  );
}
