import Input from "./Input";
import Button from "./Button";
import { useState } from "react";

function NewNote({ onClose, onAdd }) {
  const [value, setValue] = useState("");

  function handleOnAdd() {
    if (value.trim() !== "") {
      onAdd(value);
      setValue("");
    }
  }

  return (
    <div className="fixed  bg-white dark:bg-[#252525] dark:border-white top-2/7 -translate-y-1/2  shadow-2xl left-1/2 -translate-x-1/2 z-[2000]  border lg:max-w-[500px] lg:max-h-[289px] w-fit flex flex-col  items-center justify-center  rounded-2xl p-3 gap-30">
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-bold text-2xl dark:text-white"> NEW NOTE</h1>
        <Input
          className="lg:min-w-[480px] w-[300px]"
          placeholder="Input your note ..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-center lg:gap-60 gap-20">
        <Button className="text-[#6C63FF]" onClick={onClose}>
          CANCEL
        </Button>
        <Button
          className="bg-[#6C63FF] text-white hover:bg-[#5850DD]"
          onClick={handleOnAdd}
        >
          APPLY
        </Button>
      </div>
    </div>
  );
}

export default NewNote;
