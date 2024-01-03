import AddNotes from "./AddNotes";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import React, { useState } from "react";

const App = () => {
  const [contents, setContents] = useState([]);

  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const handleDelete = (id) => {
    const newList = contents.filter((content) => content.id !== id);
    setContents(newList);
  };

  const addNewItems = () => {
    const newId = contents.length ? contents[contents.length - 1].id + 1 : 1;
    const newContent = { id: newId, title, Description: note };
    const fullContent = [...contents, newContent];
    setContents(fullContent);
    setTitle("");
    setNote("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewItems();
  };

  return (
    <div className="App">
      <Header title={"Notes Taker"} />
      <AddNotes
        title={title}
        setTitle={setTitle}
        note={note}
        setNote={setNote}
        handleSubmit={handleSubmit}
        addNewItems={addNewItems}
      />
      <Content contents={contents} handleDelete={handleDelete} />
      <Footer />
    </div>
  );
};

export default App;