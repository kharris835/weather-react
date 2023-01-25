import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer className="footer p-1">
          <a
            href="https://github.com/kharris835/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Kelsie Harris (powered by React w/ ☕️)
        </footer>
      </div>
    </div>
  );
}
