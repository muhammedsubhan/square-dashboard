import "./App.scss";
import Header from "./components/Header/Header";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
    </div>
  );
}

export default App;
