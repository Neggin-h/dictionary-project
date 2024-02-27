import logo from "./Logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="Logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="footer">
          <small>Codded by Neggin Hariri</small>
        </footer>
      </div>
    </div>
  );
}
