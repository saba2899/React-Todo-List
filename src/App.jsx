import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Option } from "./components/Option";
import ThemeBtn from "./components/ThemeBtn";
import "./index.css";
import AddButton from "./components/AddButton";
import { useEffect, useState } from "react";
import NewNote from "./components/NewNote";
import { useReducer } from "react";
import List from "./components/List";
import detective from "./assets/Detective.png";
import dartDetective from "./assets/darkDetective.png";

const initialState = JSON.parse(localStorage.getItem("notes")) || [];

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: Date.now(), text: action.text, completed: false },
      ];
    case "EDIT":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, text: action.text } : todo
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
}

function App() {
  const [open, setOpen] = useState(false);
  const [notes, dispatch] = useReducer(reducer, initialState);
  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredNotes = notes
    .filter((note) =>
      note.text.toLowerCase().includes(searchText.toLocaleLowerCase())
    )
    .filter((note) => {
      if (filter === "All") return true;
      if (filter === "Complete") return note.completed;
      if (filter === "Incomplete") return !note.completed;
    });

  const isEmpty = filteredNotes.length === 0;

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="relative h-screen w-screen">
      <div className="flex flex-col gap-3 h-screen w-screen items-center bg-primary dark:bg-primary-dark transition-all">
        <Header />
        <div className="flex gap-3">
          <Search
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Option value={filter} onChange={(e) => setFilter(e.target.value)} />
          <ThemeBtn />
        </div>
        {isEmpty ? (
          <div className="mt-5 flex flex-col items-center gap-4">
            <img
              src={detective}
              alt={detective}
              className="block dark:hidden"
            />
            <img
              src={dartDetective}
              alt={dartDetective}
              className="hidden dark:block"
            />
            <p className="font-semibold dark:text-white">Empty....</p>
          </div>
        ) : (
          <List
            state={filteredNotes}
            onDelete={(id) => {
              dispatch({ type: "DELETE", id });
            }}
            onEdit={(id) =>
              dispatch({ type: "EDIT", id, text: prompt("Edit todo:") })
            }
            onToggle={(id) => dispatch({ type: "TOGGLE", id })}
          />
        )}
      </div>

      {open && (
        <>
          <div className="fixed inset-0 bg-black opacity-40 z-[1000]"></div>
          <NewNote
            onClose={() => setOpen(false)}
            onAdd={(text) => {
              dispatch({ type: "ADD", text });
              setOpen(false);
            }}
          />
        </>
      )}
      <AddButton onOpen={() => setOpen(true)} />
    </div>
  );
}

export default App;
