import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <footer className="footer">
        <a
          href="https://github.com/kharris835/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Kelsie Harris (written in React w/ ☕️)
      </footer>
    </div>
  );
}
