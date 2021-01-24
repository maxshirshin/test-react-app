import Nav from "./organisms/nav";
import "./components/content/index.scss";

function App() {
  return (
    <div className="b-app">
      <Nav/>
      <div className="b-content">Here the text goes</div>
    </div>
  );
}

export default App;
