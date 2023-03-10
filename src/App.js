import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="San Diego" />
        <footer className="footer p-1">
          <a
            href="https://github.com/kharris835/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by{" "}
          <a
            href="https://spontaneous-croquembouche-c44b06.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Kelsie Harris
          </a>{" "}
          (powered by React w/ ☕️)
        </footer>
      </div>
    </div>
  );
}
