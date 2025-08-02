// import logo from "./logo.svg";
import "./App.css";
import Navebar from "./components/Navebar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navebar title="TextUtils" aboutText="About" />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" />
      </div>
    </>
  );
}

export default App;
