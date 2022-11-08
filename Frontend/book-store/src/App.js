import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import AddBook from "./components/AddBook";
import BookDetails from "./components/Book/BookDetails";
import Books from "./components/Book/Books";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/add" element={<AddBook/>} exact/>
          <Route path="/books" element={<Books/>} exact/>
          <Route path="/about" element={<About/>} exact/>
          <Route path="/books/:id" element={<BookDetails/>} exact/>
        </Routes>
      </main>
    </>
  );
}

export default App;
